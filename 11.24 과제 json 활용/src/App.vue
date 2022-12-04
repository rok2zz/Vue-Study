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
          <div :class="$style.dashboard" v-on:click="checkImage('dashboard')">
            <router-link to="/dashboard">
              <img :src="require('@/assets/trello_2.png')" v-if="(imageCheck == 'dashboard')">
              <img :src="require('@/assets/trello.png')" v-else>
              <span :class="$style.spanDashboard">대시보드</span>
              <img :src="require('@/assets/chevron_right_2.png')" v-if="(imageCheck == 'dashboard')">
              <img :src="require('@/assets/chevron_right.png')" v-else>
                        </router-link>
          </div>

          <span :class="$style.spanMenu">회원 및 컨텐츠</span>

          <div :class="$style.member" v-on:click="checkImage('member')">
            <router-link to="/member">
              <img :src="require('@/assets/member_2.png')" v-if="(imageCheck == 'member')">
              <img :src="require('@/assets/member.png')" v-else>
              <span :class="$style.spanMember">회원 관리</span>
              <img :src="require('@/assets/chevron_right_2.png')" v-if="(imageCheck == 'member')">
              <img :src="require('@/assets/chevron_right.png')" v-else>           
             </router-link>
          </div>

          <div :class="$style.post" v-on:click="checkImage('post')">
            <router-link to="/post">
              <img :src="require('@/assets/list_2.png')" v-if="(imageCheck == 'post')">
              <img :src="require('@/assets/list.png')" v-else>
              <span :class="$style.spanPost">게시물 관리</span>
              <img :src="require('@/assets/chevron_right_2.png')" v-if="(imageCheck == 'post')">
              <img :src="require('@/assets/chevron_right.png')" v-else>
            </router-link>
          </div>    

          <span :class="$style.spanMenu">설정</span>
          <div :class="$style.settings" v-on:click="checkImage('settings')">
            <router-link to="/settings">
              <img :src="require('@/assets/settings_2.png')" v-if="(imageCheck == 'settings')">
              <img :src="require('@/assets/settings.png')" v-else>
              <span :class="$style.spanPost">운영 설정</span>
              <img :src="require('@/assets/chevron_right_2.png')" v-if="(imageCheck == 'settings')">
              <img :src="require('@/assets/chevron_right.png')" v-else>
            </router-link>
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

  div>div>div>div>div> a {
    &.router-link-exact-active {
      background-color: rgb(0, 0, 0, 0.1);
      color: black;
      font-weight: bold;
    }
  }
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
      position: relative;

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
          height: 40px;
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

        span {
          color: #666666;
          font-size: 16px;
          font-family: sans-serif;
        }

        > .spanMenu {
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

        > .dashboard {
          margin-top: 118px;
        }

        > .post {
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

  @Watch('$store.state.loginCheck')
  updateLoginCheck() {
    this.loginCheck = this.$store.getters.getLoginCheck
  }

  logoutMode() {
    if (this.loginCheck == true) {
      this.loginCheck = false
    }
    this.$store.commit("setLoginCheck", this.loginCheck)

    this.$forceUpdate

    this.$router.push('/')
  }

  checkImage(ci: string) {
    this.imageCheck = ci
  }
}
</script>
