<template>
  <p>searchtext: {{ searchtext }}</p>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
  props: {
    searchtext: String
  }
});

@Component
export default class Main extends Props {}
</script>
