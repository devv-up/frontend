<template>
  <div>
    <v-resize showType="sm" :isShow="false">
      <SearchFilter
        :categories="categories"
        :times="times"
        :tags="tags"
        v-model="filterData"
        @change="handleFilter"
      />
    </v-resize>
    <v-resize showType="sm" :isShow="true">
      <div class="mobile-filter">
        <v-btn
          class="mobile-filter__action"
          fab
          absolute
          bottom
          right
          color="primary"
          @click="sheet = !sheet"
        >
          <v-icon>mdi-filter-outline</v-icon>Filters
        </v-btn>
        <v-bottom-sheet class="mobile-filter__list" v-model="sheet">
          <v-sheet class="mobile-filter__list__sheet" height="80vh">
            <v-btn
              class="mt-3 mobile-filter__list__sheet__action"
              text
              color="red"
              @click="sheet = !sheet"
            >
              close
            </v-btn>
            <SearchFilter
              class="mobile-filter__list__sheet__filter"
              :categories="categories"
              :times="times"
              :tags="tags"
              v-model="filterData"
              @change="handleFilter"
            />
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </v-resize>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SearchFilter from "@/components/SearchFilter.vue";

const Props = Vue.extend({
  components: {
    SearchFilter
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
export default class SideBar extends Props {
  sheet = false;
  handleFilter(value: object) {
    this.$emit("change", { ...value });
  }
  mounted() {
    console.log(this.$vuetify.breakpoint);
  }
}
</script>
<style lang="scss" scoped>
.mobile-filter {
  &__action {
    align-items: center;
    border: none;
    border-radius: 8px;
    margin-bottom: 45px;
    box-shadow: 0 4px 22px 0 rgba(185, 0, 145, 0.5);
    color: #fff;
    display: flex;
    font-weight: bold;
    justify-content: center;
    left: 50%;
    min-height: 30px;
    min-width: 112px;
    position: fixed;
    transform: translateX(-50%);
  }
  &__list {
    &__sheet {
      border-radius: 25px 25px 0 0;
      display: flex;
      flex-direction: column;
      padding: 0 15px;

      &__action {
        justify-content: flex-end;
      }
      &__filter {
        max-width: 500px;
        margin: 0 auto;
        overflow-y: auto;
        &::-webkit-scrollbar {
          background-color: white;
        }
      }
    }
  }
}
</style>
