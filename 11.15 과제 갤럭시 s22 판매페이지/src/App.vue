<template>
  <div :class="$style.index">
    <div :class="$style.header">
      <div :class="$style.HeaderList">
        <router-link to="/home" :class="$style.logo">
          <img :src="require('@/assets/samsung.png')"/>
        </router-link>
        <span>
          <router-link to="/sub">제품</router-link>
          <a href="#">이벤트/선물하기</a>
          <a href="#">갤럭시 캠퍼스 스토어</a>
          <a href="#">e식품관</a>
          <a href="#">#YouMake</a>
          <a href="#">스마트싱스</a>
          <a href="#">아울렛</a>
          <a href="#">고객 서비스</a>
        </span>  
        <a href="#">스토리</a>
        <a href="#">멤버십</a>
        <a href="#">디지털프라자</a>
        
      </div>  
    </div>
    <div :class="$style.container">
      <router-view/>
    </div>
    
    


  </div>
</template>
<style>
*{
  margin: 0;
  padding: 0;

}
</style>
<style lang="scss" module>
.index {
  > .header{
    width: 100vw;
    height: 120px;
    > .HeaderList{
      display: flex;
      align-items: center;
      width: 1380px;
      height: 100%;
      
      margin: 0 auto;

      > .logo{
        margin-left: 8px;
        margin-right: 47px;
      }

      > span{
        > a{
          color: black;
          font-size: 17px;
          margin-left: 14px;
          font-weight: bold;
          text-decoration: none;
        }
      }
      > a{
        color: black;
        font-size: 17px;
        margin-left: 47px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
  > .container{
    width: 100vw;
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
export default class HomeView extends Vue {}
</script>
