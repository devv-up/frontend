<template>
  <v-footer app inset>
    <v-row justify="center">
      <v-btn v-for="link in links" :key="link.name" text rounded>
        {{ link.name }}
      </v-btn>
      <v-col class="text-center" cols="12">@2020 Devup Inc.</v-col>
    </v-row>
  </v-footer>
</template>

<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";
import { Links } from "layout";
@Component
export default class Footer extends Vue {
  links: Links[] = [
    { name: "소개", link: "/" },
    { name: "고객센터", link: "/" }
  ];
}
</script>
