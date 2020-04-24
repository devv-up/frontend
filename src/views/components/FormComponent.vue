<template>
  <div>
    <v-container grid-list-md>
      <v-row row wrap justify="center" align="center">
        <FormContentComponent></FormContentComponent>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import FormContentComponent from "@/views/components/FormContentComponent.vue";

@Component({
  components: {
    FormContentComponent
  }
})
export default class FormComponent extends Vue {}
</script>

<style></style>
