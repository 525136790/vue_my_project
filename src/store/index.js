import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goodsList: [],
		goodsItem: []
	},
	mutations: {
		async addCarts(state, id) {
			var obj = []
			//1.id在gooditem中对应的对象 肯定存在的
			await axios.get('http://qstscoa.qstjt.cn/h5web/index').then(res=>{
				this.goods =JSON.parse(res.data.data)
				obj = this.goods.floorList;
				for( var i = 0;i < obj.length;i++){
						for(var j = 0 ;j < obj[i].productDetail.length;j++){
							if(obj[i].productDetail[j].uuid == id){
								state.goodsItem = obj[i].productDetail[j]
								break
							}
						}
					}
				let cartObj = state.goodsList.find((item) => item.uuid == id)
				if (cartObj) {
					cartObj.count++
				} else {
					state.goodsList.push({
						...state.goodsItem,
						count: 1
					})

				}
			})
		},
		countsub(state,id){
			let cartObj = state.goodsList.find((item)=>item.uuid==id);//找到购物车中对应的商品
			cartObj.count--
			// if(cartObj.count == 0){
			// 	let index = state.goodsList.findIndex(item=>item.id==id);
			// 	state.goodsList.splice(index,1);
			// }
		},
		countadd(state,id){//数量增加
			let cartObj = state.goodsList.find((item)=>item.uuid==id);//找到购物车中对应的商品
			cartObj.count++
		},
	},
	actions: {
	},
	modules: {
	},
	getters:{
		// 总数
		totalcount(state){
			let sum = 0;
			state.goodsList.map((item)=>{
				sum +=item.count
			})
			return sum
		},
		// 总价
		totalprice(state){
			let sum = 0;
			state.goodsList.map((item)=>{
				sum +=item.count*item.oldPrice
			})
			return sum
		}
	}
})
