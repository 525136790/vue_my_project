<template>
    <div>
       <Headernav :active = 2></Headernav>
       <div class='subnav'>
           <div>
               <span class='active'>综合</span>
           </div>
           <div>
                <span>销量</span>
           </div>
            <div>
                 <span>价格</span>
            </div> 
       </div>
       <ul class='more_item'>
           <li class='more_list' v-for='item in moreArr.productDetail' :key='item.uuid'>
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
import Headernav from '../../components/heardernav'
import axios from 'axios'
export default {
    name:'more',
    data(){
        return {
            moreArr:[]
        }
    },
    created(){
        var id = this.$route.params.id
        var obj = []
        axios.get('http://qstscoa.qstjt.cn/h5web/index').then(res=>{
            obj = JSON.parse(res.data.data)
            this.moreArr = obj.floorList.find(item => item.compUuid == id)
            console.log(this.moreArr)
        })
    },
    components:{
        Headernav
    }
}
</script>

<style lang="less" scoped>
    .subnav{
        display: flex;
        width: 100%;
        // height: 0.5rem;
        background-color: #fff;
        > div{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                padding: 0.1rem 0;
                font-size: 0.18rem;
            }
            .active {
                border-bottom: 2px solid #cc3838;
                color: #cc3838;
            }
        }
        
    }
    .more_item{
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.1rem;
        justify-content: space-evenly;
        .more_list{
            width: 45%;
            padding:0.15rem;
            margin-bottom: 0.1rem;
            box-sizing: border-box;
            background-color: #fff;
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
</style>