<style media="screen">

.login{
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background: #fff;
}
.login-table{
    display: table;
    height: 100%;
    width: 100%;
}
.login-table-cell{
    display: table-cell;
    vertical-align: middle;
}

</style>

<template>
<div class="login form-horizontal">
    <spinner id="spinner-box" :size="spinnerSize" :fixed="spinnerFixed" text="正在登录...">
    </spinner>
    <Alert :duration="2000" :alertshow.sync="alertObj.alertShow" :type="alertObj.alertType" :info="alertObj.alertInfo"></Alert>
    <div class="login-table">
        <div class="login-table-cell">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="form-group input-group">
                        <span class="input-group-addon">帐号</span>
                        <input @keyup.enter="login()" v-model="userName" type="text" class="form-control" placeholder="帐户">
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="form-group input-group">
                        <span class="input-group-addon">密码</span>
                        <input @keyup.enter="login()" v-model="passWord" type="password" class="form-control" placeholder="密码">
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="form-group btn-group">
                        <button @click="login()" type="button" class="btn btn-primary">登录</button>
                        <button @click="resize()" type="button" class="btn btn-default">重置</button>
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</div>

</template>

<script type="text/javascript">

    import spinner      from    '../components/common/spinner/Spinner';
    import Alert        from    '../components/common/alert/Alert'
    import Vue          from    'vue'
    import {API_ROOT}   from    '../config'

    export default{
        components:{
            spinner,
            Alert
        },
        data(){
            return{
                spinnerFixed: true,
                spinnerSize: 'lg',
                alertObj:{
                    alertType:null,
                    alertInfo:null,
                    alertShow:false
                },
                userName:'',
                passWord:''
            }
        },
        route: {
            activate: function(transition) {
                if($.cookie('token')==''||$.cookie('token')==undefined||$.cookie('loginTag')==0||$.cookie('loginTag')==undefined||$.cookie('loginTag')=='') {
                    transition.newxt();
                    return
                }else {
                    router.go('/order')
                }
            }
        },
        methods:{
            login:function(){
                let jsontext=JSON.stringify({userName: this.userName,password: this.passWord});
                if(this.userName==''){
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'请填写正确的帐号',alertShow:true})
                    return
                }
                if (this.passWord=='') {
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'请填写正确的密码',alertShow:true})
                    return
                }
                this.$broadcast('show::spinner');

                this.$http.post(API_ROOT+'admin-api-dev/v1/session/login',{paramJson:jsontext}).then((response) => {
                    if (response.data.resCode==0) {
                        this.$set('alertObj',{alertType:'alert-success',alertInfo:response.data.resMsg,alertShow:true})
                        $.cookie('userName', response.data.data.userName,{ path: "/"});
                        $.cookie('realName', response.data.data.realName,{ path: "/"});
                        $.cookie('token', response.data.data.sessionToken,{ path: "/"});
                        $.cookie('loginTag', 1,{ path: "/"});
                        window.location.href="/order"
                    }else{
                        this.$set('alertObj',{alertType:'alert-danger',alertInfo:response.data.resMsg,alertShow:true})
                    }
                    this.$broadcast('hide::spinner');
                }, (response) => {
                    // error callback
                    this.$set('alertObj',{alertType:'alert-danger',alertInfo:'网络错误',alertShow:true})
                    this.$broadcast('hide::spinner');
                });

            },
            resize:function(){
                this.$set('userName','');
                this.$set('passWord','');
            }
        }
    }
</script>
