<template>
    <div class='goodsDesc'>
        <Headernav :active = 1></Headernav>
        <div>
            <img width="100%" :src="goods.imgurl" alt="">

        </div>
        <div class='desc'>
            <p>{{goods.productName}}</p>
            <span class='price'>￥{{goods.oldPrice}}</span>
        </div>
        <button class='addcarts' @click ='$store.commit("addCarts",goods.uuid)'>加入购物车</button>
    </div>
</template>

<script>
import axios from 'axios'
import Headernav from '../../../components/heardernav'
export default {
  
    name:'goodsdesc',
    data(){
        return {
            goods:{}
        }
    },
    created(){
        var id = this.$route.params.id
        // axios.get('/js/homegoodsitem.json').then(res=>{
        //     this.goods = res.data.find(item =>{
        //         return item.id == id 
        //     })
        // })
        let obj =[]
        axios.get('http://qstscoa.qstjt.cn/h5web/index').then(res=>{
            this.goods =JSON.parse(res.data.data)
            obj = this.goods.floorList;
            for( var i = 0;i < obj.length;i++){
                    for(var j = 0 ;j < obj[i].productDetail.length;j++){
                        if(obj[i].productDetail[j].uuid == id){
                            this.goods = obj[i].productDetail[j]
                            break
                        }
                    }
                }
             console.log( this.goods)
        })
    },
    components:{
        Headernav
    }
}
</script>

 <style lang="less" scoped>
    .desc{
        p{
            font-size: .18rem;
            color: #333;
            line-height: 0.25rem;
            padding-right: .15rem;
        }
        .price{
            color: #cc3838;
            font-size: .2rem;
            font-weight: 600;
        }
    }
    button.addcarts{
        font-size: .2rem;
        line-height: 0.3rem;
        height: 0.3rem;
        width: 1.5rem;
        padding: 0;
        text-align: center;
        border-radius: 39px;
        margin: 0;
        color: #fff;
        background-color: #cc3838;
        border-color: #cc3838;
    }
 </style>