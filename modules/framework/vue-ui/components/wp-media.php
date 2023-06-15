<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div
		:class="controlClasses"
	>

		<SlickList
			class="cx-vui-media__attachments"
			axis="xy"
			:distance="1"
			:hideSortableGhost="false"
			@input="sortInput"
			v-model="attachmentList"
		>
			<SlickItem
				:class="[ 'cx-vui-media__attachment', `attachment-type-${ attachment.type }` ]"
				v-for="(attachment, index) in attachmentList"
				:index="index"
				:key="index"
			>

				<svg
					class="cx-vui-media__control cx-vui-media__control-remove"
					@click="removeAttachment(attachment.id)"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13 4.00671L9.00671 8L13 11.9933L11.9933 13L8 9.00671L4.00671 13L3 11.9933L6.99329 8L3 4.00671L4.00671 3L8 6.99329L11.9933 3L13 4.00671Z" fill="#C92C2C"/>
				</svg>

				<img :src="'image'===attachment.type ? attachment.url : attachment.icon" alt="">
			</SlickItem>
		</SlickList>
		<div
			class="cx-vui-media__add-button"
			@click="openWpMediaPopup"
		>
			<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.75 5.25H6.75V0.25C6.75 0.111875 6.63813 0 6.5 0H5.5C5.36187 0 5.25 0.111875 5.25 0.25V5.25H0.25C0.111875 5.25 0 5.36187 0 5.5V6.5C0 6.63813 0.111875 6.75 0.25 6.75H5.25V11.75C5.25 11.8881 5.36187 12 5.5 12H6.5C6.63813 12 6.75 11.8881 6.75 11.75V6.75H11.75C11.8881 6.75 12 6.63813 12 6.5V5.5C12 5.36187 11.8881 5.25 11.75 5.25Z" fill="#7B7E81"/>
			</svg>
		</div>
		<input
			type="hidden"
			:id="currentId"
			:name="name"
			:value="inputValue"
			ref="wpmedia"
		>
	</div>
</cx-vui-component-wrapper>
