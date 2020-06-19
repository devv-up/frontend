<template>
  <v-app>
    <AppBar :isScroll="false" />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <FooterComponent />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AppBar from "@/components/layout/app-bar/AppBar.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";

@Component({
  components: {
    AppBar,
    FooterComponent
  }
})
export default class BasicLayout extends Vue {}
</script>
