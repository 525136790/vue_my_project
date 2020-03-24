<template>
    <div>
        <Headernav :active = 2></Headernav>
        <div class='categoryWarp'>
            <div class='left_item'>
                <ul>
                    <li v-for='(item,index) in categoryArr'  :class ="{'active':isshow===(item.categoryName + index)}" @click='isshow=(item.categoryName +index)'>
                        {{item.categoryName}}
                    </li>
                </ul>
            </div>
            <div class="right_item" v-for='(item,index) in categoryArr' v-show="isshow ===(item.categoryName + index) ">
                <ul v-for ='list in item.hotList'>
                    <li class='listTit'>{{list.categoryName}}</li>
                    <li class='listWarp'>
                        <div v-for ='sublist in list.subCategoryList' class='subWarp'>
                            <img :src="sublist.imgUrl||'https://www.qstoa.com/h5web/api/h5/image/http://imageserver1.oss-cn-shanghai.aliyuncs.com/image/gw/429968/z1.jpg'">
                            <p class='subTit'>{{sublist.categoryName}}</p>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Headernav from '../components/heardernav'
import axios from 'axios'
export default {
    name:'category',
    data(){
        return {
            categoryArr:[],
            isshow:'办公文具0'
        }
    },
    components:{
       Headernav 
    },
    created(){
        axios.get('http://qstscoa.qstjt.cn/h5web/getCategory').then(res=>{
        // console.log(JSON.parse(res.data.data))
        this.categoryArr = JSON.parse(res.data.data)
        console.log(this.categoryArr)
        })
    }
}
</script>

<style lang="less" scoped>

.categoryWarp{
    height: calc(100% - 100px);
    width: 100%;
    overflow: hidden;
    position: fixed;
    background-color: #fff;
    display: flex;
    .left_item{
        height: 100%;
        width: 30%;
        overflow-x: hidden;
        overflow-y:auto;
        
        li{
            height: 0.4rem;
            text-align: center;
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: #f7f7f7;
        }
        li.active {
            background-color: #fff;
            color:#cf4848;
        }
    }
    .right_item{
        flex: 1;
        height: 100%;
        overflow-x: hidden;
        overflow-y:auto;
        .listTit{
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
            font-size: 0.18rem;
            color: #f40;
        }
        .listWarp{
            display: flex;
            flex-wrap: wrap;
            .subWarp{
                width: 33%;
                padding: 10px 15px;
                box-sizing: border-box;
                text-align: center;
                img {
                    width: 80%;
                }
                .subTit{
                    white-space:nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>