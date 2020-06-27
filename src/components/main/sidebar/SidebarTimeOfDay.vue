<template>
  <ul class="time">
    <li class="time__item" v-for="time in timeOfDay" :key="time.id">
      <p class="time__item__text">
        <v-icon x-small left>mdi-chevron-right</v-icon>
        <router-link
          :to="{ path: '/', query: { ...$route.query, timeOfDay: time.id } }"
          active-class="time__item__text--active"
          exact
        >
          {{ time.title }}
        </router-link>
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

@Component
export default class SidebarTimeOfDay extends Vue {
  @Getter
  private timeOfDay!: Record<string, string | number>[];
  private isActive = false;
}
</script>

<style lang="scss" scoped>
.time {
  padding-left: 10px;
  &__item {
    list-style: none;
    display: flex;
    padding: 5px 0;
    align-items: center;

    &__text {
      margin: 0;

      > a {
        text-decoration: none;
        color: #000;
      }

      &--active {
        font-weight: 600;
      }
    }
  }
}
</style>
