<template>
  <div :class="$style.index">
    <div :class="$style.container" v-if="!loginCheck">
      <span :class="$style.admin">Admin</span>
      <span :class="$style.login">로그인</span>
      <input v-on:keydown="keydownHandler" :class="$style.loginID" type="text" placeholder="아이디 입력" v-model="userID">
      <input v-on:keydown="keydownHandler" :class="$style.loginPassword" type="password" placeholder="비밀번호 입력" v-model="userPassword">
      <button type="button" :class="$style.loginBtn" v-on:click="loginMode()">로그인</button>
    </div>
    <div v-else>
      이미 로그인 중입니다.
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" module>
.index {
  > .container {
    width: 100%;

    span {
      display: inline-block;
      width: 100%;
      margin-left: 37px;
    }    
    > .admin {
      color: #333333;
      font-size: 15px;
      margin-top: 35px;
    }

    > .login {
      color: #111111;
      font-size: 24px;
      font-weight: bold;
    }

    > input {
      color: #333333;
      font-size: 13px;
      width: 310px;
      height: 33px;
      margin-left: 37px;
      padding-left: 8px;
    }

    > .loginID {
      margin-top: 47px;

    }

    > .loginPassword {
      margin-top: 7px;
      margin-right: 100%;
    }

    > .loginBtn {
      width: 121px;
      height: 30px;
      color: #ffffff;
      background-color: #333333;
      margin-top: 12px;
      margin-left: 37px;
      border-radius: 5px;
      cursor: pointer;
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
    // if (!(this.userID == this.saveID && this.userPassword == this.savePassword)) {
    if (this.userID != this.saveID || this.userPassword != this.savePassword) {
      alert("아이디 비번 틀림")
      return
    }

    this.loginCheck = true
    this.userID = ""
    this.userPassword = ""
  
    this.$store.commit("setLoginCheck", this.loginCheck)

    switch (this.checkHistory) {
      case "dashboard" :
        this.$router.push('/dashboard')
        break;
      case "member" :
        this.$router.push('/member')
        break;
      case "post" :
        this.$router.push('/post')
        break;
      case "settings" :
        this.$router.push('/settings')
        break;
      default :
        alert(this.checkHistory)
        history.go()
        break;
    }
  }

  @Watch('$store.state.loginCheck')
  updateLoginCheck() {
    this.loginCheck = this.$store.getters.getLoginCheck
  }

  keydownHandler(e: KeyboardEvent) {
    // console.log(e)
    if (e.key == "Enter") {
      this.loginMode()
    }
  }
}
</script>
