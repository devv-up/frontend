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
          <v-card-text outlined tile>
            {{ groupLightContent }}
          </v-card-text>
        </v-row>

        <v-row row wrap justify="center" align="center">
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card-title class="font-weight-CONDENSED headline ma-2">
              모임내용
            </v-card-title>
            <v-card-text>
              {{ groupContent }}
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
                src="data:image/jpeg;base64,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"
              ></v-img>
            </v-avatar>
          </v-col>
          <span class="title mt-3">{{ grouphostname }}</span>
        </v-row>

        <v-row justify="center" align="center">
          <v-card-title>
            <v-btn class="followBtn ml-3 mt-2" color="white">Follow</v-btn>
            <v-btn class="scrabBtn ml-4 mt-2 white--text" color="#8d13d0"
              >Scrab</v-btn
            >
          </v-card-title>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import WriteReply from "@/views/components/writeReply.vue";

@Component({
  components: {
    WriteReply
  }
})
export default class MainDetailContent extends Vue {
  groupname = "groupname";
  groupplace = "groupplace";
  groupLightContent =
    "모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임모임";
  grouphostname = "Bill Gates";
  groupContent = "모임설명";
}
</script>

<style></style>
