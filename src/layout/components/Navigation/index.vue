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
    <v-list dark class="search">
      <v-list-item>
        <v-list-item-icon class="mr-2">
          <v-icon @click.stop="mini = !mini">{{ drawerIcon }}</v-icon>
        </v-list-item-icon>
        <v-list-item class="d-flex flex-column">
          <v-row>
            <v-col>
              <TextField />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <DateTimeBtn searchType="DATE">
                <template v-slot:searchDown="{ handleChange }">
                  <v-date-picker
                    dark
                    no-title
                    @change="handleChange"
                  ></v-date-picker>
                </template>
              </DateTimeBtn>
              <DateTimeBtn searchType="TIME">
                <template v-slot:searchDown="{ handleChange, times }">
                  <v-list dark>
                    <v-list-item-group @change="handleChange">
                      <v-list-item
                        v-for="t in times"
                        :key="t.time"
                        :value="t.id"
                        active-class="accent white--text"
                      >
                        <v-list-item-title>{{ t.time }}</v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </template>
              </DateTimeBtn>
              <v-btn class="ml-4 mt-4">지역</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-regular text-center">
                <span class="grey--text">FILTER BY</span>
                <span class="primary--text font-weight-bold ml-1"
                  >CATEGORY</span
                >
              </p>
              <Category />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-regular text-center">
                <span class="grey--text">FILTER BY</span>
                <span class="primary--text font-weight-bold ml-1">TAG</span>
              </p>
              <Tag />
            </v-col>
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
import DateTimeBtn from "./components/DateTimeBtn.vue";
import Category from "./components/Category.vue";
import Tag from "./components/Tag.vue";

@Component({
  components: {
    TextField,
    DateTimeBtn,
    Category,
    Tag
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
.search .v-list-item:nth-child(2) {
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
