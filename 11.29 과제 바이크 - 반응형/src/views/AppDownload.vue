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

<style>
 * {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
 }
</style>

<style lang="scss" module>
@import "@/assets/utils.scss";

.index {
  > .downloadContainer {
    width: 100%;
    min-width: 1280px;
    height: 686px;
    padding-top: 118px;

    @include mobile {
      min-width: initial;
      height: auto;
      padding-top: 80px;
    }

    > .downloadContents {
      width: 100%;
      height: 100%;
      text-align: center;
      margin: 0 auto;

      @include mobile {
        width: 350px;
        text-align: center;

      }
      > img {
        margin-top: 182px;

        @include mobile {
          width: 324px;
          margin-top: 0px;
          object-fit: contain;
        }
      }

      > .downloadText {
        font-weight: bold;
        font-size: 42px;
        font-family: sans-serif;

        margin-top: 45px;
        margin-bottom: 84px;

        @include mobile {
          width: 350px;
          font-size: 38px;
          margin-top: 30px;
          margin-bottom: 42px;
        }
      }

      > .downloadButton {
        display: flex;
        width: 578px;
        margin: 0 auto;

        @include mobile {
          display: block;
          width: 100%;
          text-align: center;
        }

        > a {
          width: 50%;

          @include mobile {
            display: block;
            width: 100%;
          }

          > img {

            @include mobile {
              margin-top: 17px;
            }
          }
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
