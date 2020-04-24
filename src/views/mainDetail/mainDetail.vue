<template>
    <mainDetailComponent></mainDetailComponent>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import mainDetailComponent from "@/views/components/mainDetailComponent.vue";

@Component({
  components: {
    mainDetailComponent
  }
})
export default class MainDetail extends Vue {
    
}
</script>

<style scoped>


</style>