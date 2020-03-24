<template>
  <v-app>
    <Header />
    <Navigation />
    <v-content>
      <v-container><router-view></router-view></v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Header, Footer, Navigation } from "./components";

@Component({
  components: {
    Header,
    Footer,
    Navigation
  }
})
export default class Layout extends Vue {}
</script>
