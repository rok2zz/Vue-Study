<template>
	<div :class="$style.index">    
		<div :class="$style.container">
			<span :class="$style.spanAdmin">Admin</span>
			<span :class="$style.spanMember">회원 관리</span>

			<div :class="$style.tableContainer">
				<table>
					<thead>
						<th>ID</th>
						<th>User ID</th>
						<th>Email</th>
						<th>Name</th>
						<th>Status</th>
						<th>RegisteredDate</th>
					</thead>
					<tbody>
						<tr v-for="(item, index) in members" :key="index">
							<td>{{ item.id }}</td>
							<td>{{ item.user_id }}</td>
							<td>{{ item.email }}</td>
							<td>{{ item.name }}</td>
							<td>{{ changeStatus(item) }}</td>
							<td>{{ changeDate(item) }}</td>
						</tr>
					</tbody>
				</table>
			</div>
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
		padding-right: 37px;

		@include mobile {
			min-height: 100vh;
		}

		span {
			width: 100%;

			display: inline-block;

			font-family: sans-serif;
		}

		> .spanAdmin {
			margin-top: 35px;

			font-size: 15px;
			
			color: #333333;
		}

		> .spanMember {
			font-size: 24px;
			font-weight: bold;

			color: #111111;
		}

		> .tableContainer {
			
			@include mobile {
				width: calc(100% + 37px * 2);
				overflow: scroll;
				padding-left: 37px;
				padding-right: 37px;
				margin-left: -37px;
			}

			table {
				width: 911px;
				height: 280px;

				text-align: left;

				margin-top: 40px;
				
				font-size: 14px;
				font-family: sans-serif;

				border: 2px solid #828282;
				border-collapse: collapse;

				color: #000000;
			
				th {
					width: 227.75px;
					height: 40px;

					padding-left: 10px;

					font-weight: bold;

					border: 2px solid #828282;

					background-color: #e5e5e5;
				}
				
				td {
					width: 152.67px;
					height: 40px;

					padding-left: 10px;

					font-size: 14px;

					border: 2px solid #828282;
								
					background-color: #ffffff;
					color: #000000;
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
    // HelloWorld,
  },
})
export default class Post extends Vue {
	checkHistory?: string
	members: any = this.$store.getters.getMembers
	contents: any = this.$store.getters.getContents
	checkID: any = {}

	mounted() {
		this.checkHistory = this.$store.getters.getCheckHistory
	}
	
	beforeDestroy() {
		this.$store.commit('setCheckHistory', "member")
	}

	changeStatus(a: any) {
		switch(a.status) {
			case "NORMAL": return "정상";
			case "PAUSED": return "정지";
			case "DELETED": return "탈퇴";
		}
	}

	changeDate(a: any) {
		var day = new Date(a.registered_date * 1000)

		var year = day.getFullYear()
		var month = day.getMonth() + 1
		var date = day.getDate() 

		if (date < 10) {
			return year + '.' + month + '.0' + date
		} else {
			return year + '.' + month + '.' + date
		}
	}
}
</script>
