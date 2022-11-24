<template>
  <div :class="$style.index">
    <div :class="$style.main">
      <div>        
        <span>HOME > 모바일 > 스마트폰 > 모두 보기 > 갤럭시 S22 자급제</span>
      </div>
      <div :class="$style.container">
        <div :class="$style.lContaianer">
          <img v-on:click="imageNum = 1" :src="require('@/assets/Frame 23.png')">
          <img v-on:click="imageNum = 2" :src="require('@/assets/Frame 24.png')">
          <img v-on:click="imageNum = 3" :src="require('@/assets/Frame 25.png')">
          <img v-on:click="imageNum = 4" :src="require('@/assets/Frame 26.png')">
          <img v-on:click="imageNum = 5" :src="require('@/assets/Frame 27.png')">
          <img v-on:click="imageNum = 6" :src="require('@/assets/Frame 28.png')">
        </div>

        <div :class="$style.cContainer">
          <img v-if="imageNum == 2" :src="require('@/assets/image 20.png')">
          <img v-else-if="imageNum == 3" :src="require('@/assets/image 21.png')">
          <img v-else-if="imageNum == 4" :src="require('@/assets/image 22.png')">
          <img v-else-if="imageNum == 5" :src="require('@/assets/image 23.png')">
          <img v-else-if="imageNum == 6" :src="require('@/assets/image 24.png')">
          <img v-else :src="require('@/assets/image 11.png')">

        </div>

        <div :class="$style.rContainer">
          <span :class="$style.s22">갤럭시 S22 자급제</span>
          <p>SM-S901NLVEKOO</p>
          <span :class="$style.sPrice">판매가</span>          
          <span :class="$style.sPrice2">999,900원</span>

          <span :class="$style.bPrice">
            혜택가 
            <img :src="require('@/assets/image 11-1.png')">
          </span>
          
          <span :class="$style.price">{{price}} 원</span>

          <div :class="$style.box">
            <span>색상</span>
            <span :class="$style.color">{{color}}</span>
            <img v-if="check" v-on:click="colorImage" :src="require('@/assets/chevron-down.png')">
            <img v-if="!check" v-on:click="colorImage" :src="require('@/assets/chevron-down-1.png')">
            <div v-if="check">
              <button v-on:click="colorNum = 1, colorChange()" :class="$style.purple"></button>
              <button v-on:click="colorNum = 2, colorChange()" :class="$style.pink"></button>
              <button v-on:click="colorNum = 3, colorChange()" :class="$style.khaki"></button>
              <button v-on:click="colorNum = 4, colorChange()" :class="$style.black"></button>
              <button v-on:click="colorNum = 5, colorChange()" :class="$style.white"></button>
            </div>

            <span>메모리</span>
            <span :class="$style.memory">256 GB</span>
            <span>수량</span>
            <span :class="$style.btnSpan">
              <button v-on:click="minus(), calc()" :class="$style.qBtn">-</button>
              <button :class="$style.qBtn">{{num}}</button>
              <button v-on:click="plus(), calc()" :class="$style.qBtn">+</button>
            </span>
            
          </div>
          
          <span :class="$style.ePrice">혜택가</span>
          <span :class="$style.price">{{price}} 원</span>

          <hr>

          <div>
            <button :class="$style.btn">선물하기</button>
            <button :class="$style.btn">장바구니</button>
            <button :class="$style.btn2">바로구매</button>
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.footer">
      <div :class="$style.FixedFooter">
        <span>갤럭시 S22 자급제</span>
        <button>바로구매</button>
      </div>
    </div>

    <div :class="$style.ads">
      <img :src="require('@/assets/image 20-1.png')">
      <img :src="require('@/assets/image 20-2.png')">

      <div :class="$style.ads2">
        <span>밤을 선명하게 즐기는 법 <br> 나이토그래피</span>
        <p>놀라운 기술로 완성된 전문가 수준의 카메라로 어둠 속 최고의 순간도 놓치지 마세요.<br>
           더 큰 픽셀로 더 많은 빛을 흡수하고, 슈퍼 클리어 글래스로 빛반사를 최소화해 대낮에 찍은 듯<br>
           선명하고 디테일이 생생하게 살아있는 밤 사진을 찍을 수 있답니다.</p>
        <img :src="require('@/assets/image 17.png')">
        <p>* 이해를 돕기 위해 연출된 이미지이며, 실제 UI는 다를 수 있습니다. <br>
           * 후면 카메라에 한합니다.</p>

        <span>세상의 모든 디테일까지 사랑하는 <br> 당신을 위해</span>
        <p>그저 찍기만 했을 뿐인데. 갤러리에는 선명하고 디테일이 살아있는 작품 사진들이 넘쳐날 거예요. <br>
           가변형 픽셀이 조도에 맞춰 픽셀 모드를 전환해줘 보다 밝고 선명하게 찍을 수 있으니까요. <br>
           또한 디테일 향상 기능을 활성화하면 그림자와 하이라이트를 조절해 사진을 업그레이드해줍니다.</p>
        <img :src="require('@/assets/image 17-1.png')">
        <p>* 이해를 돕기 위해 연출된 이미지이며, 실제 UI는 다를 수 있습니다. <br>
           * 후면 카메라에 한합니다.</p>
      </div>

      <div :class="$style.lrads">
        <div :class="$style.lads">
          <img :src="require('@/assets/image 20-3.png')">
          <span>점점 닮아가는 <br> PC와 스마트폰</span>
          <p>스마트폰에서 쓰던 앱을 PC에서 그대로 확인하는 것, <br>
             생각보다 훨씬 쉽답니다. 최근 사용한 세 개의 앱을 <br>
             불러올 수도 있으니 작업이 훨씬 빨라지겠죠?</p>
          <p :class="$style.sp">* 기능 및 앱 사용여부는 국가 및 지역에 따라 다를 수 있습니다 . Miracast를 지원하는 스마트 TV에서만 사용할 수 있습니다. <br>
            Smart View > 설정 > 실험실 > 모든 앱 캐스트 허용으로 설정시, <br>
            모든 앱을 TV에 앱 캐스트할 수 있으나 일부 앱은 지원하지 않을 수 있습니다. <br>
            * One UI 3.1.1 이상의 갤럭시 S, Z, N 시리즈 모델과 Windows 10 20H1(2004년) 이상의 PC에서만 지원 가능합니다. <br>
            기능 및 앱 사용은 국가 및 지역에 따라 다를 수 있습니다.
            * 스마트폰의 "Windows와 연결"과 PC의 "사용자 휴대폰"을 통해 갤럭시 스마트폰을 Windows 10 PC에 연결하고, <br>
            동일한 Microsoft 계정에 로그인하는 것을 포함한 설정을 따라야 합니다. "Windows와 연결"은 갤럭시 기기에 선탑재되어 있습니다.
            일부 기능은 갤럭시 스마트폰을 PC와 동일한 Wi-Fi 네트워크에 켜고 연결해야 사용할 수 있습니다. <br>
            * 이해를 돕기 위해 연출된 이미지입니다. 실제 UI는 다를 수 있습니다. <br>
            * 갤럭시 북 외관 디자인과 사용성은 국가별로 다를 수 있습니다.</p>
        </div>
        <div :class="$style.rads">
          <span>터치 한 번으로 <br> 옮기는 예술작품</span>
          <p>촬영한 동영상과 사진, 그리고 파일까지 퀵 쉐어를 사용해서<br>
             쉽고 빠르게 공유해 보세요.</p>
          <p :class="$style.sp">* 이해를 돕기 위해 연출된 이미지입니다. 실제 UI는 다를 수 있습니다. <br>
            * 퀵 쉐어는 안드로이드 OS 버전 10.0(Q)과 One UI 2.1 이상의 갤럭시 스마트폰과 태블릿에서 사용 가능합니다. <br>
            노트북의 경우 갤럭시 북 Ion, Ion2, Flex, Flex α, Flex2, Flex2 α, 2021년 5월 이후 출시된 갤럭시 북 S, <br>
            2020년 이후 출시된 삼성 노트북 오디세이, Plus, Plus2에서 이용할 수 있습니다.</p>
        <img :src="require('@/assets/image 20-4.png')"></div>
      </div>
      <span>갤럭시 S22 시리즈 비교하기</span>
      <img :src="require('@/assets/image 20-5.png')" :class="$style.img2">
    </div>
  </div>
</template>

<style lang="scss" module>
.index {
  > .main{
    width: 100vw;
    background-color: #e6e6e6;

    > div{
      width: 1380px;
      margin: 0 auto;

      > span{
        display: inline-block;
        font-size: 15px;
        color: #999999;
        margin-top: 30px;
        margin-bottom: 50px;
        margin-left: 8px;
      }
    }
    > .container{
      display: flex;
      width: 1380px;
      margin: 0 auto;

      > .lContaianer{
        width: 120px;
        margin-right: 50px;
        > img{
          margin-bottom: 20px;
          cursor: pointer;
        }
        > img:hover{
          border: 3px solid #333333;
          border-radius: 30px;
        }
      }

      > .cContainer{
        width: 700px;
      }

      > .rContainer{
        width: 660px;
        height: 700px;
        background-color: white;
        border-radius: 30px;
        padding: 30px;

        > .s22{
          display: inline-block;
          font-size: 30px;
          font-weight: bold;
          margin-top: 10px;
          margin-bottom: 10px;
          margin-right: 200px;
        }

        > p{  
          font-size: 16px;
          color: #666666;
          margin-bottom: 50px;
        }
        > .sPrice{
          width: 50%;
          display: inline-block;
          font-size: 16px;
          color: #666666;
          margin-bottom: 20px;
        }

        > .sPrice2{
          width: 50%;
          display: inline-block;
          text-align: right;
          font-size: 16px;
          color: #666666;
          margin-bottom: 20px;
        }

        > .bPrice{
          width: 50%;
          display: inline-block;
          font-size: 16px;
          color: black;
          margin-bottom: 20px;

          > img{
            align-items: center;
            margin-left: 5px;
          }
        }
        
        > .price{
          width: 50%;
          display: inline-block;
          text-align: right;
          color: black;
          font-size: 24px;
          font-weight: bold;
        }

        > .ePrice{
          width: 50%;
          display: inline-block;
          font-size: 16px;
          color: black;
          font-weight: bold;
          margin-bottom: 20px;
        }
        > .box{
          width: 445px;
          padding: 20px;
          margin-top: 30px;
          margin-bottom: 80px;
          background-color: #eeeeee;
          border-radius: 30px;

          > span{
            display: inline-block;
            width: 50px;
            font-size: 16px;
            color: #333333;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 30px;
          }
          > .memory{
            display: inline-block;
            width: 60px;
            font-weight: bold;
            font-size: 16px;
            color: #111111;
            margin-left: 35px;
            margin-right: 280px;
          }
          > .color{
            width: 200px;
            display: inline-block;
            font-weight: bold;
            margin-left: 30px;
            margin-bottom: 10px;
            margin-right: 100px;
          }

          > img{
            cursor: pointer;
          }
          > div{
            > button{
              width: 27px;
              height: 27px;
              border: 1px solid #5352528f;
              border-radius: 100%;
              margin-bottom: 30px;
              margin-left: 10px;
              cursor: pointer;
            }
            > button:hover{
              border: 1px solid black;
            }
            > .purple{
            background-color: #BFB1D3;
            margin-left: 100px;
            }
            > .pink{
              background-color: pink;
            }
            > .khaki{
              background-color: khaki;
            }
            > .black{
              background-color: black;
            }
            > .white{
              background-color: white;
            }
          }
          > .btnSpan{
            width: 200px;
            margin-left: 30px;
            > .qBtn{
              width: 32px;
              height: 28px;
              background-color: white;
              border: 1px solid #999999;
              cursor: pointer;
            }
          }
          
        }
        > hr{
          color: #999999;
          margin-bottom: 30px;
        }
        > div{  
          > .btn{
            background-color: white;
            font-weight: bold;
            font-size: 15px;
            width: 144px;
            height: 47px;
            border-radius: 30px;
            margin-right: 15px;
            cursor: pointer;
          }

          > .btn:hover{
            background-color: black;
            color: white;
          }

          > .btn2{
            background-color: white;
            font-weight: bold;
            font-size: 15px;
            width: 144px;
            height: 47px;
            border-radius: 30px;
            cursor: pointer;
          }

          > .btn2:hover{
            background-color: black;
            color: white;
          }
        }
      }
    }
  }

  > .footer{
    width: 100vw;
    height: 120px;
    left: 0px;
    bottom: 0px;

    background-color: #333333;
    > .FixedFooter{
      display: flex;
      align-items: center;
      width: 1380px;
      height: 100%;
      
      margin: 0 auto;
      
      > span{
        font-size: 25px;
        font-weight: bold;
        padding: 10px;
        color: #ffffff;
      }

      > button{
        width: 227px;
        height: 53px;
        background-color: #2189FF;
        color: #ffffff;
        font-size: 15px;
        margin-left: 920px;
        border-radius: 30px;
      }
    }
  }
  > .ads{
    width: 1380px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    > span{
      display: inline-block;
      font-size: 60px;
      font-weight: bold;
      margin-top: 150px;
    }
    > img{
      margin-top: 30px;
    }
    > .img2{
      margin-top: 100px;
      margin-bottom: 300px;
    }
    > .ads2{
      height: 2800px;
      background-color: black;
      text-align: center;
      
      > span{
        display: inline-block;
        font-weight: bold;
        font-size: 60px;
        color: white;
        
        margin-top: 100px;
        margin-bottom: 30px;        
      }

      > p{
        margin-top: 30px;
        margin-bottom: 100px;
        font-size: 18px;
        color: white;
      }

      > img{
        width: 1380px;
      }
    }

    > .lrads{
      display: flex;
      > .lads{
        width: 50%;

        > span{
          display: inline-block;
          font-weight: bold;
          font-size: 60px;
          color: black;
          margin-left: 100px;
          margin-bottom: 30px;        
        }

        > p{
          margin-top: 30px;
          margin-bottom: 30px;
          margin-left: 100px;

          font-size: 18px;
          color: black;
        }
        > .sp{
          margin-top: 30px;
          margin-bottom: 30px;
          margin-left: 100px;

          font-size: 13px;
          color: black;
        }
      }
      > .rads{
        width: 50%;

        > span{
        display: inline-block;
        font-weight: bold;
        font-size: 60px;
        color: black;
        
        margin-top: 180px;
        margin-bottom: 30px;        
        }
        > p{
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 18px;
        color: black;
        }  

        > .sp{
          margin-top: 30px;
          margin-bottom: 30px;
          font-size: 13px;
          color: black;
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
   
  },
})
export default class HomeView extends Vue {
  price = 835900;
  num = 1;
  color = '보라 퍼플';
  colorNum = 1;
  imageNum = 1;
  check = false;

  plus(){
    this.num += 1;
  }

  minus(){
    if(this.num <=1){
      alert('1개 이하로는 선택 할 수 없습니다.')
    }
    else
      this.num -= 1;
  }

  colorChange(){
    if(this.colorNum == 2){
      this.color = '핑크';
    }
    else if(this.colorNum == 3){
      this.color = '카키'
    }
    else if(this.colorNum == 4){
      this.color = '블랙'
    }
    else if(this.colorNum == 5){
      this.color = '화이트'
    }
    else
      this.color = '보라 퍼플'
  }
  
  calc(){
    this.price = this.num*835900;
  }

  colorImage(){
    this.check = !this.check
  }
}
</script>
