<template>
    <div>
        <Headernav :active = 1></Headernav>
        <Banner></Banner>
        <Shakynav></Shakynav>
        <div class='index_act'>
            <div class='left_warp'>
                <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE23e2eff30970463cbec52d7ed8271de7.png" alt="">
            </div>
            <div class='right_warp'>
                <img  src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE7d3f467f12ea414b979a83982d2d2288.png" alt="">
                <div class='right_button'>
                    <img style='margin-right:10px' src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILEfb594090782d45a4be68d303208bc2df.png" alt="">
                    <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE9a14a2a8da86424b9586f095022de1e3.png" alt="">
                </div>
            </div>
        </div>
        <div class="SeckillZone">
            <div class='tit'>
                <h3>秒杀专区</h3>
                <span class='more'>更多<i></i></span>
            </div>
            <div class='goodsDsc'>
                <ul class='goodsitem'>
                    <li class='goodslist'> 
                        <img class='goodsimg' src="http://qstscoa.qstjt.cn/h5web/api/h5/image/http://imageserver1.oss-cn-shanghai.aliyuncs.com/image/gw/425195/z1.jpg" alt="">
                        <p class='desc'>柴火大院 棕色款 五常有机稻花香东北大米</p>
                        <span class='price'>￥0<del>126.00</del></span>
                    </li>
                    <li class='goodslist'>
                        <img class='goodsimg' src="http://qstscoa.qstjt.cn/h5web/api/h5/image/http://qstbgmall.oss-cn-hangzhou.aliyuncs.com/gms/mainImage/z3_191220095333424.jpg" alt="">
                        <p class='desc'>鲁花 玉米油非转基因 食用油</p>
                        <span class='price'>￥0<del>126.00</del></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class='SeckillChanne'>
            <img width="100%" src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILEdc8d1880e80f477a98a907668ddf00c2.png" alt="">
            <div class='SeckillChanne_img'>
                <ul>
                    <li>
                        <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE0e90eba7509743c8b80d33c866beeb57.png" alt="">
                    </li>
                    <li>
                        <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE86e56ac7c1524a24bba9e946779bb76b.png" alt="">
                    </li>
                    <li>
                        <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE9c4a34913bf4441491261fcf035327a7.png" alt="">
                    </li>
                    <li>
                        <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE908734b92b9842a9aea88d1478f70e64.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <Officegoods ></Officegoods>
        <Chosegoods></Chosegoods>
    </div>
</template>

<script>
import Headernav from '../components/heardernav'
import Banner from './home/banner'
import Shakynav from './home/shakynav'
import Officegoods from './home/officegoods'
import Chosegoods from './home/chosegoods'
import axios from 'axios'
export default {
    name:'home',
    data(){
        return {
            goodsArr:[],
        }
    },
    components:{
        Headernav,
        Banner,
        Shakynav,
        Officegoods,
        Chosegoods
    },
    created(){
        // axios.get('http://qstscoa.qstjt.cn/h5web/index').then(res=>{
        //     console.log(JSON.parse(res.data.data))
        // })
    }
}
</script>

<style lang="less" scoped>
.index_act{
    display: flex;
    padding: 15px;
    margin:  20px 0;
    background-color: #fff;
    .left_warp{
        flex:2.5;
        margin-right: 10px;
        img{
            width: 100%;
        }
    }
    .right_warp{
        display: flex;
        flex: 4.5;
        flex-direction:column ;
         img{
            width: 100%;

        }
        .right_button{
            margin-top: 10px;
            display: flex;
            
        }
    }
}
.SeckillZone{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
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
            border-left: 0.03rem solid rgb(204, 56, 56);
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
            background:url(../assets/img/home/reight_mor.png) no-repeat ;
            background-size:80% 80% ;
        }
    }
    .goodsDsc {
        padding: 15px 0;
        .goodsitem {
            display: flex;
            padding-left: 10px;
            .goodslist{
                width: 40%;
                padding: 0 10px;
                box-sizing: border-box;
            }
            img.goodsimg {
                width: 80%;
            }
            p{
                color: #333;
                white-space: normal;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .price{
                font-size: 0.16rem;
                color: #CC3838;
                margin-bottom: 0.15rem;
                text-align: center;
            }
            .price del{
                margin-left: 0.1rem;
                color: #999999;
            }

        }
    }
}
.SeckillChanne_img{
    margin: 20px 0;
     ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 50%;
            box-sizing: border-box;
            border-right: 1px solid #e8e8e8;
            border-bottom: 1px solid #e8e8e8;
            img{
                width: 100%;
                height: 100%;
            }

        }
    }
}
</style>