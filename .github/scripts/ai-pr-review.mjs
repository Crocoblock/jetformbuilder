#!/usr/bin/env node
import OpenAI from "openai";
import fs from "node:fs/promises";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODEL = process.env.AI_REVIEW_MODEL || "gpt-4.1-mini";

async function main() {
  const eventPath = process.env.GITHUB_EVENT_PATH;

  if (!eventPath) {
    console.error("GITHUB_EVENT_PATH is not set.");
    process.exit(1);
  }

  const event = JSON.parse(await fs.readFile(eventPath, "utf8"));

  if (!event.pull_request) {
    console.error("No pull_request in event payload.");
    process.exit(0);
  }

  const pr = event.pull_request;
  const repoFull = process.env.GITHUB_REPOSITORY;

  if (!repoFull) {
    console.error("GITHUB_REPOSITORY is not set.");
    process.exit(1);
  }

  const [owner, repo] = repoFull.split("/");
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    console.error("GITHUB_TOKEN is not set.");
    process.exit(1);
  }

  // 1) Fetch changed files for this PR
  const filesResp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${pr.number}/files?per_page=200`,
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!filesResp.ok) {
    console.error("Failed to fetch PR files:", filesResp.status, await filesResp.text());
    process.exit(1);
  }

  const files = await filesResp.json();

  // 2) Build a truncated diff summary
  let diffSummary = "";
  const maxFiles = 30;
  const maxLinesPerFile = 200;

  for (const f of files.slice(0, maxFiles)) {
    if (!f.patch) continue;

    const isRelevant =
      f.filename.endsWith(".php") ||
      f.filename.endsWith(".js") ||
      f.filename.endsWith(".ts") ||
      f.filename.endsWith(".tsx") ||
      f.filename.endsWith(".jsx") ||
      f.filename.endsWith(".css") ||
      f.filename.endsWith(".scss");

    if (!isRelevant) continue;

    const patchLines = f.patch.split(/\r?\n/).slice(0, maxLinesPerFile).join("\n");

    diffSummary += `
File: ${f.filename}
Status: ${f.status}

Patch (truncated):
${patchLines}

----------------------------------------`;
  }

  if (!diffSummary.trim()) {
    diffSummary = "No relevant diff (PHP/JS/TS/CSS) or patch is empty.";
  }

  // 3) Read repo guidelines (plugin-specific instructions)
  let repoGuidelines = "";
  try {
    repoGuidelines = await fs.readFile(".github/ai-repo-guidelines.md", "utf8");
  } catch {
    // optional
  }

  // 4) Read top of CHANGELOG.md to learn style
  let changelogSnippet = "";
  try {
    const changelog = await fs.readFile("CHANGELOG.md", "utf8");
    changelogSnippet = changelog.split("\n").slice(0, 200).join("\n");
  } catch {
    // optional
  }

  // 5) Build instructions for the Responses API
  const instructions = `
You are a senior WordPress plugin engineer and release manager reviewing a Pull Request
for the WordPress plugin.

General rules:
- Follow WordPress Coding Standards (WPCS).
- Focus on security (nonces, capabilities, escaping/sanitizing), performance, and backward compatibility.
- Be careful with potential backward compatibility issues.
- Consider multisite, large datasets, and integration with Elementor/Bricks/Gutenberg where relevant.

Repository-specific guidelines (from .github/ai-repo-guidelines.md):
${repoGuidelines || "(no additional repo guidelines provided)"}

Changelog style example (from top of CHANGELOG.md, when available):
${changelogSnippet || "(CHANGELOG.md not available; use '- FIX: ...', '- ADD: ...', '- IMPROVE: ...', '- CHANGE: ...')"}

You MUST:
1) Review the PR changes and produce a concise but useful review in Markdown.
   - Focus on security issues, performance hotspots, backward compatibility, and obvious bugs.
   - Mention specific files / functions where possible.
   - Call out missing tests for high-risk changes.
2) Propose a single changelog entry for the plugin, matching the changelog style as closely as possible.
   - A single bullet line, prefixed with one of: '- FIX:', '- ADD:', '- IMPROVE:', '- CHANGE:'
   - Short but specific: what changed and which area of the plugin it affects.

Return ONLY JSON that matches the provided JSON schema.
`;

  const userContent = `
Repository: ${owner}/${repo}
PR #${pr.number}
Title: ${pr.title}
Author: ${pr.user.login}

Body:
${pr.body || "(no description)"}

Diff summary (truncated):
${diffSummary}
`;

 	// 6) Call OpenAI Responses API with JSON schema response_format
	const response = await client.responses.create({
		model: MODEL,
		instructions,
		input: [
			{
				role: "user",
				content: userContent,
			},
		],
		text: {
			format: {
			type: "json_schema",
			name: "PRReview",
			strict: true,
			schema: {
				type: "object",
				properties: {
				review_comment: { type: "string" },
				changelog_entry: { type: "string" },
				risk_level: {
					type: "string",
					enum: ["low", "medium", "high"],
				},
				},
				required: ["review_comment", "changelog_entry", "risk_level"],
				additionalProperties: false,
			},
			},
		},
		store: true, // optional but useful if you ever chain with previous_response_id
	});



	const raw =
		response.output_text ??
		response.output?.[0]?.content?.[0]?.text ??
		"{}";

	let parsed;

	try {
		parsed = JSON.parse(raw);
	} catch (e) {
		console.error("Failed to parse JSON from model:\n", raw);
		process.exit(1);
	}

	const review = parsed.review_comment || "_No review generated._";
	const changelog =
	parsed.changelog_entry || "- CHANGE: Internal refactoring.";
	const risk = parsed.risk_level || "unknown";


  const commentBody = `
### 🤖 AI PR Review

**Risk level:** \`${risk}\`

#### Review

${review}

#### Suggested changelog entry

\`${changelog}\`
`;

  // 7) Post comment back to the PR
  const commentResp = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${pr.number}/comments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({ body: commentBody }),
    }
  );

  if (!commentResp.ok) {
    console.error("Failed to post PR comment:", commentResp.status, await commentResp.text());
    process.exit(1);
  }

  console.log("AI PR review posted successfully.");
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
