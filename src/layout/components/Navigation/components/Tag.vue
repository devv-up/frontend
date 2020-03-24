<template>
  <v-chip-group
    multiple
    column
    active-class="accent--text"
    @change="handleChange"
  >
    <v-chip
      v-for="tag in tags"
      :key="tag.id"
      :value="tag.id"
      small
      label
      color="#272727"
    >
      <v-icon x-small left>mdi-pound</v-icon>
      {{ tag.name }}
    </v-chip>
  </v-chip-group>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BoardModule } from "@/store/modules/board";
import { SearchModule } from "@/store/modules/search";
@Component
export default class Category extends Vue {
  get tags() {
    return BoardModule.tags;
  }

  private handleChange(tags: object) {
    this.$store.commit("SET_SEARCH_TAG", tags);
    SearchModule.submit();
  }
}
</script>
