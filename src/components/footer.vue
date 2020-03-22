<template>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item " to='/home' >
            <span class="mui-icon home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to='/category' >
            <span class="mui-icon category"  ></span>
            <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link class="mui-tab-item" to='/carts' >
            <span class="mui-icon carts" ><span class="mui-badge">{{$store.getters.totalcount}}</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to='/mine'>
            <span class="mui-icon mine" ></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name:'footernav',
    data(){
        return {
            active:2
        }
    },
    updated(){
       
    },
    methods:{
        navactive(val){
            this.active = val
             console.log(this.active)
        }
    }
}
</script>

<style scoped>
.mui-bar-tab .mui-tab-item .mui-icon{
    width: 0.28rem;
    height: 0.28rem;
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label{
    font-size:0.14rem;
}
.mui-tab-item .home {
 background-image: url(../assets/img/common/nav_1.png)
}
.mui-tab-item .category {
  background-image: url(../assets/img/common/nav_2.png);
}

.mui-tab-item .carts{
  background-image: url(../assets/img/common/nav_4.png);
}

.mui-tab-item .mine{
  background-image: url(../assets/img/common/nav_5.png);
}


.mui-tab-item.router-link-active .home {
  background-image: url(../assets/img/common/nav_1_cur.png);
}
.mui-tab-item.router-link-active .category {
  background-image: url(../assets/img/common/nav_2_cur.png);
}

.mui-tab-item.router-link-active .carts {
  background-image: url(../assets/img/common/nav_4_cur.png);
}
.mui-tab-item.router-link-active .mine {
  background-image: url(../assets/img/common/nav_5_cur.png);
}
</style>