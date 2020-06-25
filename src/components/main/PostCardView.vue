<template>
  <article class="post">
    <v-img class="post__image align-end" :src="itemImage">
      <div class="post__action">
        <v-btn icon class="mx-2" :color="likeColor">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
      </div>
    </v-img>
    <div class="post__content">
      <p class="post__content__category">
        {{ item.category && item.category.title }}
      </p>
      <h4 class="post__content__title">{{ item.title }}</h4>
      <p class="post__content__info">
        <span><v-icon>mdi-city</v-icon>{{ item.location }}</span>
        <span><v-icon>mdi-clock-outline</v-icon>{{ itemTime }}</span>
      </p>
      <p class="post__content__tags">
        <span v-for="tag in item.tags" :key="tag.id">
          {{ `#${tag.title}` }}
        </span>
      </p>
    </div>
  </article>
</template>

<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";

const Props = Vue.extend({
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
@Component
export default class PostCardView extends Props {
  private isActive = false;

  get likeColor() {
    return this.item.isLiked ? "pink" : "";
  }

  get itemImage() {
    return this.item.image
      ? this.item.image[0]
      : "https://cdn.vuetifyjs.com/images/cards/docks.jpg";
  }

  get itemTime() {
    let time;
    switch (this.item.timeOfDay) {
      case 0:
        time = "오전";
        break;
      case 1:
        time = "오후";
        break;
      case 2:
        time = "저녁";
        break;
    }
    return time;
  }
}
</script>
<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 238px;

  &__image {
    margin-bottom: 5px;
  }

  &__action {
    background: rgba(255, 255, 255, 0.4);
  }

  &__content {
    display: flex;
    flex-direction: column;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__category {
      font-size: 1em;
      font-weight: 600;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      opacity: 0.7;
      margin-bottom: 8px;
    }
    &__title {
      font-weight: 600;
      margin-bottom: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__info {
      display: flex;
      margin-bottom: 8px;

      > span {
        margin-right: 5px;
      }

      i {
        margin-right: 3px;
      }
    }
    &__tags {
      > span {
        font-size: 0.75em;
        color: #e040fb;
        opacity: 0.8;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  // 모바일
  .post {
    display: flex;
    flex-direction: row;
    margin: 0;
    max-width: 400px;
    min-width: 300px;
    height: 100%;
    max-width: none;

    &__image {
      width: 160px;
      height: 150px;
    }
    &__content {
      width: 100%;
      padding: 0 8px;
    }
  }
}

@media screen and (max-width: 500px) {
  .post {
    &__image {
      max-width: 120px;
      max-height: 110px;
      margin-bottom: 0;
    }
  }
}
</style>
