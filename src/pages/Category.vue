<template>
    <div>
        <Headernav :active = 2></Headernav>
        <div class='categoryWarp'>

        </div>
    </div>
</template>

<script>
import Headernav from '../components/heardernav'
import axios from 'axios'
export default {
    name:'category',
    components:{
       Headernav 
    },
    created(){
        //  axios.get('/api/h5web/productList').then(res=>{
        // console.log(JSON.parse(res.data.data))
        // })
        axios.get('http://qstscoa.qstjt.cn/h5web/getCategory').then(res=>{
        console.log(JSON.parse(res.data.data))
        })
    }
}
</script>