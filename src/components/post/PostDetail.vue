<template>
  <section class="d-flex flex-column">
    <h2>{{ detailData }}</h2>
    <v-img src="@/assets/images/bill.jpg"></v-img>
    <v-row>
      <v-col cols="12" sm="9">
        <v-card-text outlined tile>
          <p>{{ detailData.location }}</p>
          <p>{{ detailData.date }}</p>
        </v-card-text>
        <v-card-title class="font-weight-CONDENSED headline ma-2"
          >모임내용</v-card-title
        >
        <v-card-text>{{ detailData.content }}</v-card-text>
      </v-col>
      <v-col cols="12" sm="3">
        <span class="justify-start" max-width="210">
          <v-row>
            <v-card-text class="font-weight-CONDENSED headline ml-1">
              <span class="ml-1">{{ this.name }}</span>
            </v-card-text>

            <v-col cols="12">
              <v-avatar size="100" tile class="ml-4">
                <v-img src="@/assets/images/seoul2.jpg"></v-img>
              </v-avatar>
              <p class="ml-6 mt-3">{{ this.name }}</p>
            </v-col>

            <v-card-text class="ml-2">
              <v-btn class="mt-2" color="white">Follow</v-btn>
              <v-btn class="ml-2 mt-2 white--text" color="#8d13d0">Scrab</v-btn>
            </v-card-text>
          </v-row>
        </span>
      </v-col>
    </v-row>
    <PostComment />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';
import { Prop } from 'vue-property-decorator';

import { PostId } from '@/store/models/detail';

import PostComment from '@/components/post/comment/PostComment.vue';

@Component({
  components: {
    PostComment,
  },
})
export default class PostDetail extends Vue {
  private name = '';

  @Prop({ default: '@/assets/images/seoul3.jpg' }) private groupImage!: string;
  @Prop({ default: '@/assets/images/seoul2.jpg' }) private hostImage!: string;

  @Getter private detailData!: PostId;

  @Action private detailAction!: Function;

  async created() {
    await this.detailAction();
    console.log(JSON.stringify(this.detailData.author.name));
    this.name = this.detailData.author.name;
  }
}
</script>

<style></style>
