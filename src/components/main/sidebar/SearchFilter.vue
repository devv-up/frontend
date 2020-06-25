<template>
  <div class="filter">
    <div class="filter__title">
      <h2 class="filter__title__text">Filters</h2>
      <button class="filter__title__action" @click="handleClear">
        Clear filters
      </button>
    </div>
    <v-divider />
    <div class="filter__list">
      <div>
        <h4>Category</h4>
        <Categories :categories="categories" />
      </div>
      <v-divider />
      <div>
        <h4>Tags</h4>
        <Tags :tags="tags" />
      </div>
      <v-divider />
      <div>
        <h4>Time</h4>
        <Times :timeOfDay="timeOfDay" />
      </div>
      <v-divider />
      <div>
        <h4>Date</h4>
        <v-date-picker
          class="filter__list__date"
          no-title
          range
          width="250"
          v-model="selectedDate"
          @change="changeDate"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter } from "vuex-class";

import { Category, Tag } from "board";

import Categories from "@/components/main/sidebar/Categories.vue";
import Tags from "@/components/main/sidebar/Tags.vue";
import Times from "@/components/main/sidebar/Times.vue";
import { Dictionary } from "vue-router/types/router";

@Component({
  components: {
    Categories,
    Tags,
    Times
  }
})
export default class SearchFilter extends Vue {
  private selectedDate: (string | (string | null)[])[] = [];

  @Getter categories!: Category[];
  @Getter tags!: Tag[];
  @Getter timeOfDay!: Dictionary<string | number>[];

  created() {
    this.selectedDate = [
      this.$route.query.startDate,
      this.$route.query.endDate
    ];
  }

  changeDate() {
    this.$router.push({
      path: "/",
      query: {
        ...this.$route.query,
        ["startDate"]: this.selectedDate[0],
        ["endDate"]: this.selectedDate[1]
      }
    });
  }

  handleClear() {
    this.$router.push({ path: "/" });
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    padding-bottom: 15px;

    &__text {
      flex: 1;
    }

    &__action {
      font-size: 12px;
      color: gray;
      justify-content: flex-end;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding: 10px 2px;

    > div {
      width: 100%;
    }

    > hr {
      margin: 25px 0;
    }

    &__date {
      margin-top: 10px;
    }
  }

  > hr {
    margin: 10px 0 20px;
  }
}
</style>
