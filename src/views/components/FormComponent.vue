<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap justify-center="true">
        <FormContentComponent></FormContentComponent>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
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
