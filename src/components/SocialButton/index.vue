<template>
  <v-btn class="my-2" outlined :color="color" large>
    <v-icon>{{ icon }}</v-icon>
    <slot></slot>
  </v-btn>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
  props: {
    icon: String,
    color: String
  }
});
@Component
export default class SocialButton extends Props {}
</script>
