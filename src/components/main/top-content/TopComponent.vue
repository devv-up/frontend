<template>
  <div class="header" v-on:scroll.passive="onScroll">
    <AppBar :isScrolled="true" />
    <h1 class="header__title">Looking for a project?</h1>
    <TopSearchBar class="header__search" v-model="searchText" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import TopSearchBar from '@/components/main/top-content/TopSearchBar.vue';
import AppBar from '@/components/layout/app-bar/AppBar.vue';

@Component({
  components: {
    TopSearchBar,
    AppBar,
  },
})
export default class Header extends Vue {
  private searchText = '';
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(180deg, #8d13d0, rgb(54, 6, 80));
  height: 350px;
  display: flex;
  flex-direction: column;

  &__title {
    color: white;
    opacity: 0.9;
    margin-top: 80px;
    text-align: center;
    flex: 1;
    margin-top: 110px;
  }

  &__search {
    display: flex;
    justify-content: center;
    width: 800px;
    margin: 0 auto;
  }
  @media all and (max-width: 600px) {
    .header {
      &__search {
        padding: 0 1em 3em 1em;
      }
    }
  }
}
</style>
