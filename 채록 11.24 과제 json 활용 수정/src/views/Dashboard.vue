<template>
	<div :class="$style.index">
		<div
			:class="$style.nonLogin"
			v-if="!loginCheck"
			v-bind="$router.push('/')"
		></div>

		<div :class="$style.container" v-else>
			<span :class="$style.spanDate">2022.11.16</span>
			<span :class="$style.spanDashboard">Analysis Data</span>
			<img :src="require('@/assets/graph_1.png')" />
			<img :src="require('@/assets/graph_2.png')" />
		</div>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
<style lang="scss" module>
.index {
	> .container {
		width: 100%;
		margin-left: 37px;

		span {
			width: 100%;
			display: inline-block;
			font-family: sans-serif;
		}

		img {
			margin-top: 10px;
			margin-bottom: 60px;
		}
		> .spanDate {
			color: #333333;
			font-size: 15px;
			margin-top: 35px;
		}

		> .spanDashboard {
			color: #111111;
			font-size: 24px;
			font-weight: bold;
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {
		// HelloWorld,
	},
})
export default class HomeView extends Vue {
	checkHistory?: string;
	loginCheck: boolean = this.$store.getters.getLoginCheck;

	mounted() {
		this.checkHistory = this.$store.getters.getCheckHistory;
	}

	beforeDestroy() {
		this.checkHistory = "dashboard";
		this.$store.commit("setCheckHistory", this.checkHistory);
	}
}
</script>
