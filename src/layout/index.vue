<template>
  <Header />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Header } from "./components";

@Component({
  components: {
    Header
  }
})
export default class Layout extends Vue {}
</script>
