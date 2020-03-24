<template>
    <div class='choseWarp'>
        <div class='tit'><span>精选推荐</span></div>
        <ul>
            <li v-for='item in choseArr[0].productDetail' :key ='item.uuid'>
                <div class='office_goods_img'>
                        <img :src="item.imgurl" alt="">
                </div>
                <p class='office_goods_desc'>{{item.productName}}</p>
                <span class='office_price'>￥{{item.oldPrice}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'chosegoods',
    data(){
        return {
            choseArr:[{
                productDetail:[]
            }]
        }
    },
    created(){
        axios.get('http://qstscoa.qstjt.cn/h5web/index').then(res=>{
            this.choseArr =JSON.parse(res.data.data)
            // console.log(this.choseArr)
            this.choseArr = this.choseArr.heatSingel
            // console.log(this.choseArr[0].productDetail)
        })
    }

}
</script>

<style lang="less" scoped>
    .choseWarp {
        background-color: #fff;
        padding: 0.1rem 0;
        .tit{
            color: #999;
            font-size: .18rem;
            text-align: center;
            padding: 0.1rem 0;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            li{
               width: 33%;
               padding: 0.1rem;
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