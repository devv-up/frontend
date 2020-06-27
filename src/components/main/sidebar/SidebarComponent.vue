<template>
	<div class="filter">
		<div class="filter__title">
			<h2 class="filter__title__text">Filters</h2>
			<button class="filter__title__action" @click="handleClear">
				Clear filters
			</button>
		</div>
		<v-divider />
		<div class="filter__list">
			<div>
				<h4>Category</h4>
				<SidebarCategory />
			</div>
			<v-divider />
			<div>
				<h4>Tags</h4>
				<SidebarTag />
			</div>
			<v-divider />
			<div>
				<h4>Time</h4>
				<SidebarTimeOfDay />
			</div>
			<v-divider />
			<div>
				<h4>Date</h4>
				<v-date-picker
					class="filter__list__date"
					no-title
					range
					width="250"
					v-model="selectedDate"
					@change="changeDate"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation } from "vuex-class";

import SidebarCategory from "@/components/main/sidebar/SidebarCategory.vue";
import SidebarTag from "@/components/main/sidebar/SidebarTag.vue";
import SidebarTimeOfDay from "@/components/main/sidebar/SidebarTimeOfDay.vue";

@Component({
	components: {
		SidebarCategory,
		SidebarTag,
		SidebarTimeOfDay
	}
})
export default class SidebarComponent extends Vue {
	private selectedDate: (string | (string | null)[])[] = [];

	@Mutation
	private filterTagsWith!: Function;

	created() {
		this.selectedDate = [
			this.$route.query.startDate,
			this.$route.query.endDate
		];
	}

	changeDate() {
		this.$router.push({
			path: "/",
			query: {
				...this.$route.query,
				["startDate"]: this.selectedDate[0],
				["endDate"]: this.selectedDate[1]
			}
		});
	}

	handleClear() {
		if (this.$route.path == "/" && Object.keys(this.$route.query).length === 0)
			return;
		this.selectedDate = [];
		this.filterTagsWith(null);
		this.$router.push({ path: "/" });
	}
}
</script>

<style lang="scss" scoped>
.filter {
	display: flex;
	flex-direction: column;

	&__title {
		display: flex;
		padding-bottom: 15px;

		&__text {
			flex: 1;
		}

		&__action {
			font-size: 12px;
			color: gray;
			justify-content: flex-end;
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		padding: 10px 2px;

		> div {
			width: 100%;
		}

		> hr {
			margin: 25px 0;
		}

		&__date {
			margin-top: 10px;
		}
	}

	> hr {
		margin: 10px 0 20px;
	}
}
</style>
