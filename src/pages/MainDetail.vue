<template>
  <MainDetailContent></MainDetailContent>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainDetailContent from "@/components/mainDetail/MainDetailContent.vue";

@Component({
  components: {
    MainDetailContent
  }
})
export default class MainDetail extends Vue {}
</script>
<style scoped></style>


