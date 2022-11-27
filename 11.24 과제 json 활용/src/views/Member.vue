<template>
  <div :class="$style.index">
    <div :class="$style.nonLogin" v-if="!loginCheck" v-bind="$router.push('/')"></div>
    
    <div :class="$style.container" v-else>
      <span :class="$style.spanAdmin">Admin</span>
      <span :class="$style.spanPost">게시물 관리</span>

      <table>
        <thead>
          <th>ID</th>
          <th>User ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>Status</th>
          <th>RegisteredDate</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in members" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.user_id}}</td>
            <td>{{item.email}}</td>
            <td>{{item.name}}</td>
            <td>{{changeStatus(index)}}</td>
            <td>{{changeDate(index)}}</td>
          </tr>
        </tbody>
        </table>
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
      width: 100%;
      display: inline-block;
      font-family: sans-serif;
      margin-left: 37px;
    }

    > .spanAdmin {
      color: #333333;
      font-size: 15px;
      margin-top: 35px;
    }

    > .spanPost {
      color: #111111;
      font-size: 24px;
      font-weight: bold;
    }

    table {
      width: 911px;
      height: 280px;
      margin-top: 40px;
      margin-left: 37px;
      text-align: left;
      border: 2px solid #828282;
      border-collapse: collapse;
      color: #000000;
      font-size: 14px;
      font-family: sans-serif;
      
      th {
        width: 227.75px;
        height: 40px;
        background-color: #e5e5e5;
        font-weight: bold;
        padding-left: 10px;
        border: 2px solid #828282;
      }
      
      td {
        width: 152.67px;
        height: 40px;
        background-color: #ffffff;
        color: #000000;
        font-size: 14px;
        padding-left: 10px;
        border: 2px solid #828282;
      }
    }
  }
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    // HelloWorld,
  },
})
export default class Post extends Vue {
  checkHistory?: string
  loginCheck: boolean = this.$store.getters.getLoginCheck
  members: any = this.$store.getters.getMembers
  contents: any = this.$store.getters.getContents
  checkID: any = {}

  mounted() {
    this.checkHistory = this.$store.getters.getCheckHistory
  }
  
  beforeDestroy() {
    this.checkHistory = "member"
    this.$store.commit('setCheckHistory', this.checkHistory)
  }

  changeStatus(a: number) {
    if (this.members[a].status == "NORMAL") {
      return "정상"
    }
    else if (this.members[a].status == "PAUSED") {
      return "정지"
    }
    else (this.members[a].status == "DELETED") 
      return "탈퇴"
  }

  changeDate(a: number) {
    var year = new Date(this.members[a].registered_date*1000).getFullYear()
    var month = new Date(this.members[a].registered_date*1000).getMonth() + 1
    var date = new Date(this.members[a].registered_date*1000).getDate() 
    return year + '.' + month + '.' + date
  }
}
</script>
