<template>
	<section>
		<p class="font-weight-CONDENSED headline ma-2">댓글개수</p>
		<span v-for="item in detailData.comments" :key="item.id">
			<v-row v-if="item.id">
				<h3>
					<span class="ml-3">작성자: {{ detailData.author.name }}</span>
				</h3>
				<v-spacer />
				<v-btn class="ma-1" color="white" @click="update(item.id)">수정</v-btn>
				<v-btn
					class="ma-1 white--text"
					color="#8d13d0"
					@click="deletecomment(item.id)"
					>삭제</v-btn
				>
			</v-row>
			<p name="content" v-if="item.id">{{ item.content }}</p>
		</span>

		<p class="font-weight-CONDENSED headline ma-2">댓글쓰기</p>
		<span align="center">
			<v-textarea
				name="input-7-1"
				filled
				label="댓글입력"
				auto-grow
				class="mt-8"
				v-model="comment"
			></v-textarea>
			<v-btn class="white--text" color="#8d13d0" @click="addcomment"
				>댓글등록</v-btn
			>
		</span>
	</section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { PostId } from "@/store/models/detail";
import { Getter, Action } from "vuex-class";

@Component
export default class PostComment extends Vue {
	//v-model 값 받아오기
	private comment = "";
	private updateboolean = false;
	private addboolean = true;

	@Getter private detailData!: PostId;
	@Getter private gettercomment!: Comment;

	@Action private commentAddAction!: Function;
	@Action private commentDeleteAction!: Function;
	@Action private commentUpdateAction!: Function;
	@Action private detailAction!: Function;

	//페이지 불러오자마자 바로 조회된 정보 가져오기
	async created() {
		await this.detailAction();
	}

	//버튼 클릭시 댓글등록 함수 실행
	addcomment() {
		if (this.comment !== "") {
			this.commentAddAction({
				content: this.comment,
				id: this.detailData.id
			}).then(() => {
				alert("댓글이 등록되었습니다.");
				this.detailAction();
				this.comment = "";
			});
		} else if (this.comment === "") {
			alert("댓글을 입력해주세요.");
		}
	}

	/*버튼 클릭시 댓글수정 함수 실행
  함수 안에서 반복문을 통해 this.detailData.comments배열을 쭉 훑어주고
  그 배열안에서 위에서 받아온 commentid를 찾아야 하므로 if문을 써서
  this.detailData.comments.id랑 파라미터로 받은 comment.id랑 같은지 확인하고 같으면
  item.id를 사용할수있는 템플릿단안에서 v-textarea와 수정,취소 버튼을 2개 만들어준다.
  수정을 누르면 updatecomment함수로 이어지게 만들어주고 취소를 누르면 cancel함수로
  가게끔 만들어준다.
  v-textarea의 vmodel을 content로 삼고 파라미터로 받은 comment.id와 this.detailData.comments.id
  가 같을때의 comment.id를 comment_id로 삼아서 둘을 같이 parameter로 this.commentUpdateAction()으로 보내준다.
  */

	update(commentid: number) {
		if (commentid === this.detailData.comments[0].id) {
			this.addboolean = false;
			this.updateboolean = true;
		}
	}

	cancel() {
		this.updateboolean = false;
		this.addboolean = true;
	}

	//버튼 클릭시 댓글삭제 함수 실행
	deletecomment(commentid: number) {
		this.commentDeleteAction(commentid).then(() => {
			alert("댓글이 삭제되었습니다.");
			this.detailAction();
		});
	}
}
</script>

<style></style>
