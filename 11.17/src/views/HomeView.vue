<template>
  <div :class="$style.index">
    {{mySavedNumber}}
  </div>
</template>

<style lang="scss" module>
.index {
  
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    // HelloWorld,
  },
})
export default class HomeView extends Vue {
  mySavedNumber: number = 0

  intervalTimer?: number

  mounted() {
    this.intervalTimer = setInterval(this.increaseTimerNumber,100)

    this.mySavedNumber = this.$store.getters.getMyNumber
  }

  beforeDestroy() {
    clearInterval(this.intervalTimer)

    this.$store.commit("setMyNumber", this.mySavedNumber)
  }

  increaseTimerNumber() {
    this,this.mySavedNumber += 1
    console.log(this,this.mySavedNumber)
  }

}
</script>
