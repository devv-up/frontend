<template>
  <v-dialog
    :value="dialog"
    @change="handleChangeDialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    transition="dialog-bottom-transition"
    :max-width="maxWidth"
    persistent
  >
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <h4 class="text--primary">{{ title }}</h4>
        <v-btn icon @click.stop="handleChangeDialog(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LayoutModule } from "@/store/modules/layout";

@Component({
  props: {
    title: String,
    maxWidth: String
  }
})
export default class Modal extends Vue {
  get dialog() {
    return LayoutModule.dialog;
  }

  handleChangeDialog(dialog: boolean) {
    this.$store.commit("SET_DIALOG", dialog);
  }
}
</script>
