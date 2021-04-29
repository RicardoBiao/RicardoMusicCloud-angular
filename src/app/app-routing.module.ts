import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PlayerComponent } from './pages/player/player.component';


const routes: Routes = [
  // 登录
  {
    path: 'login',
    component: LoginComponent
  },
  // 播放页
  {
    path: 'player',
    component: PlayerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
