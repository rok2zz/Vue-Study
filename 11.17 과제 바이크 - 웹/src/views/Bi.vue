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

<style lang="scss" module>
.index {
  > .biContainer {
    display: flex;
    width: 100%;
    min-width: 1280px;
    height: 686px;
    padding-top: 118px;

    > .biContents {
      width: 1280px;
      display: flex;
      align-items: center;
      margin: 0 auto;

      > .leftBiContents {
        width: 50%;
        margin-left: 130px;
      }

      > .rightBiContents {
        width: 50%;
        margin-left: 30px;

        > .biSpan {
          display: inline-block;
          color: #000000;
          font-size: 32px;

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

  mounted() {
    
  }
}
</script>
