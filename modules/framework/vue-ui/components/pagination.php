<div
	:class="classesList"
>
	<ul :class="[baseClass + '-items']">
		<li
			:class="prevClasses"
			@click="prev">
			<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.67089 0L-5.96046e-08 6L5.67089 12L7 10.5938L2.65823 6L7 1.40625L5.67089 0Z" fill="#7B7E81"/>
			</svg>
		</li>
		<li :class="firstPageClasses" @click="changePage(1)"><span>1</span></li>
		<li v-if="currentPage > 5" :class="[baseClass + '-item', baseClass + '-item-jump-prev']" @click="fastPrev"><span>...</span></li>
		<li v-if="currentPage === 5" :class="[baseClass + '-item']" @click="changePage(currentPage - 3)"><span>{{ currentPage - 3 }}</span></li>
		<li v-if="currentPage - 2 > 1" :class="[baseClass + '-item']" @click="changePage(currentPage - 2)"><span>{{ currentPage - 2 }}</span></li>
		<li v-if="currentPage - 1 > 1" :class="[baseClass + '-item']" @click="changePage(currentPage - 1)"><span>{{ currentPage - 1 }}</span></li>
		<li v-if="currentPage != 1 && currentPage != allPages" :class="[baseClass + '-item',baseClass + '-item-active']"><span>{{ currentPage }}</span></li>
		<li v-if="currentPage + 1 < allPages" :class="[baseClass + '-item']" @click="changePage(currentPage + 1)"><span>{{ currentPage + 1 }}</span></li>
		<li v-if="currentPage + 2 < allPages" :class="[baseClass + '-item']" @click="changePage(currentPage + 2)"><span>{{ currentPage + 2 }}</span></li>
		<li v-if="allPages - currentPage === 4" :class="[baseClass + '-item']" @click="changePage(currentPage + 3)"><span>{{ currentPage + 3 }}</span></li>
		<li v-if="allPages - currentPage >= 5" :class="[baseClass + '-item', baseClass + '-item-jump-next']" @click="fastNext"><span>...</span></li>
		<li v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><span>{{ allPages }}</span></li>
		<li
			:class="nextClasses"
			@click="next">
			<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.32911 0L7 6L1.32911 12L0 10.5938L4.34177 6L0 1.40625L1.32911 0Z" fill="#7B7E81"/>
			</svg>
		</li>
	</ul>
</div>
