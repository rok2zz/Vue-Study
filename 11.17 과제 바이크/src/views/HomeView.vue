<template>
  <div :class="$style.index">
    <div :class="$style.homeContainer">
      <Rectangle/>
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
  > .homeContainer {
    display: flex;
    width: 100%;
    min-width: 1280px;
    height: 804px;
    background-image: url('@/assets/motorcycle.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Rectangle from '@/components/Rectangle.vue';


@Component({
  components: {
    Rectangle
  },
})
export default class HomeView extends Vue {}
</script>
