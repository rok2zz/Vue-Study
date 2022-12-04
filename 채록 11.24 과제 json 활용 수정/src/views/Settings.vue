<template>
  <div :class="$style.index">
    <div :class="$style.nonLogin" v-if="!loginCheck" v-bind="$router.push('/')"></div>
    
    <div :class="$style.container" v-else>
      <span :class="$style.spanAdmin">Admin</span>
      <span :class="$style.spanSettings">운영 설정</span>
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
    width: 100%;

    span {
      width: 100%;
      display: inline-block;
      font-family: sans-serif;
      margin-left: 37px;
    }

    > .spanAdmin {
      color: #333333;
      font-size: 15px;
      margin-top: 35px;
    }

    > .spanSettings {
      color: #111111;
      font-size: 24px;
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
export default class HomeView extends Vue {
  checkHistory?: string
  loginCheck: boolean = this.$store.getters.getLoginCheck

  mounted() {
    this.checkHistory = this.$store.getters.getCheckHistory
  }
  
  beforeDestroy() {
    this.checkHistory = "settings"
    this.$store.commit('setCheckHistory', this.checkHistory)
  }
}
</script>
