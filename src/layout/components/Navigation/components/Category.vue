<template>
  <v-slide-group mandatory show-arrows center-active @change="handleChange">
    <v-slide-item
      v-for="(cat, index) in categories"
      :key="cat.id"
      v-slot:default="{ active, toggle }"
      :value="cat.id"
    >
      <v-btn
        class="mx-2"
        :input-value="active"
        active-class="primary white--text"
        depressed
        rounded
        @click="toggle"
      >
        {{ cat.name }}
      </v-btn>
    </v-slide-item>
  </v-slide-group>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BoardModule } from "@/store/modules/board";
import { SearchModule } from "@/store/modules/search";
@Component
export default class Category extends Vue {
  get categories() {
    return BoardModule.categories;
  }

  private handleChange(categoryId: number) {
    this.$store.commit("SET_SEARCHCATEGORYID", categoryId);
    SearchModule.searchSubmit();
  }
}
</script>
<style lang="scss">
.v-slide-group {
  .v-slide-group__prev,
  .v-slide-group__next {
    min-width: 0;
  }
}
</style>
