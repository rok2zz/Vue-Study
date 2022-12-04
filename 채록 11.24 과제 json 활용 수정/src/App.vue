<template>
  	<div :class="$style.index">
		<div :class="$style.container">
		<div :class="$style.menuContainer">
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
          <router-link :to="'/'+item" :class="'dashboard_menu_link'">
            <img :src="require('@/assets/' + imageNames[index] + '_2.png')" v-if="(imageCheck == item)">
            <img :src="require('@/assets/' + imageNames[index] + '.png')" v-else>
            <span :class="$style.spanDashboard">{{ menuTitles[index] }}</span>
            <img :src="require('@/assets/chevron_right_2.png')" v-if="(imageCheck == item)">
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
				<button :class="$style.logoutBtn" v-on:click="logoutMode">로그아웃</button>
			</span>
			</div>
		</div>

		<div :class="$style.mainContainer">
			<router-view/>
		</div>
		</div>
	</div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  // .dashboard_menu_link {
  //   &.router-link-exact-active {
  //     background-color: rgb(0, 0, 0, 0.1);
  //     color: black;
  //     font-weight: bold;
  //   }
  // }
</style>

<style lang="scss" module>
.index {
  > .container {
    display: flex;
    width: 100%;
    min-height: 100vh;

    > .menuContainer {
      width: 300px;
      background-color: #eeeeee;
      text-align: right;

      > .menuHeader {
        width: 300px;
        text-align: left;

        a {
                  
          span { 
            display: inline-block;
            width: 100%;
            margin-left: 28px;
            color: #333333;
            font-family: sans-serif;
          }

          > .header {
            font-size: 32px;
            font-weight: bold;
            margin-top: 35px;
          }

          > .subHeader {
            font-size: 15px;
            margin-top: 17px;
          }
        }
      }

      > .menuContents {

        div {
          width: 100%;
          // height: 40px;
        }

        img {
          width: 20px;
          height: 20px;
          transform: translateY(4px);
        }

        a {
          display: inline-block;
          width: 100%;
          height: 35px;
          text-decoration: none;
          align-items: center;
          padding-top: 5px;

        }
        
        :global {
          .router-link-exact-active {
            background-color: rgb(0, 0, 0, 0.1);
            color: black;
            font-weight: bold;
          }
        }

        span {
          color: #666666;
          font-size: 16px;
          font-family: sans-serif;
        }

        .spanMenu {
          display: inline-block;
          width: 70%;
          color: #333333;
          font-size: 13px;
          font-weight: bold;
          font-family: sans-serifs;
          margin-top: 30px;
          margin-right: 13px;
          margin-bottom: 4px;
        }

        .dashboard {
          margin-top: 118px;
        }

        .post {
          margin-bottom: 23px;
        }
      }
      > .menuFooter {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        height: 86px;
        background-color: #333333;
        align-items: center;  
        position: absolute;
        bottom: 0px;

        span {
          display: inline-block;
          color: #ffffff;
          font-size: 16px;
          margin-right: 12px;
        }

        > .loginFooter {
          width: 100%;
        }

        > .logoutFooter {
          display: inline-block;
          width: 100%;
          margin-right: 12px;
          margin-left: -12px;

          > .manager {
            font-weight: bold;
            margin-right: 0px;
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
          }
        }
      }
    }

    > .mainContainer {

    }
  }
}

</style>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import JsonContents from '@/assets/contents.json'
import JsonMembers from '@/assets/members.json'
import { watch } from 'vue';


@Component({
  components: {
    // HelloWorld,
  },
})
export default class HomeView extends Vue {
	menuCodes: string[] = ["dashboard", "member", "post", "settings"]
	imageNames: string[] = ["trello", "member", "list", "settings"]
	menuTitles: string[] = ["대시보드", "회원 관리", "게시물 관리", "운영 설정"]
	
	// @ts-ignore
	menuClasses: string[] = [this.$style.dashboard, this.$style.member, this.$style.post, this.$style.settings]

	loginCheck: boolean = this.$store.getters.getLoginCheck
	imageCheck: string = 'home'
	members: any = {}
	contents: any = {}
	

	mounted() {
		this.members = JsonMembers.members
		this.contents = JsonContents.contents

		this.$store.commit("setMember",this.members)
		this.$store.commit("setContents",this.contents)
		

	}

	@Watch("$route.path")
	pathUpdatedHandler() {
		switch(this.$route.path) {
		case "/":
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
}
</script>
