<template>
  <GridList :items="posts">
    <template v-slot:item="{ item }">
      <CardView :item="item" />
    </template>
  </GridList>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CardView from "@/components/CardView/index.vue";
import GridList from "@/components/GridList/index.vue";
import { BoardModule } from "@/store/modules/board";

@Component({
  props: {
    searchtext: String,
    searchdate: String,
    searchtime: String,
    searchcategory: String,
    searchtag: String
  },
  components: {
    CardView,
    GridList
  }
})
export default class Main extends Vue {
  get posts() {
    return BoardModule.posts;
  }
}
</script>
