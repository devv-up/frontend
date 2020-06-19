<template>
  <v-row class="justify-start ma-0">
    <v-col v-for="item in items" :key="item.id" lg="3" md="4" sm="6">
      <slot name="item" :item="item"></slot>
    </v-col>
  </v-row>
</template>

<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  props: {
    items: Array
  }
})
export default class PostGridList extends Vue {}
</script>
