<template>
  <v-app>
    <Header />
    <v-content>
      <v-container class="home">
        <SideBar
          class="home__sidebar"
          :categories="categories"
          :timeOfDay="timeOfDay"
          :tags="tags"
        />
        <section class="home__content">
          <v-divider class="mt-15 mb-6"></v-divider>
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
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/components/layout/Header.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";
import PostCardView from "@/components/PostCardView.vue";
import PostGridList from "@/components/PostGridList.vue";
import { fetchCategories, fetchTags, fetchPosts } from "@/api/post";
import { Post, Category, Tag } from "board";
import { Route, RawLocation } from "vue-router";

const Props = Vue.extend({
  components: {
    Header,
    SideBar,
    Footer,
    PostCardView,
    PostGridList
  }
});
@Component
export default class Home extends Props {
  posts: Post[] = [];
  categories: Category[] = [];
  tags: Tag[] = [];
  timeOfDay = [
    { id: 0, title: "06:00 ~ 12:00" },
    { id: 1, title: "12:00 ~ 18:00" },
    { id: 2, title: "18:00 ~ 24:00" }
  ];

  async getPosts(params: {}) {
    const { data: posts }: { data: Post[] } = await fetchPosts(params);
    this.posts = posts;
  }

  beforeRouteUpdate(
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
  ) {
    this.getPosts(to.query);
    next();
  }

  async created() {
    try {
      const {
        data: categories
      }: { data: Category[] } = await fetchCategories();
      const { data: tags }: { data: Tag[] } = await fetchTags();
      if (categories) this.categories = categories;
      if (tags) this.tags = tags;
      this.getPosts(this.$route.query);
    } catch (error) {
      // 에러 처리
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
  // max-width: 1300px;
  // padding: 2rem 1rem;

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
