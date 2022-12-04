<template>
	<div :class="$style.index">
		<div :class="$style.container" v-if="!loginCheck">
			<span :class="$style.spanAdmin">Admin</span>
			<span :class="$style.spanLogin">로그인</span>
			<input v-on:keydown="keydownHandler" :class="$style.loginID" type="text" placeholder="아이디 입력" v-model="userID">
			<input v-on:keydown="keydownHandler" :class="$style.loginPassword" type="password" placeholder="비밀번호 입력" v-model="userPassword">
			<button type="button" :class="$style.loginBtn" v-on:click="loginMode()">로그인</button>
		</div>
		<div v-else>
		이미 로그인 중입니다.
		</div>
	</div>
</template>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {
	> .container {
		padding-top: 56px;

		@include mobile {
			min-height: 100vh;

			overflow: scroll;
		}
			
		span {
			display: block;

			margin-left: 37px;
		}    

		> .spanAdmin {
			margin-top: 35px;

			font-size: 15px;
			
			color: #333333;
		}

		> .spanLogin {
			font-size: 24px;
			font-weight: bold;

			color: #111111;
		}

		input {
			width: 310px;
			height: 33px;

			display: block;
			color: #333333;
			font-size: 13px;

			margin-left: 37px;
			padding-left: 8px;
			padding-right: 8px;

			@include mobile {
				width: 296px;
				margin-right: 37px;
			}
		}

		> .loginID {
			margin-top: 47px;
		}

		> .loginPassword {
			margin-top: 7px;
		}

		> .loginBtn {
			width: 121px;
			height: 30px;

			margin-top: 12px;
			margin-left: 37px;

			color: #ffffff;
			background-color: #333333;

			border-radius: 5px;
			cursor: pointer;

			@include mobile {
				width: 300px;
				height: 42px;
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';


@Component({
  components: {
    // HelloWorld,
  },
})
export default class HomeView extends Vue {
	checkHistory?: string
	loginCheck: boolean = this.$store.getters.getLoginCheck
	userID: string = ""
	userPassword: string = ""
	saveID: string = this.$store.getters.getSaveID
	savePassword: string = this.$store.getters.getSavePassword

	mounted() {
		this.checkHistory = this.$store.getters.getCheckHistory
	}

	loginMode() {
		if (this.userID != this.saveID || this.userPassword != this.savePassword) {
			alert("아이디나 비밀번호가 틀렸습니다.")
			return
		}
		this.loginCheck = true
		this.userID = ""
		this.userPassword = ""

		this.$store.commit("setLoginCheck", this.loginCheck)

		switch (this.checkHistory) {
			case "dashboard":
				this.$router.push('/dashboard')
				break;
			case "member":
				this.$router.push('/member')
				break;
			case "post":
				this.$router.push('/post')
				break;
			case "settings":
				this.$router.push('/settings')
				break;
			default :
				break;
		}
	}

	@Watch('$store.state.loginCheck')
	updateLoginCheck() {
		this.loginCheck = this.$store.getters.getLoginCheck
	}

	keydownHandler(e: KeyboardEvent) {
		if (e.key == "Enter") {
			this.loginMode()
			}
	}
}
</script>
