<template>
  <div :class="$style.index">
    <div :class="$style.container">
      <div :class="$style.header">
        <router-link to="/home" :class="$style.logo">
          <img :src="require('@/assets/HeaderLogo.png')"/>
        </router-link>
      </div>
      <router-view :class="$style.view"/>
    </div>

    <div :class="$style.menuContainer">
        <router-link to="/bi">BI</router-link>
        <router-link to="/sale">중고매물보기</router-link>
        <router-link to="/download">앱 다운로드</router-link>
    </div>
    <div :class="$style.footerContainer">
      <div :class="$style.footer">
        <div :class="$style.footerContents">
          <img :src="require('@/assets/FooterLogo.png')">
          <span :class="$style.bigFooter">
            (C) 2022 by BIKICK, ALL Rights Reserved. <br>
            <p :class="$style.smallFooter">
              커뮤니티의 모든 이용 권리는 바이킥에게 있으며, 저작권의 겨우 각 게시물 저작자에게 있습니다. <br>
              커뮤니티 약관 위반 시 이용약관에 따라 추가 제재 및 법적 조치가 진행될 수 있습니다.
            </p>
          </span>
        </div>
      </div>
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
    display: flex;
    width: 100%;
    height: 804px;
    background-color: #ffffff;
    position: relative;
    
    
    > .header {
      display: flex;
      width: 1280px;
      height: 118px;
      align-items: center;
      margin: 0 auto;
      z-index: 1;

      > a {
        margin: 0 auto;
      }
    }

    > .view {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }


  > .menuContainer {
    display: flex;
    width: 441px;
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
    margin-top: 77px;
    margin-bottom: 49px;

    > a {
      width: (100% / 3);
      font-size: 18px;
      color: #333333;
      text-decoration: none;
    }
  }
  
  > .footerContainer {
    width: 100%;
    height: 120px;
    background-color: #eeeeee;

    > .footer {
      display: flex;
      width: 1280px;
      height: 120px;
      align-items: center;
      margin: 0 auto;

      > .footerContents {
        display: flex;
        margin: 0 auto;
        
        > .bigFooter {
          display: inline-block;
          font-size: 18px;
          font-weight: bold;
          color: #333333;
          margin-left: 30px;

          > .smallFooter {
            font-size: 13px;
            color: #595959;
          }
        }

        
      }
      
    }
  }
  
}
</style>

<style lang="scss">
  div {
    a {
      &.router-link-exact-active {
        color: black;
        font-weight: bold;
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
export default class HomeView extends Vue {}
</script>
