<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5
    }"
    transition="fade-transition"
  >
    <v-card max-width="280" outlined class="ma-auto">
      <v-img
        class="white--text align-end"
        max-height="200"
        :src="item.images && item.images[0]"
      >
        <v-card-title>{{ item.title }}</v-card-title>
      </v-img>
      <v-row>
        <v-col>
          <v-icon class="mx-2">mdi-heart</v-icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-col>
        <v-col class="text-right">
          <span class="mr-2">{{ item.date }}</span>
        </v-col>
      </v-row>
    </v-card>
  </v-lazy>
</template>

<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  props: {
    item: Object
  }
})
export default class CardView extends Vue {
  isActive = false;
}
</script>
<style lang="scss" scoped>
.v-card__title {
  text-shadow: rgba(0, 0, 0, 0.26) 1px 1px 0px;
  background: linear-gradient(
    rgba(15, 20, 31, 0) 0,
    rgba(15, 20, 31, 0.1) 25%,
    rgba(15, 20, 31, 0.8) 100%
  );
}
</style>
