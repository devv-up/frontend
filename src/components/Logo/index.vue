<template>
  <router-link to="/">
    <v-img
      :class="classes"
      :src="require('@/assets/images/logo.png')"
      :max-width="maxWidth"
    ></v-img>
  </router-link>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
  props: {
    size: String,
    classes: String
  }
});
@Component
export default class Logo extends Props {
  get maxWidth() {
    let width = 310;
    switch (this.size) {
      case "small":
        width = 110;
        break;
      case "medium":
        width = 210;
        break;
      case "large":
        width = 510;
        break;
      default:
        break;
    }
    return width;
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
