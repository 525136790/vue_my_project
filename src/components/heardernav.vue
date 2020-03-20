<template>
    <header id="header" class="mui-bar mui-bar-nav">
        <a class="logo"  v-if='active==1'></a>
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-else></a>
       <div class="search">
			<input type="search" class="mui-input-clear" placeholder="请输入关键词">
            <span class='mui-icon mui-icon-search'></span>
		</div>
        <a class='mui-icon mui-icon-bars mui-pull-right' @click = "Isshow = !Isshow"></a>
        <div class='subnav' v-show ='Isshow'>
            <ul>
                <li class='item'>
                    <span class='icon-span1 icon-span'></span>
                    <span>关于我们</span>
                </li>
                <li class='item'>
                    <span class='icon-span2 icon-span'></span>
                    <span>定制专区</span>
                </li>
                <li class='item'>
                    <span class='icon-span3 icon-span'></span>
                    <span>秒杀频道</span>
                </li>
                <li class='item'>
                    <span class='icon-span4 icon-span'></span>
                    <span>场景办公</span>
                </li>
                <li class='item'>
                    <span class='icon-span5 icon-span'></span>
                    <span>邻券中心</span>
                </li>
                <li class='item'>
                    <span class='icon-span6 icon-span'></span>
                    <span>免费领取</span>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name:'headernav',
    data(){
        return{
           Isshow:false
        }
    },

    props:{
        active: {
            type: [Number,String],
            default: 1
        },
       
    }
}
</script>
<style scoped>
    .mui-bar{
        display: flex;
        justify-content: space-around;
    }
    .logo{
        background-image:url(../assets/img/common/qst-logo.png);
        background-size: 100% 100%;
        display: inline-block;
        width: 6%;
        height: 70%;
        background-repeat: no-repeat;
        margin-top: 0.05rem;
    }
    .search{
        position: relative;
        width: 80%;
        height: 100%;
        overflow: hidden;
        text-align: center;
        display: flex;
        align-items: center;
        padding:0 0.15rem;
        box-sizing: border-box;
       
    }
    .mui-input-clear{
        width: 100%;
        border-radius: 0.675rem;
        background-color: #f7f7f7;
         border: 1px solid #CC3838;
    }
    input[type=search] {
        font-size: 14px;
        text-align: left;
    }
    .mui-icon.mui-icon-search{
        position: absolute;
        right: 0.2rem;
    }
    .subnav{
        position: fixed;
        right: 0;
        top: 0.5rem;
        width: 1.43rem;
        border-radius: 15px;
        background: #ffffff;
        padding-bottom: 0.15rem;
    }
    .subnav .item{
        margin-top:0.1rem;
        display: flex;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .item .icon-span{
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: 100% 100%;
        margin-right:0.2rem;
    }   

    .item .icon-span1 {
        background-image: url(../assets/img/common/qst-menu3.png)
    }
    .item .icon-span2 {
        background-image: url(../assets/img/common/qst-menu5.png)
    }
    .item .icon-span3{
        background-image: url(../assets/img/common/qst-menu6.png)
    }
    .item .icon-span4{
        background-image: url(../assets/img/common/qst-menu7.png)
    }
    .item .icon-span5 {
        background-image: url(../assets/img/common/qst-menu8.png)
    }
    .item .icon-span6 {
        background-image: url(../assets/img/common/qst-menu1.png)
    }
</style>