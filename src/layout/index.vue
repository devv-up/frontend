<template>
  <v-app>
    <Header />
    <Footer />
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Header, Footer } from "./components";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Layout extends Vue {}
</script>
