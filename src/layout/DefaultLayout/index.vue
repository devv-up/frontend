<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <slot></slot>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Header, Footer } from "../components";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class DefaultLayout extends Vue {}
</script>
