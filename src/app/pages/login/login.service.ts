import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService,
  ) { }

  emailLogin(email: string, password: string) {
    return this.httpService.request({
      method: 'POST',url: '/login',// 登录URL
      data: {
        email,
        password
      },});
  }

}
