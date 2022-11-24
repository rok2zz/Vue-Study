<template>
  <div :class="$style.index">
    <div :class="$style.rectangle">
      <div :class="$style.recContents">
        <div :class="$style.leftContents">
            바이킥 <br>
            <span :class="$style.whiteSpan">No.1 국내 이륜차 커뮤니티</span> 
        </div>
        <div :class="$style.rightContents">
            {{suggestionsStr}} <br>
            <span :class="$style.whiteSpan">건의 소통이 지금도 진행 중!</span>
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
  width: 100%;
  > .rectangle {
    width: 100%;
    min-width: 1280px;
    height: 804px;
    background-color: rgb(0, 0, 0, 0.5);

    > .recContents {
      display: flex;
      width: 1280px;
      height: 686px;
      padding-top: 118px;
      align-items: center;
      margin: 0 auto;

      color: white;
      font-weight: bold;
      font-size: 64px;

      > .leftContents {
        width: 50%;
        padding-left: 76px;

        > .whiteSpan {
          font-size: 32px;
        }
      }

      > .rightContents {
        width: 50%;
        padding-right: 76px;
        text-align: right;

        > .whiteSpan {
          font-size: 32px;
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
export default class Rectangle extends Vue {
  suggestionsCount: number = this.$store.getters.getSuggestionsNumber
  suggestionsStr = String(this.suggestionsCount).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  intervalTimer?: number

  mounted() {
    this.intervalTimer = setInterval(this.increaseTimerNumber,5000)

    this.suggestionsCount = this.$store.getters.getSuggestionsNumber
  }

  beforeDestroy() {
    clearInterval(this.intervalTimer)

    this.$store.commit("setSuggestionsNumber", this.suggestionsCount)
  }

  increaseTimerNumber() {
    this, this.suggestionsCount += Math.floor(Math.random() * 3)
    this.suggestionsStr = String(this.suggestionsCount).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(this, this.suggestionsCount)
  }
}
</script>
