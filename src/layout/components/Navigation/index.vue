<template>
  <v-navigation-drawer
    v-resize="onResize"
    v-model="searchDrawer"
    :mini-variant.sync="mini"
    app
    right
    disable-route-watcher
    permanent
    :width="drawerWidth"
    color="secondary"
  >
    <v-list dark>
      <v-list-item>
        <v-list-item-icon class="mr-2">
          <v-icon @click.stop="mini = !mini">
            {{ drawerIcon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item class="d-flex flex-column">
          <v-row>
            <v-col><TextField /></v-col>
          </v-row>
        </v-list-item>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TextField from "./components/TextField.vue";

@Component({
  components: {
    TextField
  }
})
export default class Navigation extends Vue {
  private mini = true;
  private searchDrawer = {};
  private isMobile = false;

  get drawerIcon() {
    return this.mini ? "mdi-magnify" : "mdi-close";
  }

  get drawerWidth() {
    return this.isMobile ? "100vh" : "400";
  }

  mounted() {
    this.onResize();
  }

  private onResize() {
    this.isMobile = window.innerWidth < 600;
  }
}
</script>
<style lang="scss" scoped>
$width: 94%;
$darkcolor: #272727;
.v-list-item:nth-child(2) {
  max-width: $width;
  padding: 0;
  .row {
    width: $width;
    .col {
      padding: 12px 0;
      .v-divider {
        border-color: $darkcolor;
      }
    }
  }
}
</style>
