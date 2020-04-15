<template>
  <div id="app">
    <v-app id="inspire">
      <v-form class="vform">
        <v-container class="vcontainer">
          <v-row class="vrow">
            <v-col class="vcol" md="7">
              <p class="display-3" id="makeGroup">{{ makeGroup }}</p>
                
                <p class="title">{{ groupName }}</p>
                <v-text-field label="모임명"></v-text-field>

                <p class="title">{{ groupDate }}</p>
                <v-date-picker v-model="picker" class="vdate" :min="today"></v-date-picker>
                
                <p class="title">{{ groupPlace }}</p>
                <v-text-field label="모임장소" class="vplace"></v-text-field>

                <p class="title">{{ groupDetail }}</p>
                <v-textarea placeholder="모임에 대해서 자세한 내용을 적어주세요." outlined></v-textarea>

                <p class="title">{{ selectType }}</p>
                <v-combobox :items="items"></v-combobox>

                <p class="title">{{ selectTypeDetail }}</p>
                <v-select
                  v-model="value"
                  :items="selectitems"
                  label="언어선택"
                  multiple
                >
                </v-select>
                <p class="subtitle-2">언어 선택시 원하는 언어가 없는경우 모임 상세내용에서 직접 기입해주세요.</p>

                <p class="title">{{ selectImage }}</p>
                <v-file-input></v-file-input>
                <v-btn
                  
                  class="vbtn"
                >submit</v-btn>
                
                <v-btn
                  
                  class="vbtn"
                >clear</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AddMain extends Vue{
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  id:boolean=true
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  makeGroup:string="모임 만들기"
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  groupName:string="모임명"
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  groupDate:string="모임날짜"
  picker:string=new Date().toISOString().substr(0, 10)
  today:string=new Date().toISOString().substr(0, 10)
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  showCurrent:boolean=true
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  groupPlace:string="모임장소"
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  groupDetail:string="모임내용"
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  selectType:string="모임종류"
  items = ['Algorythm', 'Study Group']
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  selectTypeDetail:string="자세한 모임종류"
  selectitems = ['All','Java', 'Python', 'C', 'C++', 'C#', 'Android', 'Swift', 'Vue', 'React', 'Angular','etc']
  value=[]
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  selectImage:string="이미지 선택"

  
  
  
}

</script>

<style>
.v-app-bar {
  border-bottom: 1px solid #ebebeb !important;
  background: #ffffff !important;
}

.vform{
  height: 100%;
}

.vcontainer{
  height: 100%;
}

.vrow{
  height: 100%;
}

.vcol{
  margin: 0 auto;
  height: 100%;
}

#makeGroup{
  text-align:center;
}

.vdate{
  margin-bottom: 5%;
}

.vbtn{
  margin-top:7%;
  margin-left:15%;
  margin-right:15%;
}

.subtitle-2{
  text-align: center;
}
</style>