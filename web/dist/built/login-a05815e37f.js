webpackJsonp([16],[function(t,a,s){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=s(1),n=e(i),o=s(10),u=e(o);new n["default"]({el:"#login",data:{password:null,email:null,params:{}},created:function(){if(location.search)switch(this.params=u["default"].getQueryParams(location.search),this.params.status){case"expired":toastr.warning("会话已过期");break;case"success":toastr.success("操作成功")}$("#email").focus(),setTimeout(function(){},100)},methods:{submit:function(){if(this.$validate(!0),!this.$form.valid)return!1;var t=this;u["default"].post("/login.json",{email:this.email,password:this.password},function(a){u["default"].login.success(a.data.token,a.data.user,t.params.refer)})},qq:function(){u["default"].login.qq()},weibo:function(){u["default"].login.weibo()},github:function(){u["default"].login.github()}}})}]);