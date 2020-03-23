<template>
    <div class='mineWarp'>
        <div class='mine_head'>
            <div data-v-45a2c120="" class="mine-rule">
                <span  class="setUp mui-icon mui-icon mui-icon-gear-filled"></span>
                <span class="news mui-icon mui-icon-email"></span>
            </div>
            <div class='mine_name'>
                <div class='ming_name_img'>
                    <img src="../assets/img/userheard/10.jpg" alt="">
                </div>
                <div class="mine_name_text">
                    <p>uesrname<span>会员</span></p>
                </div>
            </div>
             <div class="mine_bot">
                    <div>
                        <i>0</i>
                        <span> 我的评价</span>
                    </div>
                    <div>
                        <i>0</i>
                        <span>优惠券</span>
                    </div>
                    <div class='last'>
                        <i>0</i>
                        <span>我的收藏</span>
                    </div>
                </div>
        </div>
        <div class='orderWarp'>
            <div class="order_tit">
                <p>我的订单</p>
                <div class='all_right'><span>查看全部</span><i></i></div>
            </div>
            <ul class="order_item">
                <li>
                    <i class='icon1'><span class="mui-badge">0</span></i>
                    <span>待支付</span>
                </li>
                <li>
                    <i class='icon2'><span class="mui-badge">0</span></i>
                    <span>待发货</span>
                </li>
                <li>
                    <i class='icon3'><span class="mui-badge">0</span></i>
                    <span>待收货</span>
                </li>
                <li>
                    <i class='icon4'><span class="mui-badge">0</span></i>
                    <span>已完成</span>
                </li>
                <li>
                    <i class='icon5'><span class="mui-badge">0</span></i>
                    <span>售后</span>
                </li>
            </ul>
        </div>
        <ul class="mine_more">
            <li>
                <i class='mine_more_icon1'></i>
                <p>心愿单</p>
                <span></span>
            </li>
            <li>
                <i class='mine_more_icon2'></i>
                <p>售后服务</p>
                <span></span>
            </li>
            <li>
                <i class='mine_more_icon3'></i>
                <p>收藏商品</p>
                <span></span>
            </li>
            <li>
                <i class='mine_more_icon4'></i>
                <p>我的订单</p>
                <span></span>
            </li>
            <li>
                <i class='mine_more_icon5'></i>
                <p>我的评价</p>
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'mine'
}
</script>

<style lang="less" scoped>
    .mineWarp{
       position: absolute;
       top:0px;
       width: 100%;
       .mine_head{
            width: 100%;
            height: 2.3rem;
            position: relative;
            background: #fff url(../assets/img/home/bg-mine.png) no-repeat;
            background-size: 100% 100%;
            .mine-rule{
                position: absolute;
                right: .15rem;
                top: .15rem;
                > span{
                    display: inline-block;
                    width: 0.23rem;
                    height: 0.23rem;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 50%;
                    color:#fff;
                }
                .news{
                    margin-left: .15rem;
                }
            }
            .mine_name{
                position: absolute;
                left: 0.3rem;
                top: 0.3rem;
                display: flex;
                .ming_name_img{
                    width: 0.7rem;
                    height: 0.7rem;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 0.1rem;
                    img {
                        width: 100%;
                    }
                }
                .mine_name_text{
                     margin-top: 0.15rem;
                    p{
                        color: #fff;
                        font-size: 0.3rem;
                        vertical-align: middle;
                    }
                    span{
                        vertical-align: middle;
                        display:inline-block;
                        margin-left: 0.1rem;
                        width: 0.35rem;
                        text-align: center;
                        font-size: 0.14rem;
                        line-height: 0.25rem;
                        background: rgba(0,0,0,.2)
                    }
                    
                }
            }
            .mine_bot{
                position: absolute;
                left: 0.35rem;
                bottom: 0.3rem;
                display: flex;
                color: #fff;
                width: 80%;
                > div{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex: 1;
                    flex-direction: column;
                    border-right: 1px solid #ccc;
                    > i {
                        font-size: 0.2rem;
                        font-weight: bold;
                        margin-bottom: 0.1rem;
                    }
                    > span {
                        font-size: 0.18rem;
                    }
                }
                .last{
                    border-right: none;
                }
            }
        }
        .orderWarp{
            background-color: #fff;
            padding: 0.15rem 0;
            box-sizing: border-box;
            width: 100%;
            .order_tit{
                display: flex;
                width: 100%;
                padding: 0 0.15rem;
                box-sizing: border-box;
                justify-content: space-between;
                border-bottom: 1px solid #ccc;
                > p{
                    font-size: 0.18rem;
                    color: #000;
                }
                .all_right{
                    display: flex;
                    align-items: center;
                }
                span {
                   color: #999;
                }
                 i{
                    width: 0.13rem;
                    height: 0.13rem;
                    display: inline-block;
                    margin-left: 0.1rem;
                    background:url(../assets/img/home/reight_mor.png) no-repeat ;
                    background-size:80% 80% ;
                    }

            }
            .order_item{
                display: flex;
                width: 100%;
                margin-top: 0.25rem;
                > li{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    > i{
                        position: relative;
                        margin-bottom: 0.1rem;
                        width: 0.3rem;
                        height: 0.3rem;
                        background-position: 100%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        .mui-badge{
                            position: absolute;
                            right: -0.18rem;
                            top: -0.18rem;
                            background-color: #fff;
                            border: 1px solid #d3403c;
                        }
                    }
                    .icon1{
                        background-image:url(../assets/img/home/icon-pay.png)
                    }
                    .icon2{
                        background-image:url(../assets/img/home/icon-deliver.png)
                    }
                    .icon3{
                        background-image:url(../assets/img/home/icon-receive.png)
                    }
                    .icon4{
                        background-image:url(../assets/img/home/icon-done.png)
                    }
                    .icon5{
                        background-image:url(../assets/img/home/icon-aftersale.png)
                    }
                }
            }
        }
        .mine_more{
            margin-top: 0.1rem;
            padding: 0.1rem 0.3rem;
            padding-bottom: 0;
            background-color: #fff;
            > li {
                position: relative;
                line-height: 0.5rem;
                border-bottom: 1px solid #f2f2f2;
                display: flex;
                width: 100%;
                align-items: center;
                >p{
                    color: #000;
                    margin: 0;
                }
                >span{
                    position: absolute;
                    width: 0.13rem;
                    height: 0.13rem;
                    display: inline-block;
                    right: 0;
                    background:url(../assets/img/home/reight_mor.png) no-repeat ;
                    background-size:80% 80% ;
                }
                >i {
                    display: inline-block;
                    width: 0.3rem;
                    height: 0.3rem;
                    margin-right: 0.15rem;
                    background-position: 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .mine_more_icon1{
                    background-image: url(../assets/img/home/tool2.png);
                }
                .mine_more_icon2{
                    background-image: url(../assets/img/home/tool3.png);
                }
                .mine_more_icon3{
                    background-image: url(../assets/img/home/tool8.png);
                }
                .mine_more_icon4{
                    background-image: url(../assets/img/home/tool4.png);
                }
                .mine_more_icon5{
                    background-image: url(../assets/img/home/tool1.png);
                }
            }
        }
    }
</style>