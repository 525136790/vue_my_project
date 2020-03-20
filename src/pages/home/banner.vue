<template>
   <div class="swiper-container">
        <div class="swiper-wrapper">
           <div class='swiper-slide'>
                <img src="../../assets/img/demo/banner.png" alt="">
            </div>
           <div class='swiper-slide'>
                <img src="../../assets/img/demo/banner-b.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import axios from 'axios'
export default {
    name:'banner',
    // data(){
    //     return {
    //         list : []
    //     }
    // },
    mounted(){
        // axios.get('/api/h5web/productList').then(res=>{
        // this.list = JSON.parse(res.data.data)
        // // console.log(this.list)
        // })
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop : true,//循环
        })
    }
}
</script>

<style>
   .swiper-container {
        width:100%;
        height: 200px;
	}  
	.swiper-container img{
		width:100%;
	}
</style>