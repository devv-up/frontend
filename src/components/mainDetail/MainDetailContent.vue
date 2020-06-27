<template>
	<section class="d-flex flex-column">
		<h2>모임제목</h2>
		<v-img src="@/assets/images/bill.jpg"></v-img>
		<v-row>
			<v-col cols="12" sm="9">
				<v-card-text outlined tile>
					<p>모임장소</p>
					<p>모임날짜</p>
				</v-card-text>
				<v-card-title class="font-weight-CONDENSED headline ma-2">
					모임내용
				</v-card-title>
				<v-card-text>
					모임내용
				</v-card-text>
			</v-col>
			<v-col cols="12" sm="3">
				<span class="justify-start" max-width="210">
					<v-row>
						<v-card-text class="font-weight-CONDENSED headline ml-1">
							<span class="ml-1">주최자</span>
						</v-card-text>

						<v-col cols="12">
							<v-avatar size="100" tile class="ml-4">
								<v-img src="@/assets/images/seoul2.jpg"></v-img>
							</v-avatar>
							<p class="ml-6 mt-3">모임작성자</p>
						</v-col>

						<v-card-text class="ml-2">
							<v-btn class="mt-2" color="white">Follow</v-btn>
							<v-btn class="ml-2 mt-2 white--text" color="#8d13d0">Scrab</v-btn>
						</v-card-text>
					</v-row>
				</span>
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
export default class MainDetailContent extends Vue {}
</script>

<style></style>
