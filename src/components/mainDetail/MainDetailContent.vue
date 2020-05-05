<template>
  <div>
    <v-row row wrap justify="center" align="center">



      <v-col xs="6" sm="6" md="6" lg="6" xl="6">
        <v-img
          src="https://thumb.wishbeen.com/TqXukb4gcQYcYcfL4F9ynd9lTAo=/880x/smart/filters:no_upscale()/img-wishbeen.akamaized.net/post/1453359808444_shutterstock_129286766.jpg"
        ></v-img>

      </v-col>

    </v-row>


    <v-row row wrap justify="center" align="start">
      <v-col xs="9" sm="9" md="9" lg="9" xl="9">

        <v-row>
          <v-card-text class="font-weight-CONDENSED headline ml-1">
            <span class="ml-1">주최자</span>
          </v-card-text>


        </v-row>

        <v-row row wrap justify="center" align="center">
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card-title class="font-weight-CONDENSED headline ma-2">
              모임내용
            </v-card-title>
            <v-card-text>
              {{ detail.content }}

            </v-card-text>
          </v-col>


        </v-row>



        <v-row row wrap justify="center" align="center">
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <WriteReply></WriteReply>
          </v-col>
        </v-row>
      </v-col>

      <v-col xs="3" sm="3" md="3" lg="3" xl="3">
        <v-row row wrap justify="center" align="center">
          <v-card-title class="font-weight-CONDENSED headline">
            주최자
          </v-card-title>
        </v-row>

        <v-row row wrap justify="center" align="center">
          <v-col align="center" class="pa-0" cols="12">
            <v-avatar size="164" tile>

              <v-img
                src="@/assets/images/seoul2.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <span class="title mt-3">{{ detail.author }}</span>
        
          <v-card-text class="ml-2">
            <v-btn class="mt-2" color="white">Follow</v-btn>
            <v-btn class="ml-2 mt-2 white--text" color="#8d13d0">Scrab</v-btn>
          </v-card-text>
        </v-row>


        <v-row justify="center" align="center">
          <v-card-title>
            <v-btn class="ml-3 mt-2" color="white">Follow</v-btn>
            <v-btn class="ml-4 mt-2 white--text" color="#8d13d0"
              >Scrab</v-btn
            >
          </v-card-title>
        </v-row>





      </v-col>
    </v-row>
    <WriteReply />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import WriteReply from "@/components/mainDetail/WriteReplyContent.vue";


@Component({
  components: {
    WriteReply
  },
  props: {
    groupImage: {
      type: String,
      default: "@/assets/images/seoul3.jpg"
    },
    hostImage: {
      type: String,
      default: "@/assets/images/seoul2.jpg"
    }
  }
})
export default class MainDetailContent extends Vue {
  
}
</script>

<style></style>
