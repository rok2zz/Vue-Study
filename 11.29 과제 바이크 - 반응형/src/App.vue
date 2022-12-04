
<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.headContainer">
				<router-link to="/" :class="$style.logo">
					<img :src="require('@/assets/HeaderLogo.png')" />
				</router-link>
			</div>
			<router-view :class="$style.view" />
		</div>
		<div :class="$style.menuContainer">
			<router-link to="/bi">BI</router-link>
			<router-link to="/sale">중고매물보기</router-link>
			<router-link to="/download">앱 다운로드</router-link>
		</div>

		<div :class="$style.footerContainer">
			<div :class="$style.footer">
				<div :class="$style.leftFooter">
					<img :src="require('@/assets/FooterLogo.png')" />
				</div>
				<div :class="$style.rightFooter">
					<span :class="$style.bigFooter">
						(C) 2022 by BIKICK, ALL Rights Reserved. <br />
						<p :class="$style.smallFooter">
							커뮤니티의 모든 이용 권리는 바이킥에게 있으며,
							저작권의 겨우 각 게시물 저작자에게 있습니다. <br />
							커뮤니티 약관 위반 시 이용약관에 따라 추가 제재 및
							법적 조치가 진행될 수 있습니다.
						</p>
					</span>
				</div>
			</div>
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
	width: 100%;
	min-width: 1280px;

	@include mobile {
		min-width: initial;
	}

	> .container {
		display: flex;
		width: 100%;
		height: 804px;
		position: relative;

		@include mobile {
			display: block;
			height: auto;
		}

		> .headContainer {
			display: flex;
			width: 100%;
			height: 118px;
			background-color: rgb(255, 255, 255, 0.3);
			align-items: center;
			margin: 0 auto;
			z-index: 1;

			@include mobile {
				display: block;
				height: 68px;
				text-align: center;
			}

			> .logo {
				margin: 0 auto;

				@include mobile {
					text-align: center;
				}

				> img {
					@include mobile {
						width: 115px;
						object-fit: contain;
						padding-top: 17px;
					}
				}
			}
		}

		> .view {
			width: 100%;
			height: 804px;
			position: absolute;

			@include mobile {
				position: initial;
				height: auto;
			}
		}
	}
	> .menuContainer {
		display: flex;
		width: 441px;
		font-size: 18px;
		text-align: center;
		margin: 0 auto;
		margin-top: 77px;
		margin-bottom: 49px;

		@include mobile {
			width: 100%;
		}

		> a {
			width: (100% / 3);
			font-size: 18px;
			color: #333333;
			text-decoration: none;
		}

		:global {
			.router-link-exact-active {
				color: black;
				font-weight: bold;
			}
		}
	}

	> .footerContainer {
		display: flex;
		width: 100%;
		height: 120px;
		background-color: #eeeeee;
		margin: 0 auto;

		@include mobile {
			display: block;
		}

		> .footer {
			display: flex;
			align-items: center;
			margin: 0 auto;

			@include mobile {
				display: initial;
				text-align: center;
			}

			> .leftFooter {
				@include mobile {
					text-align: center;
					margin-left: 0px;
					margin-right: 0px;
				}

				> img {
					@include mobile {
						width: 82px;
						height: 29px;
						object-fit: contain;
						margin-top: 12px;
					}
				}
			}

			> .rightFooter {
				@include mobile {
					margin-top: 5px;
				}
				> .bigFooter {
					display: inline-block;
					font-size: 18px;
					font-weight: bold;
					color: #333333;
					margin-left: 30px;

					@include mobile {
						font-size: 13px;
						margin-left: 0px;
					}

					> .smallFooter {
						display: inline-block;
						font-size: 13px;
						font-weight: initial;
						color: #595959;

						@include mobile {
							font-size: 11px;
							margin-top: 5px;
						}
					}
				}
			}
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
	components: {
		// HelloWorld,
	},
})
export default class Sale extends Vue {}
</script>
