<template>
    <ul class='shakyNavBox'>
        <li class='shakyNavitem'>
            <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILEfada2dd875a14cc281bfa50a3dc7b429.png" alt="">
            <span>积分商城</span>
        </li>
        <li class='shakyNavitem'>
            <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE2f2f6063740e4b3aa04763e997675181.png" alt="">
            <span>福利商城</span>
        </li>
        <li class='shakyNavitem'>
            <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILE9fafa61008eb41b0b445268ba7d04712.png" alt="">
            <span>促销活动</span>
        </li>
        <li class='shakyNavitem'>
            <img src="http://qstscoa.qstjt.cn/h5web/api/h5/image/FILEb69f6569641144d0becc632898b14229.png" alt="">
            <span>秒杀频道</span>
        </li>
    </ul>
</template>


<script>
export default {
    name:'shakynav'
}
</script>
<style lang="less" scoped>
    .shakyNavBox{
        display:flex;
        background-color: #fff;
        padding: 15px 0 ;
        .shakyNavitem{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            img{
                width: 45%;
            }
        }
    }
</style>