<template>
    <div :class="$style.index">
        <div :class="$style.container">
			<span :class="$style.spanDate">2022.11.16</span>
			<span :class="$style.spanDashboard">Analysis Data</span>
			<img :src="require('@/assets/graph_1.png')">
			<img :src="require('@/assets/graph_2.png')">
        </div>
    </div>
</template>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {

	> .container {
		width: 100%;

		padding-left: 37px;
		padding-right: 37px;

		@include mobile {
			padding-top: 56px;
		}

		span {
			width: 100%;

			display: inline-block;

			font-family: sans-serif;
		}

		img {
			width: 100%;
			display: block;

			padding-top: 10px;
			padding-bottom: 60px;
		}

		> .spanDate {
			padding-top: 35px;

			font-size: 15px;

			color: #333333;
		}

		> .spanDashboard {
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
		this.checkHistory = "dashboard"

		this.$store.commit('setCheckHistory', this.checkHistory)
	}
}
</script>
