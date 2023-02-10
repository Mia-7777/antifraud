<template>
	<view>
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
				caseList:[],
				// 页数
				pageNum:0,
				// 是否正在请求数据
				isLoading: false
			};
		},
		methods:{
			getCaseList(cb){
				// 打开节流阀  通过节流阀防止发起额外的请求
				this.isLoading = true
				uniCloud.callFunction({
					name:'caseFunction',
					data:{
						num:this.pageNum
					}
				}).then((res)=>{
					if(res.result.data.lenth=0) return uni.$showMsg('数据加载完毕！')
					this.caseList=[...this.caseList,...res.result.data]
				}).catch((err)=>{
					console.log(err)
				})
				this.isLoading = false
				// 只要数据请求完毕，就立即按需调用 cb 回调函数
				cb&&cb()
			}
		},
		mounted() {
			this.getCaseList()
		},
		onReachBottom() {
			if(this.isLoading) return
			this.pageNum++
			this.getCaseList()
		},
		onPullDownRefresh(){
			this.pageNum=0
			this.getCaseList(()=>uni.stopPullDownRefresh())
		}
	}
</script>

<style lang="scss">
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
</style>
