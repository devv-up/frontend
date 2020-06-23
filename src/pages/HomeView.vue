<template>
  <v-app>
    <TopComponent />
    <v-content>
      <v-container class="home">
        <SidebarWrapper class="home__sidebar" />
        <section class="home__content">
          <v-divider class="mt-15 mb-6" />
          <v-row>
            <PostGridList :items="posts">
              <template v-slot:item="{ item }">
                <PostCardView :item="item" />
              </template>
            </PostGridList>
          </v-row>
          <p v-if="!posts.length">검색 결과가 없습니다.</p>
        </section>
      </v-container>
    </v-content>
    <FooterComponent />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";

import { Post } from "board";

import TopComponent from "@/components/main/top-content/TopComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
import PostCardView from "@/components/main/PostCardView.vue";
import PostGridList from "@/components/main/PostGridList.vue";
import SidebarWrapper from "@/components/main/sidebar/SidebarWrapper.vue";
import { Watch } from "vue-property-decorator";

@Component({
  components: {
    TopComponent,
    SidebarWrapper,
    FooterComponent,
    PostCardView,
    PostGridList
  }
})
export default class HomeView extends Vue {
  @Getter private posts!: Post[];

  @Action private fetchPosts!: Function;
  @Action private fetchCategories!: Function;
  @Action private fetchTags!: Function;

  async created() {
    await this.fetchPosts(this.$route.query);
    await this.fetchCategories();
    await this.fetchTags();
  }

  @Watch("$route")
  path(to: Record<string, string | (string | null)[]>) {
    this.fetchPosts({ ...(to.query as object) });
  }
}
</script>

<style lang="scss" scoped>
.mt-15 {
  margin-top: 60px;
}
.home {
  display: flex;

  &__content {
    flex: 1;
  }

  &__sidebar {
    max-width: 260px;
    margin-right: 48px;
  }
  @media screen and (max-width: 900px) {
    .v-divider {
      display: none;
    }
    &__sidebar {
      margin: 0;
    }
  }
}
</style>
