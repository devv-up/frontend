<template>
  <MainDetailContent></MainDetailContent>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainDetailContent from "@/components/mainDetail/MainDetailContent.vue";
import { Dictionary } from "vue-router/types/router";

@Component({
  components: {
    MainDetailContent
  }
})
export default class MainDetail extends Vue {}
</script>
<style scoped></style>
