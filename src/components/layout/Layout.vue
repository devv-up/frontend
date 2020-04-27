<template>
  <v-app>
    <AppBar :isScroll="false" />
    <div class="container">
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </div>
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
<style lang="scss" scoped>
.container {
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  padding: 2rem 1rem;
  min-height: 100vh;
}
</style>
