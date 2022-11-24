<template>
  <div :class="$style.index">
    <div :class="$style.container">
      <div :class="$style.leftContainer">
        <div :class="$style.logo">웹사이트 로고</div>
        
        <router-link to="/explane">웹사이트 설명</router-link>
        <router-link to="/home">홈</router-link>

        <div :class="$style.MenuButton" v-on:click="MenuButton">
          <div v-if="menu">관리 메뉴 펼치기</div>
          <div v-else>관리 메뉴 접기</div>
        </div>
        <div v-if="!menu">
          <router-link to="/management">회원 관리</router-link>
          <router-link to="/list">회원 목록</router-link>
        </div>
      </div>
      <div :class="$style.rightContainer">
        <router-view />
		<div :class="$style.footer">웹사이트 푸터 내용</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
  > .container {
    border-bottom: 1px solid #ccc;
	min-height: 100vh;
    display: flex;
    > .leftContainer {
		background-color: rgb(229, 205, 175);
		width: 300px;
		

		padding: 12px;

		border-right: 1px solid #ccc;

		text-align: right;
      > .logo {
        font-size: 32px;
        font-weight: bold;
		height: 40px;
      }
      > .MenuButton {
        font-size: 13px;
        text-decoration: none;
		font-weight: bold;

        padding-top: 6px;
        padding-bottom: 6px;

        color: rgba(134, 123, 123, 0.692);
      }

      > .MenuButton:hover {
        background-color: #efefef;
      }
      > a {
        display: block;

        font-size: 20px;
        text-decoration: none;

        padding-top: 6px;
        padding-bottom: 6px;

        color: rgba(134, 123, 123, 0.692);
		
		margin-bottom: 100px;
      }
      > a:hover {
        background-color: #efefef;
      }
	  > div{
		> a {
			font-weight: bold;
			display: block;

			font-size: 16px;
			text-decoration: none;

			padding-top: 6px;
			padding-bottom: 6px;

			color: rgba(134, 123, 123, 0.692);
		}
		> a:hover {
			background-color: #efefef;
		}
	  }
    }
    > .rightContainer {
      width: calc(100% - 300px);

	  position:relative;
	  > .footer{
		width: 100%;
		background: rgba(65, 60, 60, 0.49);
		height: 70px;
		font-size: 20px;
		color: rgb(250, 250, 250);
		padding: 20px;

		position: absolute;
		bottom: 0px;
	  }
    }
  }
}
</style>

<style>
html,body {
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomeView extends Vue {
  menu: boolean = true;

  MenuButton() {
    this.menu = !this.menu;
  }
}
</script>