<template>
    <div :class="$style.index">    
        <div :class="$style.container">
        <span :class="$style.spanAdmin">Admin</span>
        <span :class="$style.spanSettings">운영 설정</span>
        </div>
    </div>
</template>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {
  
    > .container {
        width: 100%;

        padding-top: 56px;
        padding-left: 37px;

        @include mobile {
            min-height: 100vh;

            overflow: scroll;
        }

        span {
            display: block;        
            
            font-family: sans-serif;
        }

        > .spanAdmin {
            padding-top: 35px;

            font-size: 15px;
            
            color: #333333;
        }

        > .spanSettings {
            font-size: 24px;
            font-weight: bold;
            
            color: #111111;
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