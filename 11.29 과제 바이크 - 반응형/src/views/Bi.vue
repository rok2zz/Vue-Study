<template>
  <div :class="$style.index">
    <div :class="$style.biContainer">
      <div :class="$style.biContents">
        <div :class="$style.leftBiContents">
          <img :src="require('@/assets/BigLogo.png')">
        </div>
        <div :class="$style.rightBiContents">
          <span :class="$style.biSpan">이륜차의 상징인 
            <span :class="$style.boldSpan">'오토바이'</span>를 <br>심볼화하였으며 <br>
            <span :class="$style.redSpan">적색포인트</span>는 <br>
            <span :class="$style.boldSpan">'고 RPM' 및 '속도'</span>를 상징합니다.
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

  box-sizing: border-box;
 }
</style>

<style lang="scss" module>
@import "@/assets/utils.scss";

.index {
  > .biContainer {
    display: flex;
    width: 100%;
    min-width: 1280px;
    height: 686px;
    padding-top: 118px;

    @include mobile {
      display: block;
      min-width: initial;
      height: initial;
      padding-top: 170px;
      padding-bottom: 220px;
    }

    > .biContents {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0 auto;

      @include mobile {
        display: block;
      }

      > .leftBiContents {
        width: 50%;
        margin-left: 130px;
        text-align: right;
        padding-right: 80px;

        @include mobile {
          width: 100%;
          margin-left: 0px;
          padding-right: 0px;
          text-align: center;
        }

        > img {
          @include mobile {
            width: 324px;
            object-fit: contain;
          }
        }
      }

      > .rightBiContents {
        width: 50%;
        margin-left: 30px;

        @include mobile {
          width: 100%;
          margin-left: 0px;

          margin-top: 22px;
          padding: 24px;
          text-align: center;
        }

        > .biSpan {
          display: inline-block;
          color: #000000;
          font-size: 32px;

          @include mobile {
            font-size: 15px;
          }
          > .boldSpan {
            font-weight: bold;
          } 

          > .redSpan {
            font-weight: bold;
            color: #cf0000;
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
export default class Bi extends Vue {
  
}
</script>
