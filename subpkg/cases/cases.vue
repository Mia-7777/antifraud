<template>
	<view>
		<view class="title">
			{{title}}
		</view>
		<view class="content">
			{{content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				case:{},
				title:'',
				content:''
			};
		},
		onLoad: function (option) {
			this.case = JSON.parse(option.item);
			this.title=this.case.title
			this.content=this.case.content
		}
	}
</script>

<style lang="scss">
	view{
		margin: 20rpx;
		padding: 5rpx;
		background-color: #fff;
		.title{
			text-align: center;
		}
		.content{
			font-size: 26rpx;
			
		}
	}
</style>
