<template>
    <div class="divapp">
    <v-row justify="center">
        <v-col class="d-flex ml-12" md="7">
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
    <v-row justify="center">
        <v-col md="12" class="d-flex">
            <v-divider
            ></v-divider>
        </v-col>
    </v-row>

    <v-row class="ma auto">
        <v-col cols="12" sm="6" class="ml-12" >
            <v-card
                class="d-flex flex-row mb-6"
                outlined
                tile
                width="600"
                height="600"
            >
                모임
            </v-card>
        </v-col>

        <v-col sm="3" class="ml-6" >
            <p class="font-weight-CONDENSED display-2 ma-2 d-flex">
                주최자
            </p>
            <v-card class="ma auto pa-12 px-2 mt-1 ma-2 d-flex" flat tile>
                <v-card-title class="grey lighten-1">
                    <v-avatar class="mr-3">
                        <img
                        src="@/assets/images/seoul.jpg"
                        alt="John"
                        >
                    </v-avatar>
                    <span class="headline white--text">Bill Gates</span>    
                </v-card-title>
                
                <v-card-title>
                    <v-btn class="followBtn ml-3 mt-3" text-color="white">Follow</v-btn>
                    <v-btn class="scrabBtn ml-4 mt-4" color="orange" text-color="white">scrab</v-btn>
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
            <v-col md="12">
            <v-divider
            ></v-divider>
            </v-col>
    <v-row>
        <v-col>
            <p class="font-weight-CONDENSED display-2 ma-2">
                모임 내용
            </p>
            
                모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
            모임설명모임설명모임설명모임설명모임설명
        </v-col>
    </v-row>
            <v-col md="12">
            <v-divider
            ></v-divider>
            </v-col>
    <v-row>
        <v-col>
            <p class="font-weight-CONDENSED display-2 ma-2 d-flex">댓글개수</p>
                

                <p>아이디
                <v-btn class="modifyReply" text-color="white" >수정</v-btn>
                <v-btn class="deleteReply" color="orange" text-color="white">삭제</v-btn>
                </p>
                댓글댓글댓글댓글
                댓글댓글댓글댓글
                댓글댓글댓글댓글
                댓글댓글댓글댓글
        </v-col>
    </v-row>
            <v-col md="12">
            <v-divider
            ></v-divider>
            </v-col>
    <v-row>
        <v-col>
                <p>아이디
                <v-btn class="modifyReply" text-color="white">수정</v-btn>
                <v-btn class="deleteReply" color="orange" text-color="white">삭제</v-btn>
                </p>
                댓글댓글댓글댓글
                댓글댓글댓글댓글
                댓글댓글댓글댓글
                댓글댓글댓글댓글
        </v-col>
    </v-row>
            <v-col md="12">
            <v-divider
            ></v-divider>
            </v-col>
    <v-row>
        <v-col>
            <p class="font-weight-CONDENSED display-2 ma-2 d-flex">댓글쓰기</p>
            <v-textarea
            name="input-7-1"
            filled
            label="댓글입력"
            auto-grow
            value=""
            class="mt-8"
            ></v-textarea>
            <v-btn class="writeReply" text-color="white">댓글등록</v-btn>
        </v-col>    
    </v-row>
            
        
    <v-row>
        
    </v-row>
        
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MainDetail extends Vue {
    groupname="groupname"
    groupplace="groupplace"
    grouphost="host"
    grouphostname="Bill Gates"
    items=[
        {src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
        {src:"@/assets/images/seoul.jpg"},
        {src:"@/assets/images/seoul2.jpg"}
    ]
}
</script>

<style scoped>
.divapp{
    margin: 0 auto;
}

.secondpic{
    margin-top: 4%;
}

.hostPicture{
    margin-top:6%;
    margin-left:5%;
}

.vcol2{
    margin-top: 40%;
    display:inline-block;
}

.categoryClass{
    margin-top:3%;
    margin-left:3%;
}

.groupDetail{
    margin: 0 auto;
}

.reply{
    margin: 0 auto;
}

.modifyReply{
    margin-left: 60%;
    margin-right: 1%;
}

.deleteReply{
    margin-left: 1%;
}

.writeReply{
    margin-left: 350px;
}

</style>