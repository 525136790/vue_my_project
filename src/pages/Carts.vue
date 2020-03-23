<template>
    <div>
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">购物车</h1>
		    <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">编辑</button>
        </header>
        <div class='cartsWarp'>
            <ul>
                <li v-for ='item in $store.state.goodsList' :key = item.uuid>
                    <div class='carts_goods-img'>
                        <img :src="item.imgurl" alt="">
                    </div >
                    <div class='carts_goods_desc'>
                        <p>{{item.productName}}</p>
                        <div class='priceWarp'>
                            <div class='price'>￥<span>{{item.oldPrice}}</span></div>
                            <div class='countWarp'>
                                <button v-show ='item.count != 0 ' @click ='$store.commit("countsub",item.uuid)'>-</button>
                                <span>{{item.count}}</span>
                                <button @click ='$store.commit("countadd",item.uuid)'>+</button>
                            </div>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
        <div class='cartsTotal'>
            <div class='total'>总价：￥<span>{{$store.getters.totalprice}}</span></div>
            <div class='play'>去结算</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'carts'
}
</script>
<style lang="less" scoped>
    .cartsWarp{
        background-color: #fff;
    }
    .cartsWarp > ul > li{
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
        .carts_goods-img{
            width: 30%;
            img {
                width: 100%;
            }
        }
        .carts_goods_desc{
            flex: 1;
            > p{
                font-size: .2rem;
                color: #333;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .priceWarp{
                display: flex;
                justify-content: space-between;
                .price{
                    color: #cc3838;
                    font-size: 0.16rem;
                    > span{
                        font-size: 0.25rem;
                    }
                }
                .countWarp{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.1rem;
                    box-sizing: border-box;
                    > span {
                        width: 0.5rem;
                        text-align: center;
                        background-color:#f5f6fb ;
                        
                    }
                    > button {
                        padding: 0;
                        width: 0.3rem;
                        height: 0.2rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }

    }
    .cartsTotal{
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        .total{
            font-size: 0.18rem;
            font-weight: bold;
            margin: 0 15px;
            > span{
                color: #cc3838;
                font-size: .2rem;
            }
        }
        .play{
            width: 30%;
            height: 100%;
            background-color:#cc3838;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size:0.2rem;
        }
    }
</style>