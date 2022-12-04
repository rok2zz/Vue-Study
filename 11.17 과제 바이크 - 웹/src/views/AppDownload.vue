<template>
  <div :class="$style.index">
    <div :class="$style.downloadContainer">
      <div :class="$style.downloadContents">
        <img :src="require('@/assets/BigLogo.png')">
        <div :class="$style.downloadText">
          "이륜차 중고거래, 커뮤니티는 바이킥"
        </div>
        <div :class="$style.downloadButton">
          <a href="https://www.apple.com/kr/app-store/">
            <img :src="require('@/assets/AppleLogo.png')">
          </a>
          <a href="http://play.google.com">
            <img :src="require('@/assets/GoogleLogo.png')">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
  > .downloadContainer {
    width: 100%;
    min-width: 1280px;
    height: 686px;
    padding-top: 118px;

    > .downloadContents {
      width: 1280px;
      height: 100%;
      text-align: center;
      margin: 0 auto;

      > img {
        margin-top: 182px;
      }
      > .downloadText {
        font-weight: bold;
        font-size: 42px;
        font-family: sans-serif;

        margin-top: 45px;
        margin-bottom: 84px;
      }

      > .downloadButton {
        display: flex;
        width: 578px;
        margin: 0 auto;

        > a {
          width: 50%;
        }

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
export default class AppDownload extends Vue {}
</script>
