<template>
	<view>
		<swiper class="swiperView" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="tip">
			<text>近期骗局</text>
			<navigator :url="'/subpkg/allCase/allCase?a=1'">查看更多</navigator>
		</view>
		<navigator :url="'/subpkg/cases/cases?item='+ JSON.stringify(item)" class="case" v-for="(item,index) in caseList" :key="index">
			<text>{{item.title}}</text>
			<view class="content">
				{{item.content}}
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [
					'/static/OIP-A.jpg',
					'/static/OIP-C.jpg'
				],
				caseList: []
			}
		},
		methods: {

		},
		mounted() {
			uniCloud.callFunction({
				name: "caseFunction",
				data: {
					num: 0
				}
			}).then((res) => {
				console.log(res);
				this.caseList = res.result.data
			}).catch((err) => {
				console.log(err)
			})
		}
	}
</script>

<style lang="scss">
	view{
		margin: 0 15rpx;
		.swiperView {
			height: 300rpx;
		
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.tip {
			font-size: 24rpx;
			color: gray;
			margin: 12rpx;
			display: flex;
			justify-content: space-between;
		}
		
		.case {
			margin: 10rpx;
			padding: 10rpx;
			background-color: #fff;
			text {
				font-size: 30rpx;
			}
		
			.content {
				font-size: 25rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}
	}
</style>
