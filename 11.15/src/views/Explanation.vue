<template>
  <div :class="$style.index">
    웹사이트 설명 페이지
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
export default class HomeView extends Vue {}
</script>
