<template>
  <v-row class="justify-space-between ma-auto">
    <v-col
      v-for="item in items"
      :key="item.id"
      class="mb-4"
      lg="3"
      md="4"
      sm="6"
    >
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
export default class GridList extends Vue {}
</script>
