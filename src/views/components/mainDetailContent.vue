<template>
    <div>
        <v-row row wrap justify="center" align="center">
            <v-col xs12 sm12 md12 lg12 xl12>
                <v-carousel hide-delimiters>
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row row wrap justify="center" align="center">
            <v-col md="12">
                <v-divider
                ></v-divider>
            </v-col>
        </v-row>

        <v-row row wrap justify="center" align="center">
            <v-col xs12 sm12 md12 lg12 xl12>
                <v-card-text
                    class="mb-6"
                    outlined
                    tile
                    width="600"
                    height="600"
                >
                    {{groupshortdetail}}
                </v-card-text>
            </v-col>
            <v-col xs12 sm12 md12 lg12 xl12>
                <v-row justify="center" align="center">
                    <v-card-title class="font-weight-CONDENSED display-2 ma-2">
                        {{hosttitle}}
                    </v-card-title>
                </v-row>
                <v-row justify="center" align="center">
                    <v-card-title>
                            <v-avatar class="mr-3">
                                <img
                                src="@/assets/images/seoul.jpg"
                                alt="John"
                                >
                            </v-avatar>
                            <span class="headline" name="hostId">{{grouphostname}}</span>    
                    </v-card-title>
                    
                    <v-card-title>
                        <v-btn class="followBtn ml-3 mt-3" text-color="white">Follow</v-btn>
                        <v-btn class="scrabBtn ml-4 mt-4" color="orange" text-color="white">scrab</v-btn>
                    </v-card-title>
                </v-row>
            </v-col>
        </v-row>
        
        <v-row row wrap justify="center" align="center">
            <v-col md="12">
                <v-divider
                ></v-divider>
            </v-col>
        </v-row>

        <v-row row wrap justify="center" align="center">
            <v-col xs12 sm12 md12 lg12 xl12>
                    <v-card-title class="font-weight-CONDENSED display-2 ma-2">
                        {{groupContentHeader}}
                    </v-card-title>
                    <v-card-text>
                        {{groupContent}}
                    </v-card-text>
            </v-col>
        </v-row>
        
        <v-row row wrap justify="center" align="center">
            <v-col md="12">
                <v-divider
                ></v-divider>
            </v-col>
        </v-row>

        <v-row row wrap justify="center" align="center">
            <v-col xs12 sm12 md12 lg12 xl12>
                <v-card-title class="font-weight-CONDENSED display-2 ma-2">댓글개수</v-card-title>
                    <span v-for="(userProfile,x) in userProfiles" :key="x">
                        <v-card-title>
                        {{userProfile.id}}
                            <v-spacer></v-spacer>
                            <v-btn class="ma-1" text-color="white" >수정</v-btn>
                            <v-btn class="ma-1" color="orange" text-color="white">삭제</v-btn>
                        </v-card-title>
                        <v-card-text name="userProfile">
                            {{userProfile.comment}}
                        </v-card-text>
                    </span>
            </v-col>
        </v-row>

        <v-row row wrap justify="center" align="center">
            <v-col md="12">
                <v-divider
                ></v-divider>
            </v-col>
        </v-row>

        <v-row row wrap justify="center" align="center">
            <v-col xs12 sm12 md12 lg12 xl12>
                <v-card-title class="font-weight-CONDENSED display-2 ma-2">
                    {{writeCommentHeader}}
                </v-card-title>
                <v-card-text align="center">
                    <v-textarea
                    name="input-7-1"
                    filled
                    label="댓글입력"
                    auto-grow
                    value=""
                    class="mt-8"
                    v-model="writecomment"
                    ></v-textarea>
                    <v-btn color="orange">댓글등록</v-btn>
                </v-card-text>
            </v-col>
        </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainDetailContent extends Vue {
    groupname="groupname"
    groupplace="groupplace"
    groupshortdetail="모임"
    grouphost="host"
    hosttitle="주최자"
    grouphostname="Bill Gates"
    groupContentHeader="모임내용"
    groupContent="모임설명"
    writeCommentHeader="댓글쓰기"
    writecomment=""
    items=[
        {src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
        {src:"@/assets/images/seoul.jpg"},
        {src:"@/assets/images/seoul2.jpg"}
    ]
    userProfiles=[
        {
            id:'good',
            comment:'Hello'
        },
        {
            id:'call',
            comment:'calling'
        },
        {
            id:'hot',
            comment:'cool'
        }
    ]
}
</script>

<style>

</style>