<template>
  <div>
    <p>searchtext: {{ searchtext }}</p>
    <p>searchdate: {{ searchdate }}</p>
    <p>searchtime: {{ searchtime }}</p>
    <p>searchcategory: {{ searchcategory }}</p>
    <p>searchtag: {{ searchtag }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
  props: {
    searchtext: String,
    searchdate: String,
    searchtime: String,
    searchcategory: String,
    searchtag: String
  }
});

@Component
export default class Main extends Props {}
</script>
