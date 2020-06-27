<template>
	<div v-resize="onResize" v-show="ok">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
	props: {
		showType: String,
		isShow: Boolean
	}
});
@Component
export default class Resize extends Props {
	windowSize = {
		x: 0,
		y: 0
	};
	ok = false;
	breakpoint = 0;

	mounted() {
		switch (this.showType) {
			case "xs":
				this.breakpoint = this.$vuetify.breakpoint.thresholds.xs;
				break;
			case "sm":
				this.breakpoint = this.$vuetify.breakpoint.thresholds.sm;
				break;
			case "md":
				this.breakpoint = this.$vuetify.breakpoint.thresholds.md;
				break;
			case "lg":
				this.breakpoint = this.$vuetify.breakpoint.thresholds.lg;
				break;
			default:
				break;
		}
		this.onResize();
	}

	onResize() {
		this.windowSize = {
			x: window.innerWidth,
			y: window.innerHeight
		};
		if (this.windowSize.x <= this.breakpoint) this.ok = this.isShow;
		else this.ok = !this.isShow;
	}
}
</script>
