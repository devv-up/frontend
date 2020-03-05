<template>
  <v-app>
    <Navigation />
    <Header />
    <v-content><slot /></v-content>
    <Footer />
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/components/layout/header/index.vue";
import Footer from "@/components/layout/footer/index.vue";
import Navigation from "@/components/layout/navigation/index.vue";
@Component({
  components: {
    Navigation,
    Header,
    Footer
  }
})
export default class Layout extends Vue {}
</script>
