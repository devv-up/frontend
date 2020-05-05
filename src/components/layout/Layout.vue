<template>
  <v-app>
    <AppBar :isScroll="false" />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AppBar from "@/components/layout/AppBar.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";

@Component({
  components: {
    AppBar,
    SideBar,
    Footer
  }
})
export default class BasicLayout extends Vue {}
</script>
<style lang="scss" scoped></style>
