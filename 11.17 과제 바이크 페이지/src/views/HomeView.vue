<template>
  <div :class="$style.index">
    
  </div>
</template>

<style lang="scss" module>
.index {
  display: flex;
  width: 100%;
  background-image: url('@/assets/motorcycle.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
