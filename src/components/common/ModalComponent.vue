<template>
  <v-dialog
    :value="isModalOn"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    transition="dialog-bottom-transition"
    :max-width="maxWidth"
    persistent
  >
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <h2 class="text--primary">{{ this.modal }}</h2>
        <v-btn icon @click.stop="closeModal">
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
import { Prop } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";

@Component
export default class ModalComponent extends Vue {
  @Prop()
  private maxWidth!: string;
  private title = "";

  @Getter modal!: string;
  @Getter isModalOn!: boolean;

  @Mutation switchModal!: Function;

  closeModal() {
    this.switchModal({ modalName: this.modal, isOn: false });
  }
}
</script>
