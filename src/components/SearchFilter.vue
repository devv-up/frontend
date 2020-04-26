<template>
  <div class="filter">
    <div class="filter__title">
      <h2 class="filter__title__text">Filters</h2>
      <button class="filter__title__action">Clear filters</button>
    </div>
    <v-divider></v-divider>
    <div class="filter__list">
      <div>
        <h4>Category</h4>
        <Categories :categories="categories" />
      </div>
      <v-divider></v-divider>
      <div>
        <h4>Tags</h4>
        <Tags
          :tags="tags"
          v-model="filterData.tags"
          @change="value => update('tags', value)"
        />
      </div>
      <v-divider></v-divider>
      <div>
        <h4>Time</h4>
        <Times :times="times" />
      </div>
      <v-divider></v-divider>
      <div>
        <h4>Date</h4>
        <v-date-picker
          class="filter__list__date"
          no-title
          width="250"
          v-model="filterData.date"
          @change="value => update('date', value)"
        ></v-date-picker>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Categories from "@/components/Categories.vue";
import Tags from "@/components/Tags.vue";
import Times from "@/components/Times.vue";

const Props = Vue.extend({
  components: {
    Categories,
    Tags,
    Times
  },
  props: {
    categories: Array,
    tags: Array,
    times: Array,
    filterData: {
      type: Object,
      default: function() {
        return {
          date: new Date().toISOString().substr(0, 10),
          tags: []
        };
      }
    }
  }
});

@Component
export default class SearchFilter extends Props {
  update(key: string, value: string) {
    this.$emit("change", { ...this.filterData, [key]: value });
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
