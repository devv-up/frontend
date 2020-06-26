<template>
  <ul class="category">
    <li
      class="category__item"
      v-for="category in categories"
      :key="category.id"
    >
      <p class="category__item__text">
        <v-icon x-small left>mdi-chevron-right</v-icon>
        <router-link
          :to="{
            path: '/',
            query: { ...$route.query, category: category.title }
          }"
          active-class="category__item__text--active"
          exact
          >{{ category.title }}</router-link
        >
      </p>
      <div class="category__item__count">100</div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter } from "vuex-class";

import { Category } from "@/store/models/category";

@Component
export default class SidebarCategory extends Vue {
  @Getter private categories!: Category[];
}
</script>

<style lang="scss" scoped>
.category {
  padding-left: 10px;
  &__item {
    list-style: none;
    display: flex;
    padding: 5px 0;
    align-items: center;

    &__text {
      margin: 0;

      > a {
        text-decoration: none;
        color: #000;
      }

      &--active {
        font-weight: 600;
      }
    }
    &__count {
      background-color: rgba(65, 66, 71, 0.08);
      border-radius: 4px;
      color: rgba(33, 36, 61, 0.8);
      font-size: 0.64rem;
      font-weight: 600;
      margin-left: 7px;
      padding: 1px 3px;
    }
  }
}
</style>
