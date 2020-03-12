<template>
  <v-text-field
    v-model="inputText"
    :rules="[TextRules.counter]"
    counter
    maxlength="50"
    color="accent"
    class="ml-2"
    solo
    single-line
    clearable
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="검색..."
    @keydown="handleKeyDown"
    @click:prepend-inner="handleClick"
  ></v-text-field>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { SearchModule } from "@/store/modules/search";

@Component
export default class TextField extends Vue {
  private TextRules = {
    counter: (value: string) =>
      (value && value.length <= 50) || "Max 50 characters"
  };

  get inputText() {
    return SearchModule.searchText;
  }

  set inputText(text: string) {
    this.$store.commit("SET_SEARCHTEXT", text);
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key == "Enter") {
      SearchModule.searchSubmit();
    }
  }

  private handleClick() {
    SearchModule.searchSubmit();
  }
}
</script>
