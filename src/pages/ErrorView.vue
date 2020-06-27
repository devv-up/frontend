<template>
  <div>
    <v-row>
      <v-col>
        <v-icon size="100" color="warning">mdi-alert</v-icon>
      </v-col>
    </v-row>
    <v-row class="display-2 font-weight-bold">
      <v-col>404 - Not Found</v-col>
    </v-row>
    <v-row class="title">
      <v-col>
        서비스 이용에 불편을 드려 죄송합니다.
        <v-row class="font-weight-light body-1">
          찾으시려는 페이지는 주소를 잘못 입력하였거나
          <br />페이지 주소의 변경 또는 삭제 등의 이유로 페이지를 찾을 수
          없습니다.
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <router-link to="/">
          <v-btn color="primary">메인 페이지로</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Error extends Vue {}
</script>
