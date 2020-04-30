<template>
  <v-chip-group
    class="tag"
    multiple
    column
    active-class="accent--text"
    @change="handleChange"
    :value="selectedTag"
  >
    <v-chip class="tag__item" v-for="tag in tags" :key="tag" :value="tag" label>
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    tags: {
      type: Array
    },
    selectedTag: Array
  },
  model: {
    prop: "selectedTag",
    event: "change"
  }
})
export default class Tags extends Vue {
  handleChange(tags: Array<string>) {
    this.$emit("change", tags);
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
