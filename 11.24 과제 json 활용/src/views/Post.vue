<template>
  <div :class="$style.index">
    <div :class="$style.nonLogin" v-if="!loginCheck" v-bind="$router.push('/')"></div>
    
    <div :class="$style.container" v-else>
      <span :class="$style.spanAdmin">Admin</span>
      <span :class="$style.spanPost">게시물 관리</span>

      <table>
        <thead>
          <th>ID</th>
          <th>Contents</th>
          <th>Registerd By</th>
          <th>RegisteredDate</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in contents" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.contents}}</td>
            <td>{{contentsFromMembers(index)}}</td>
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
        width: 227.75px;
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
import { Component, Vue, Watch } from 'vue-property-decorator';


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
    this.checkHistory = "post"
    this.$store.commit('setCheckHistory', this.checkHistory)
  }

  contentsFromMembers(a:number) {
    for (var j = 0; j<this.members.length; j++) {
      if (this.members[j].id == this.contents[a].registered_by) {
        return this.members[j].name
      }
    } 
  }

  changeDate(a: number) {
    var year = new Date(this.members[a].registered_date*1000).getFullYear()
    var month = new Date(this.members[a].registered_date*1000).getMonth() + 1
    var date = new Date(this.members[a].registered_date*1000).getDate() 
    return year + '.' + month + '.' + date
  }

  @Watch('loginCheck')
  updateLoginCheck() {
    this.loginCheck = this.$store.getters.getLoginCheck
    alert('dd')
  }
  //watch로 loginCheck 변환
}
</script>
