<template>
  <Layout></Layout>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Layout from "@/views/layout/index.vue";
@Component({
  components: {
    Layout
  }
})
export default class Home extends Vue {}
</script>
