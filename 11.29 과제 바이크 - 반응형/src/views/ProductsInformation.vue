<template>
  <div :class="$style.index">
    <div :class="$style.infoContainer" v-if="isPageLoaded()">
      <div :class="$style.infoContents" >
        <div :class="$style.infoImage">
          <img :class="$style.bikeImage" :src="showingBike.thumbnail">
          <img :class="$style.heart" v-if="!bikeHeart[infoID]" v-on:click="likeBike(infoID)" :src="require('@/assets/EmptiedHeart.png')">
          <img :class="$style.heart" v-else v-on:click="likeBike(infoID)" :src="require('@/assets/Heart.png')">
        </div>
        <div :class="$style.information">
          <span :class="$style.bikeName">{{showingBike.name}}</span>
          <span :class="$style.bikeDate">{{showingBike.date}}</span>
          <span :class="$style.bikePrice">{{showingBike.price}}원</span>
          <span :class="$style.bikeContents">{{showingBike.contents}}</span>
        </div>
      </div>
    </div>
    <div v-else>
      Loading
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
@import '@/assets/utils.scss';

.index {
  > .infoContainer {
    width: 100%;
    min-width: 1280px;
    height: 686px;
    padding-top: 118px;

    @include mobile {
      min-width: initial;
      height: auto;
      padding-top: 0;
    }

    > .infoContents {
      display: flex;
      flex-wrap: wrap;
      width: 1280px;
      height: 100%;
      text-align: center;
      margin: 0 auto;

      @include mobile {
        display: block;
        width: 100%;
        height: auto;
      }

      > .infoImage{
        display: flex;
        width: 400px;
        margin-top: 80px;
        margin-left: 45px;
        position: relative;

        @include mobile {
          display: block;
          width: 100%;
          margin: 0px;
          margin-top: 10px;
        }


        > .bikeImage {
          width: 100%;
          height: 400px;

          @include mobile {
            height: 100%;
          }
        }

        > .heart {
          width: 24px;
          height: 24px;
          position: absolute;
          margin-left: 360px;
          margin-top: 360px;
          cursor: pointer;

          z-index: 1;

          @include mobile {
            width: 30px;
            height: 30px;
            right: 0;
            bottom: 0;
            margin-bottom: 20px;
            margin-right: 20px;
          }
        }
      }

      > .information {
        width: 750px;
        height: 686px;
        text-align: left;
        margin-top: 83px;
        margin-left: 53px;

        @include mobile {
          width: 100%;
          height: auto;
          margin-top: 19px;
          margin-left: 19px;
        }

        > span {
          display: inline-block;
        }
        > .bikeName {
          width: 100%;
          font-weight: bold;
          font-size: 48px;

          @include mobile {
            font-size: 28px;
          }
        }
        
        > .bikeDate {
          width: 100%;
          font-size: 24px;
          margin-top: 10px;
          color: #454545;

          @include mobile {
            font-size: 15px;
            margin-top: 5px;
          }
        }

        > .bikePrice {
          width: 70%;
          font-size: 32px;
          margin-top: 44px;

          @include mobile {
            font-size: 18px;
            margin-top: 9px;
          }
        }

        > .bikeContents {
          width: 396px;
          font-size: 15px;
          margin-top: 29px;

          white-space: pre-wrap;
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
  bikeHeart: any = {  }
  showingBike: any;
  
  mounted() {
    this.productsArray = MyJsonFile.products

    this.bikeHeart = this.$store.getters.getHeart

    this.infoID = this.$store.getters.getInfo

    this.showBike(this.infoID)
    console.log(this.infoID)
  }

  isPageLoaded() {
    return this.infoID != null
  }

  beforeDestroy() {
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

  showBike(id: any) {
    for(var i=0; i<this.productsArray.length; i++ ) {
      if (this.productsArray[i].id == this.infoID) {
        this.showingBike = this.productsArray[i]
        break
      }
    }
    this.$forceUpdate()
  }
}
</script>
