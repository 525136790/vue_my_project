<template>
    <div>
        <div class="officeWarp" v-for='(item,index) in goodsArr.floorList' :key ='item.index'>
            <div class='tit'>
                <h3>{{item.floorName}}</h3>
                <router-link :to="'/more/'+item.compUuid" class='more' tag='span'>更多好货<i></i></router-link>
            </div>
            <ul class='office_item' >
                <router-link :to ="'/goodsdesc/'+list.uuid" tag='li' class='office_list' v-for ='list in item.productDetail' :key ='list.uuid'>
                    <div class='office_goods_img'>
                        <img :src="list.imgurl" alt="">
                    </div>
                    <p class='office_goods_desc'>{{list.productName}}</p>
                    <span class='office_price'>￥{{list.oldPrice}}</span>
                </router-link>
            </ul>
            <div>
                <img :src="'http://qstscoa.qstjt.cn/h5web/api/h5/image/'+item.adImgurl" width='100%'alt="">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            goodsArr:[]
        }
    },
    created(){
        // axios.get('/js/homegoodsitem.json').then(res=>{
        // this.goodsArr = res.data
        axios.get('http://qstscoa.qstjt.cn/h5web/index').then(res=>{
            this.goodsArr =JSON.parse(res.data.data)
            // console.log(this.goodsArr)
        })
    }
}
</script>

<style lang='less' scoped>
    .officeWarp{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 0.2rem;
    .tit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        h3{
            line-height: 150%;
            font-size:0.16rem;
            position: relative;
            border-left: 0.03rem solid rgb(56, 197, 204);
            padding: 0 10px;
        }
        .more {
            display: flex;
            align-items: center;
        }
        .more i{
            width: 0.13rem;
            height: 0.13rem;
            display: inline-block;
            margin-left: 0.1rem;
            background:url(../../assets/img/home/reight_mor.png) no-repeat ;
            background-size:80% 80% ;
        }
    }
    .office_item{
        display: flex;
        flex-wrap: wrap;
        .office_list{
            width: 50%;
            padding: 15px;
            box-sizing: border-box;
            img {
                width: 100%;
            }
            .office_goods_desc{
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 0.4rem;
                overflow: hidden;
                word-break: break-all;
                color: #4d4d4d;
            }
            .office_price{
                display: inline-block;
                font-weight: 500;
                line-height: 0.15rem;
                color: #e72828;
            }
        }
    }

}
</style>