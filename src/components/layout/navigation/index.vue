<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    left
    disable-resize-watcher
    disable-route-watcher
    temporary
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="userAvatarImage" :alt="userName"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">{{ userName }}</v-list-item-title>
          <v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
        </v-list-item-content>
        <V-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </V-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in myPageMenu" :key="`mp-${i}`">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, i) in customerServiceMenu" :key="`cs-${i}`">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Profile, Nav } from "@/components/layout/mixin";
import Component, { mixins } from "vue-class-component";
@Component
export default class Navigation extends mixins(Profile, Nav) {}
</script>
