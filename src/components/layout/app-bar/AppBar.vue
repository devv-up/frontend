<template>
  <v-app-bar
    :class="[
      isState ? appBarClassName.primary : appBarClassName.opacity,
      'app-bar',
    ]"
    app
    flat
  >
    <router-link class="app-bar__logo" to="/">DEVUP</router-link>
    <v-spacer />
    <AppBarSignIn />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import AppBarSignIn from '@/components/layout/app-bar/AppBarSignIn.vue';

@Component({
  components: {
    AppBarSignIn,
  },
})
export default class AppBar extends Vue {
  @Prop()
  private isScrolled!: boolean;

  private isState = true;
  private appBarClassName = {
    opacity: 'opacity',
    primary: 'primary',
  };

  mounted() {
    if (this.isScrolled) {
      window.addEventListener('scroll', this.handleScroll);
      this.isState = false;
    }
  }

  destroy() {
    if (this.isScrolled) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll() {
    if (window.scrollY > 290) this.isState = true;
    else this.isState = false;
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  &__logo {
    color: white;
    text-decoration: none;
  }
  &.primary {
    background-color: #8d13d0 !important;
    transition: background-color 1s;
  }
  &.opacity {
    background-color: rgba(#fff, 0) !important;
  }
}
</style>
