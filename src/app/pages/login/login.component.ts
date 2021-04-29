import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phone = '';
  email = 'RicardoLe@yeah.net';
  password = 'qinqinqin753';
  backgroundUrl = '';
  pswShow = true;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }
  emailLogin(): void {
    console.log('emailLogin',this.loginService.emailLogin(this.email,this.password));
    this.loginService.emailLogin(this.email,this.password).subscribe( (res) => {
      console.log(res)
    }, (err) =>{
      console.log(err)
    })
    // this.$api.postEmailLogin({
    //   email:this.email,
    //   password:this.password
    // }).then(res => {
    //   if (res.data.code === 200) {
    //
    //     this.backgroundUrl = res.data.profile.backgroundUrl;
    //     this.$store.state.userInfo = res.data.profile;
    //     this.$store.state.loginData = res.data;
    //     this.$store.state.isLogin = 1;
    //     console.log('res.data:',res.data);
    //     this.$store.state.cookie = res.data.cookie;
    //     this.$api.getDetail({
    //       uid:this.$store.state.userInfo.userId
    //     }).then(res => {
    //       if (res.data.code === 200) {
    //         this.$store.state.detail = res.data;
    //         console.log('this.$store.state.detail:',this.$store.state.detail);
    //       }
    //     });
    //     this.$api.getLikeList({
    //       uid: this.$store.state.userInfo.userId,
    //       cookie: this.$store.state.cookie
    //     }).then(res => {
    //       if (res.data.code === 200) {
    //         console.log('getLikeList-res==>',res);
    //         this.$store.state.likeList = res.data.ids;
    //         console.log('this.$store.state.likeList==>',this.$store.state.likeList);
    //       }
    //     });
    //     console.log('this.$store.state.userInfo:',this.$store.state.userInfo);
    //     uni.switchTab({
    //       url:'/pages/tabBar/account/account'
    //     });
    //   }
    // });
  }
  wxLogin(): void {
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       console.log('res===>',res);
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }
  getUserInfo(e): void {
    if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
      // 用户决绝授权
      console.log('用户拒绝了授权');
    } else {
      console.log('用户确认了授权');
    }
  }
  forgotPwd(): void {
    console.log('忘记密码');
  }

  back(): void {
    history.back()
  }

}
