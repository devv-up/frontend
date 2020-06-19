<template>
  <v-text-field
    :value="value"
    @input="this.$emit('input', value)"
    color="accent"
    class="text-field"
    solo
    single-line
    clearable
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="language, topic, location..."
    height="60"
  ></v-text-field>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    value: {
      type: String
    }
  }
})
export default class SearchTextField extends Vue {}
</script>
<style lang="scss" scoped></style>
