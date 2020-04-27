<template>
  <v-app>
    <Header />
    <div class="container">
      <SideBar
        class="container__sidebar"
        :categories="categories"
        :times="times"
        :tags="tags"
        v-model="filterData"
        @change="handleFilter"
      />
      <v-content>
        <v-container>아이템 리스트..</v-container>
      </v-content>
    </div>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/components/layout/Header.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Footer from "@/components/layout/Footer.vue";

@Component({
  components: {
    Header,
    SideBar,
    Footer
  }
})
export default class Home extends Vue {
  categories = [
    { id: 0, title: "algorithm" },
    { id: 1, title: "project" },
    { id: 2, title: "study" }
  ];
  tags = ["python", "vuejs", "javascript", "c++", "react", "nodejs"];
  times = [
    { id: 0, title: "06:00 ~ 12:00" },
    { id: 1, title: "12:00 ~ 18:00" },
    { id: 2, title: "18:00 ~ 24:00" }
  ];
  filterData = () => {
    return {
      date: new Date().toISOString().substr(0, 10),
      tags: []
    };
  };
  handleFilter(value: object) {
    this.$router.push({ path: "/", query: { ...this.$route.query, ...value } });
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  padding: 2rem 1rem;
  min-height: 100vh;

  &__sidebar {
    max-width: 260px;
    flex: 1;
  }
}
</style>
