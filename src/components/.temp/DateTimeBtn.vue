<template>
  <v-menu offset-y transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn class="ml-4 mt-4" v-on="on">
        {{ search }}
        <v-icon x-small class="ml-1" @click="handleClearClick">
          {{ closeIcon }}
        </v-icon>
      </v-btn>
    </template>
    <slot name="searchDown" :handleChange="handleChange" :times="times"></slot>
  </v-menu>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { SearchModule } from "@/store/modules/search";

const Props = Vue.extend({
  props: {
    searchType: {
      type: String,
      required: true
    }
  }
});

@Component
export default class DateTimeBtn extends Props {
  private MUTATION = "";

  constructor() {
    super();
    let mutation = "";
    switch (this.searchType) {
      case "DATE":
        mutation = "SET_SEARCH_DATE";
        break;
      case "TIME":
        mutation = "SET_SEARCH_TIME";
        break;
      default:
        mutation = "";
        break;
    }
    this.MUTATION = mutation;
  }

  get times() {
    return SearchModule.times;
  }

  get search() {
    switch (this.searchType) {
      case "DATE":
        return SearchModule.searchDate ? SearchModule.searchDate : "날짜";
      case "TIME":
        return SearchModule.timeText;
      default:
        return "";
    }
  }

  get closeIcon() {
    let close = "";
    switch (this.searchType) {
      case "DATE":
        close = SearchModule.searchDate ? "mdi-close" : "";
        break;
      case "TIME":
        close = SearchModule.searchTime ? "mdi-close" : "";
        break;
      default:
        break;
    }
    return close;
  }

  private searchSubmit(info: string) {
    this.$store.commit(this.MUTATION, info);
    SearchModule.submit();
  }

  private handleClearClick(event: Event) {
    event.stopPropagation();
    this.searchSubmit("");
  }

  private handleChange(info: string) {
    this.searchSubmit(info);
  }
}
</script>
