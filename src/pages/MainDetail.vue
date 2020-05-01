<template>
  <MainDetailComponent></MainDetailComponent>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";


import mainDetailComponent from "@/views/components/mainDetailComponent.vue";


@Component({
  components: {
    MainDetailComponent
  }
})
export default class MainDetail extends Vue {}
</script>

<style scoped></style>

