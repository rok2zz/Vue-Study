<template>
  <div :class="$style.index">
    홈페이지
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

  },
})
export default class HomeView extends Vue {}
</script>
