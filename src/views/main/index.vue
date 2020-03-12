<template>
  <div>
    <p>searchtext: {{ searchtext }}</p>
    <p>searchdate: {{ searchdate }}</p>
    <p>searchtime: {{ searchtime }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
  props: {
    searchtext: String,
    searchdate: String,
    searchtime: String
  }
});

@Component
export default class Main extends Props {}
</script>
