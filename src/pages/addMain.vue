<template>
  <FormComponent></FormComponent>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import FormComponent from "@/components/addMain/FormComponent.vue";

@Component({
  components: {
    FormComponent
  }
})
export default class AddMain extends Vue {}
</script>

<style scoped></style>
