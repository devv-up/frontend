<template>
  <div class="header" v-on:scroll.passive="onScroll">
    <v-app-bar
      :class="[
        isState ? appBarClassName.primary : appBarClassName.opacity,
        'header__app-bar'
      ]"
      app
      flat
    >
      <router-link class="header__app-bar__logo" to="/">DEVUP</router-link>
      <v-spacer></v-spacer>
      <SigninBar />
    </v-app-bar>
    <h1 class="header__title">Stop looking for an items — find it.</h1>
    <SearchTextField class="header__search" v-model="searchText" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SigninBar from "@/components/SignInBar.vue";
import SearchTextField from "@/components/SearchTextField.vue";

@Component({
  components: {
    SigninBar,
    SearchTextField
  }
})
export default class Header extends Vue {
  searchText = "";
  isState = false;
  appBarClassName = {
    opacity: "opacity",
    primary: "primary"
  };

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }

  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 290) this.isState = true;
    else this.isState = false;
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(180deg, #8D13D0, rgb(54, 6, 80));
  height: 350px;
  display: flex;
  flex-direction: column;

  &__app-bar {
    &__logo {
      color: white;
      text-decoration: none;
    }
    &.primary {
      background-color: #8D13D0 !important;
      transition: background-color 1s;
    }
    &.opacity {
      background-color: rgba(#fff, 0) !important;
    }
  }

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
