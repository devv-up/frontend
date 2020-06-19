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

@Component({
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
})
export default class Tags extends Vue {
  selectedTags: string[] = [];
  mounted() {
    const params = this.$route.query.tags;
    if (params) this.selectedTags = params.toString().split(",");
  }
  handleChange(tags: Array<string>) {
    this.$router.push({
      path: "/",
      query: { ...this.$route.query, ["tags"]: tags.toString() }
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
