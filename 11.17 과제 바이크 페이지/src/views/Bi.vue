<template>
  <div :class="$style.index">
    <div :class="$style.biContainer">
      <div :class="$style.lrBiContainer">
        <div :class="$style.lBiContainer">
          <img :class="$style.bigLogo" :src="require('@/assets/BigLogo.png')">
        </div>
        <div :class="$style.rBiContainer">
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

<style lang="scss" module>
.index {
  width: 100%;

  > .biContainer {
    display: flex;
    width: 1280px;
    height: 686px;
    align-items: center;
    padding-top: 118px;
    margin: 0 auto;

    > .lrBiContainer {
      display: flex;

      > .lBiContainer {
      width: 50%;

        > img {
          margin-left: 120px;
        }
      }

      > .rBiContainer {
        width: 50%;

        > .biSpan {
          display: inline-block;
          color: #000000;
          font-size: 32px;
          margin-left: 150px;

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
export default class Bi extends Vue {}
</script>
