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
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class SearchTextField extends Vue {
  @Prop({ required: true }) value!: string;
}
</script>
