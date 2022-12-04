<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.mobileMenu">
				<img :src="require('@/assets/menu.png')" v-on:click="openMobileMenu">
				<router-link to="/">
					<span :class="$style.mobileHeader">WEBMASTER</span>
				</router-link>
			</div>
			<div :class="[$style.mobileDiv, mobileClass]">
				<div :class="$style.containerBackground" v-on:click="closeMobileMenu"></div>
				<div :class="$style.menuContainer"  v-on:click="closeMobileMenu">
					<div :class="$style.menuHeader">
						<router-link to="/">
							<span :class="$style.header">WEBMASTER</span>
						</router-link>
						<router-link to="/">
							<span :class="$style.subHeader">관리자 웹마스터 페이지</span>
						</router-link>
					</div>

					<div :class="$style.menuContents" v-if="loginCheck">
						<div v-for="(item, index) in menuCodes" :key="index">
							<span v-if="index == 1" :class="$style.spanMenu">회원 및 컨텐츠</span>
							<span v-if="index == 3" :class="$style.spanMenu">설정</span>
							<div :class="menuClasses[index]" v-on:click="checkImage(item)">
								<router-link :to="'/' + item">
									<img :src="require('@/assets/' + imageNames[index] + '_2.png')" v-if="imageCheck == item">
									<img :src="require('@/assets/' + imageNames[index] + '.png')" v-else>
									<span>{{ menuTitles[index] }}</span>
									<img :src="require('@/assets/chevron_right_2.png')" v-if="imageCheck == item">
									<img :src="require('@/assets/chevron_right.png')" v-else>
								</router-link>
							</div>
						</div>
					</div>

					<div :class="$style.menuFooter">
						<span :class="$style.loginFooter" v-if="!loginCheck">
							계속하려면 <br> 로그인하세요
						</span>
						<span :class="$style.logoutFooter" v-if="loginCheck">
							<span :class="$style.manager">관리자</span> 님, 환영합니다
							<button :class="$style.logoutBtn" v-on:click="logoutMode()">로그아웃</button>
						</span>
					</div>
				</div>
			</div>
			<div :class="$style.mainContainer">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;

	box-sizing: border-box;
}
</style>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {
	> .container {
		width: 100%;
		min-height: 100vh;

		display: flex;
		position: relative;

		@include mobile {
			min-height: initial;

			display: block;
							
			> .mobileDiv.showMenu {
				display: initial;
			}
		}

		> .mobileMenu {
			width: 100%;
			height: 56px;

			display: none;
			position: absolute;
			top: 0;

			background-color: #eeeeee;

			@include mobile {
				display: flex;
				
				cursor: pointer;
			}

			> img {
				padding: 16px;
			}

			> a {
				text-decoration: none;

				padding: 10px;
				margin: 0 auto;

				color: black;

				> .mobileHeader {	
					font-size: 24px;
					font-weight: bold;
					font-family: sans-serif;

					margin-right: 56px;
				}
			}
		}

		> .mobileDiv {
			width: 300px;
			height: 100%;

			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;

			@include mobile {
				width: 100%;

				display: none;
			}


			> .containerBackground {
				width: 100%;
				height: 100%;

				position: absolute;
				left: 0;
				top: 0;

				background-color: rgb(0, 0, 0, 0.5);
			}

			
			> .menuContainer {
				width: 300px;
				height: 100%;

				text-align: right;
				position: absolute;
				top: 0;
				left: 0;

				background-color: #eeeeee;
				
				> .menuHeader {
					text-align: left;

					a {
							
						span { 
							margin-left: 28px;
							
							display: inline-block;

							font-family: sans-serif;

							color: #333333;
						}

						> .header {
							margin-top: 35px;

							font-size: 32px;
							font-weight: bold;
						}

						> .subHeader {
							margin-top: 17px;

							font-size: 15px;
						}
					}
				}

				> .menuContents {
					width: 100%;

					margin-top: 118px;

					> div {

						img {
							width: 20px;
							height: 20px;

							transform: translateY(4px);
						}

						a {
							width: 100%;
							height: 35px;

							display: inline-block;

							text-decoration: none;
							align-items: center;

							padding-top: 5px;
						}

						:global {
							.router-link-exact-active {
								font-weight: bold;

								background-color: rgb(0, 0, 0, 0.1);
								color: black;
							}
						}

						span {
							font-size: 16px;
							font-family: sans-serif;

							color: #666666;
						}

						> .spanMenu {
							width: 70%;

							display: inline-block;

							margin-top: 30px;
							margin-right: 13px;
							margin-bottom: 4px;
							
							font-size: 13px;
							font-weight: bold;
							font-family: sans-serifs;

							color: #333333;
						}

						> .post {
							margin-bottom: 23px;
						}
					}

					
				}
				> .menuFooter {
					width: 300px;
					height: 86px;

					display: flex;
					flex-wrap: wrap;
					align-items: center;  
					position: absolute;

					bottom: 0;
								
					background-color: #333333;

					span {
						display: inline-block;
						
						margin-right: 12px;

						font-size: 16px;

						color: #ffffff;
					}

					> .loginFooter {
						width: 100%;
					}

					> .logoutFooter {
						width: 100%;

						display: inline-block;

						margin-right: 12px;
						margin-left: -12px;


						> .manager {
							margin-right: 0px;

							font-weight: bold;
						}

						> .logoutBtn {
							width: 110px;
							height: 25px;
							
							font-size: 13px;
							font-weight: bold;

							margin-top: 10px;
							margin-left: 178px;
							
							border-radius: 7px;
							cursor: pointer;

							@include mobile {
								width: 277px;
								height: 32px;

								margin-left: 11px;
							}
						}
					}
				}
			}
		}

		> .mainContainer {
			padding-left: 300px;

			@include mobile {
				padding-left: 0px;
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import JsonContents from '@/assets/contents.json'
import JsonMembers from '@/assets/members.json'

@Component({
  components: {
    // HelloWorld,
  },
})
export default class HomeView extends Vue {
	loginCheck: boolean = this.$store.getters.getLoginCheck
	imageCheck: string = ''
	members: any = {}
	contents: any = {}

	menuCodes: string[] = ["dashboard", "member", "post", "settings"]
	imageNames: string[] = ["trello", "member", "list", "settings"]
	menuTitles: string[] = ["대시보드", "회원 관리", "게시물 관리", "운영 설정"]
	// @ts-ignore
	menuClasses: string[] = [this.$style.dashboard, this.$style.member, this.$style.post, this.$style.settings]

	// @ts-ignore
	mobileClass: string = ''

	mounted() {
		this.members = JsonMembers.members
		this.contents = JsonContents.contents

		this.$store.commit("setMember", this.members)
		this.$store.commit("setContents", this.contents)

		this.routeCheck()
	}

	@Watch("$route.path")
	pathUpdatedHandler() {
		switch(this.$route.path) {
			case "/":
				if (this.$store.state.loginCheck) {
					history.back()
				}
				break;
			default:
				if (!this.$store.state.loginCheck) {
					this.$router.push("/")
				}
				break;
		}
	}

	@Watch('$store.state.loginCheck')
	updateLoginCheck() {
		this.loginCheck = this.$store.getters.getLoginCheck
	}

	logoutMode() {
		this.$store.commit("setLoginCheck", false)
		
		this.$router.push('/')
	}

	checkImage(ci: string) {
		this.imageCheck = ci
 	}

	routeCheck() {
		if (!this.loginCheck) {
			this.$router.push('/')
		}
	}

	openMobileMenu() {
		// @ts-ignore
		this.mobileClass = this.$style.showMenu 

	}

	closeMobileMenu() {
		// @ts-ignore
		if (this.mobileClass ==this.$style.showMenu) {
			this.mobileClass = ''

		}
	}
}
</script>
