<template>
  <v-app-bar
    :class="[
      isState ? appBarClassName.primary : appBarClassName.opacity,
      'app-bar'
    ]"
    app
    flat
  >
    <router-link class="app-bar__logo" to="/">DEVUP</router-link>
    <v-spacer></v-spacer>
    <SigninBar />
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SigninBar from "@/components/SignInBar.vue";

const Props = Vue.extend({
  components: {
    SigninBar
  },
  props: {
    isScroll: Boolean
  }
});

@Component
export default class AppBar extends Props {
  isState = true;
  appBarClassName = {
    opacity: "opacity",
    primary: "primary"
  };

  mounted() {
    if (this.isScroll) {
      window.addEventListener("scroll", this.handleScroll);
      this.isState = false;
    }
  }

  destroy() {
    if (this.isScroll) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  handleScroll() {
    if (window.scrollY > 290) this.isState = true;
    else this.isState = false;
  }
}
</script>
<style lang="scss" scoped>
.app-bar {
  &__logo {
    color: white;
    text-decoration: none;
  }
  &.primary {
    background-color: #8d13d0 !important;
    transition: background-color 1s;
  }
  &.opacity {
    background-color: rgba(#fff, 0) !important;
  }
}
</style>
