<template>
  <div :class="$style.index">
    <div :class="$style.homeContainer">
      <Rectangle/>
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
  > .homeContainer {
    display: flex;
    width: 100%;
    min-width: 1280px;
    height: 804px;
    background-image: url('@/assets/motorcycle.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @include mobile {
      display: block;
      min-width: initial;
      height: auto;

    }
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
