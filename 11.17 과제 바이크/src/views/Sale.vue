<template>
  <div :class="$style.index">
    <div :class="$style.saleContainer" v-if="productsArray.length >= 0">
      <div :class="$style.saleContents">
        <div :class="$style.saleList"  v-for="(item, index) in productsArray" :key="index">
          <router-link to="/info">
            <img :class="$style.bikeImage" v-on:click="infoChange(productsArray[index].id)" :src= "item.thumbnail">
          </router-link>
          <img :class="$style.heart" v-if="bikeHeart == null || !bikeHeart[productsArray[index].id]" v-on:click="likeBike(productsArray[index].id)" :src="require('@/assets/EmptiedHeart.png')">
          <img :class="$style.heart" v-if="bikeHeart[productsArray[index].id]" v-on:click="likeBike(productsArray[index].id)" :src="require('@/assets/Heart.png')">
          <span :class="$style.bikeName">{{item.name}}</span>
          <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
  > .saleContainer {
    width: 100%;
    min-width: 1280px;
    height: 686px;
    padding-top: 118px;

    > .saleContents {
      display: flex;
      flex-wrap: wrap;
      width: 1280px;
      height: 686px;
      text-align: center;
      margin: 0 auto;

      > .saleList{
        display: flex;
        flex-wrap: wrap;
        width: 200px;
        text-align: center;
        margin-top: 80px;
        margin-left: 40px;
        padding: 5px;
        position: relative;
        
        > a {
          > .bikeImage {
            height: 200px;
            border-radius: 30px;
            cursor: pointer;
          }
        }

        > .heart {
          width: 24px;
          height: 24px;
          position: absolute;
          margin-left: 160px;
          margin-top: 160px;
          cursor: pointer;

          z-index: 1;
        }

        > span {
          width: 100%;
          font-size: 14px;
          margin-top: 5px;
        }

        > .bikeName {
          font-weight: bold;
        }
      }
    }
  }
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyJsonFile from '@/assets/products.json'

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Sale extends Vue {
  infoID?: any
  productsArray: any = []

  bikeHeart: any = {}
  
  mounted() {
    this.productsArray = MyJsonFile.products

    this.bikeHeart = this.$store.getters.getHeart
  }

  likeBike(a: any) {
    if(this.bikeHeart == null) {
      this.bikeHeart[a] = false
    }
    else {
      this.bikeHeart[a] = !this.bikeHeart[a]
    }

    this.$store.commit("setHeart", this.bikeHeart)
    this.$forceUpdate()
  }

  infoChange(b: any) {
    this.infoID = b 

    this.$store.commit("setInfo", this.infoID)
  }
}
</script>
