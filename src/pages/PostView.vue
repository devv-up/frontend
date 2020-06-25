<template>
  <PostDetail></PostDetail>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import PostDetail from "@/components/post/PostDetail.vue";

@Component({
  components: {
    PostDetail
  }
})
export default class MainDetail extends Vue {}
</script>
<style scoped></style>
