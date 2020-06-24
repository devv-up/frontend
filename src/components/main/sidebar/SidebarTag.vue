<template>
  <v-chip-group
    class="tag"
    multiple
    column
    active-class="accent--text"
    @change="handleChange"
    :value="selectedTags"
  >
    <v-chip
      class="tag__item"
      v-for="tag in tags"
      :key="tag.title"
      :value="tag.title"
      label
    >
      {{ tag.title }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Mutation } from "vuex-class";

import { Tag } from "@/store/models/post";

@Component
export default class Tags extends Vue {
  @Getter private tags!: Tag[];
  @Getter private selectedTags!: string[];

  @Mutation
  private filterTagsWith!: Function;

  mounted() {
    const params = this.$route.query.tags;
    if (params) this.filterTagsWith(params.toString().split(","));
  }

  handleChange(tagFilters: Array<string>) {
    this.filterTagsWith(tagFilters);
    const tags = tagFilters.length === 0 ? undefined : tagFilters.toString();
    this.$router.push({
      path: "/",
      query: { ...this.$route.query, tags: tags }
    });
  }
}
</script>

<style lang="scss" scoped>
.tag {
  &__item {
    border-radius: 16px !important;
    background: rgba(65, 66, 71, 0.08);
  }
}
</style>
