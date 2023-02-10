<template>
	<view>
		<view class="case" v-for="(item,index) in caseList" :key="index">
			<text>{{item.title}}</text>
			<view class="content">
				{{item.content}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				caseList:[]
			};
		},
		mounted() {
			uniCloud.callFunction({
				name:'caseFunction',
				data:{}
			}).then(res=>{
				console.log(res);
			}).catch(err=>{
				console.error(err)
			})
		}
	}
</script>

<style lang="scss">

</style>
