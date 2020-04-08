<template>
    <div class='loginWarp'>
        <header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' :moudel='loginFrom' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' v-model="loginFrom.username" type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' v-model="loginFrom.password" type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						自动登录
						<div id="autoLogin" class="mui-switch">
							<div class="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
			</form>
			<div class="mui-content-padded">
				<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click ='login'>登录</button>
				<div class="link-area"><router-link to='/reg' id='reg'>注册账号</router-link> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return {
             loginFrom:{
                username:'admin',
                password:'123456'
            },
        }
    },
    methods:{
        async login(){
             const { data : result } = await axios.post('http://127.0.0.1:8888/api/private/v1/login',this.loginFrom);
                if(result.meta.status !== 200){  //判断状态码 
                   alert('登录失败')  //ele弹窗的使用
                }else{
                    alert('登录成功')
                    //1.登录成功后把 token 保存到客户端的 sessionStoeage 中
                    //  1.1 项目中除了登录之外的其他APi 接口 必须在登录之后才能访问
                    //  1.2 token 只应在当前网站打开期间生效，所以要保存在sessionAtorage 中
                    window.sessionStorage.setItem('token',result.data.token);
					//2. 通过编程式导航跳转到后台主页，路由地址是 /home
					var url = window.sessionStorage.getItem('path')
                    this.$router.push(url)
                }
        }
    }
}
</script>