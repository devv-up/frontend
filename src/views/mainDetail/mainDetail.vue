<template>
    <div class="divapp">
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md12 justify-center="true">
                        <v-carousel hide-delimiters>
                            <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                            ></v-carousel-item>
                        </v-carousel>
                </v-flex>
            </v-layout>
        
                <v-row justify="center">
                    <v-col md="12">
                        <v-divider
                        ></v-divider>
                    </v-col>
                </v-row>

            <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md12 justify-center="true">
                    <v-col class="ml-12" >
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

            
                    <v-col class="ml-6" >
                        <v-card-title class="font-weight-CONDENSED display-2 ma-2">
                            주최자
                        </v-card-title>
                        <v-card-text class="ma auto pa-12 px-2 mt-1 ma-2" flat tile>
                                <v-avatar class="mr-3">
                                    <img
                                    src="@/assets/images/seoul.jpg"
                                    alt="John"
                                    >
                                </v-avatar>
                                <span class="headline" name="hostId">Bill Gates</span>    
                        </v-card-text>
                            
                            <v-card-title>
                                <v-btn class="followBtn ml-3 mt-3" text-color="white">Follow</v-btn>
                                <v-btn class="scrabBtn ml-4 mt-4" color="orange" text-color="white">scrab</v-btn>
                            </v-card-title>
                    </v-col>
                </v-flex>
            </v-layout>
            
                <v-col md="12">
                <v-divider
                ></v-divider>
                </v-col>

            <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md12 justify-center="true">
                    <v-col class="ml-12">
                        <v-card-title class="font-weight-CONDENSED display-2 ma-2">
                            {{groupContentHeader}}
                        </v-card-title>
                        <v-card-text>
                            {{groupContent}}
                        </v-card-text>
                    </v-col>
                </v-flex>
            </v-layout>
            
                <v-col md="12">
                <v-divider
                ></v-divider>
                </v-col>

            <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md12 justify-center="true">
                    <v-col class="ml-12">
                        <v-card-title class="font-weight-CONDENSED display-2 ma-2 d-flex">댓글개수</v-card-title>
                            <span v-for="(userProfile,x) in userProfiles"
                            :key="x">
                                <v-card-title>
                                {{userProfile.id}}
                                    <v-spacer></v-spacer>
                                    <v-btn class="modifyReply" text-color="white" >수정</v-btn>
                                    <v-btn class="deleteReply" color="orange" text-color="white">삭제</v-btn>
                                </v-card-title>
                                <v-card-text name="userProfile">
                                    {{userProfile.comment}}
                                </v-card-text>
                            </span>
                    </v-col>
                </v-flex>
            </v-layout>

                <v-col md="12">
                <v-divider
                ></v-divider>
                </v-col>

            <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md12 justify-center="true">
                    <v-col class="ml-12">
                        <v-card-title class="font-weight-CONDENSED display-2 ma-2 d-flex">
                            {{writeCommentHeader}}
                        </v-card-title>
                            <v-card-text>
                                <v-textarea
                                name="input-7-1"
                                filled
                                label="댓글입력"
                                auto-grow
                                value=""
                                class="mt-8"
                                v-model="writecomment"
                                ></v-textarea>
                                <v-btn class="writeReply" text-color="white">댓글등록</v-btn>
                            </v-card-text>
                    </v-col>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainDetail extends Vue {
    groupname="groupname"
    groupplace="groupplace"
    groupshortdetail="모임"
    grouphost="host"
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

<style scoped>
.deleteReply{
    margin-left:2%;
}

.writeReply{
    margin-left: 40%;
}

</style>