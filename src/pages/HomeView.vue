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
          <infinite-loading
            :spinner="'waveDots'"
            :identifier="routeQuery"
            @infinite="infiniteHandler"
          >
            <div slot="no-more">No more posts</div>
            <div slot="no-results">No results</div>
          </infinite-loading>
        </section>
      </v-container>
    </v-content>
    <FooterComponent />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Mutation, Action } from 'vuex-class';
import { Watch } from 'vue-property-decorator';

import { Post } from '@/store/models/post';

import TopComponent from '@/components/main/top-content/TopComponent.vue';
import FooterComponent from '@/components/layout/FooterComponent.vue';
import PostCardView from '@/components/main/PostCardView.vue';
import PostGridList from '@/components/main/PostGridList.vue';
import SidebarWrapper from '@/components/main/sidebar/SidebarWrapper.vue';

@Component({
  components: {
    TopComponent,
    SidebarWrapper,
    FooterComponent,
    PostCardView,
    PostGridList,
  },
})
export default class HomeView extends Vue {
  private routeQuery = {};

  @Getter private posts!: Post[];
  @Getter fetchedPosts!: Function;

  @Mutation resetPage!: Function;
  @Mutation updatePostsWith!: Function;

  @Action private fetchPosts!: Function;
  @Action private fetchCategories!: Function;
  @Action private fetchTags!: Function;

  async created() {
    await this.fetchCategories();
    await this.fetchTags();
  }

  @Watch('$route')
  path(to: Record<string, string | (string | null)[]>) {
    this.resetPage();
    this.routeQuery = to.query;
  }

  // eslint-disable-next-line
  async infiniteHandler($state: any) {
    let routeQuery: object;
    if (Object.keys(this.routeQuery).length) routeQuery = this.routeQuery;
    else routeQuery = this.$route.query;

    await this.fetchPosts({ ...routeQuery });

    if (this.fetchedPosts.length) {
      this.updatePostsWith(this.fetchedPosts);
      $state.loaded();
    } else {
      $state.complete();
    }
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
