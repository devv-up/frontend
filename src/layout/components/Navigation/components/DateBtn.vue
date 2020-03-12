<template>
  <v-menu offset-y transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn class="ml-2" v-on="on">
        {{ searchDate }}
        <v-icon x-small class="ml-1" @click="handleClearClick">
          {{ closeIcon }}
        </v-icon>
      </v-btn>
    </template>
    <v-date-picker dark no-title @change="handleChange"></v-date-picker>
  </v-menu>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { SearchModule } from "@/store/modules/search";

@Component
export default class DateBtn extends Vue {
  get searchDate() {
    return SearchModule.searchDate ? SearchModule.searchDate : "날짜";
  }

  get closeIcon() {
    return SearchModule.searchDate ? "mdi-close" : "";
  }

  private searchDateSubmit(date: string) {
    this.$store.commit("SET_SEARCHDATE", date);
    SearchModule.searchSubmit();
  }

  private handleClearClick(event: Event) {
    event.stopPropagation();
    this.searchDateSubmit("");
  }

  private handleChange(date: string) {
    this.searchDateSubmit(date);
  }
}
</script>
