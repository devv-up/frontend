<template>
  <div class="divapp">


    <v-container
      grid-list-xs
      grid-list-sm
      grid-list-md
      grid-list-lg
      grid-list-xl
    >


      <mainDetailContent></mainDetailContent>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mainDetailContent from "@/views/components/mainDetailContent.vue";

@Component({
  components: {
    mainDetailContent
  }
})
export default class MainDetailComponent extends Vue {}
</script>

<style></style>
