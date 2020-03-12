<template>
  <v-menu offset-y transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn dark v-on="on" class="ml-4" active-class="accent white--text">
        시간
      </v-btn>
    </template>
  </v-menu>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class TimeBtn extends Vue {
  items = [
    { title: "06:00 ~ 12:00" },
    { title: "12:00 ~ 18:00" },
    { title: "18:00 ~ 24:00" }
  ];
}
</script>
