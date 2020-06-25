<template>
  <v-form v-model="isValid">
    <v-col cols="auto" xs12 sm12 md12 lg12 xl12>
      <v-text-field label="모임명" v-model="groupName" required></v-text-field>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="모임 날짜 선택"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu1 = false"
          :min="today"
        ></v-date-picker>
      </v-menu>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-combobox
        :items="times"
        label="시간대 선택"
        v-model="selectTime"
      ></v-combobox>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-text-field
        label="모임장소"
        class="mb-8"
        v-model="groupPlace"
      ></v-text-field>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-textarea
        placeholder="모임에 대해서 자세한 내용을 적어주세요."
        v-model="groupDetail"
        outlined
      ></v-textarea>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-combobox
        :items="items"
        label="카테고리 선택"
        v-model="selectCategory"
      ></v-combobox>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-select
        v-model="selectTag"
        :items="selectitems"
        label="태그선택"
        multiple
      >
      </v-select>
    </v-col>

    <p class="text-center mb-8">
      언어 선택시 원하는 언어가 없는경우 모임 상세내용에서 직접 기입해주세요.
    </p>

    <v-col xs12 sm12 md12 lg12 xl12>
      <v-file-input
        label="이미지 선택"
        multiple
        accept="image/*"
      ></v-file-input>
    </v-col>

    <v-col xs12 sm12 md12 lg12 xl12 class="text-center">
      <v-btn class="ma-6" :submit="submit" :disabled="!isValid"
        >submit</v-btn
      >
      <v-btn class="ma-6">clear</v-btn>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class FormContentComponent extends Vue {
  isValid = true;
  groupName = "";
  date = "";
  today = new Date().toISOString().substr(0, 10);
  times = ["오전", "오후", "저녁"];
  selectTime = "";
  groupPlace = "";
  groupDetail = "";
  dateFormatted = "";
  menu1 = false;
  menu2 = false;
  menu3 = false;
  items = ["Algorythm", "Study Group"];
  selectCategory = "";
  selectitems = [
    "All",
    "Java",
    "Python",
    "C",
    "C++",
    "C#",
    "Android",
    "Swift",
    "Vue",
    "React",
    "Angular",
    "etc"
  ];
  selectTag = [];

  submit() {
    (this.$refs["form"] as HTMLFormElement).validate();
  }
}
</script>

<style></style>
