import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationStart } from '@angular/router';
import { Router} from '@angular/router';
import { noBarPath } from './noBarPath';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() public tabShow:boolean = true;


  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {

    console.log(router.events)
    router.events.subscribe((event: NavigationStart) => {
      // 判断路由的事件类型（也就是路由的生命周期）
      if (event instanceof NavigationStart) { // 当导航开始时执行
        console.log(event.url);
        if(noBarPath.indexOf(event.url) != -1) {
          this.tabShow = false;
        } else {
          this.tabShow = true;
        }
      }
    });
  }


  ngOnInit(): void {

  }

  goLogin(): void {
    // this.router.navigate(['/login/'], {Params: {id: '2'}});
    // this.router.navigate(
    //   ['/login/'], {
    //     queryParams: {
    //         id: '2',
    //         kid: '3'
    //       }
    //     });
    this.router.navigate(['/login', {id: '2', kid: '3'}]);
  }

  goBack(): void {
    // history.back();
    // console.log('history===>', history);

    let nums = [-11,-3,4,6]
    let target = -17
    let maxMini = 0
    for ( let i=0; i<nums.length; i++) {
      if(nums[i] == target) {
        console.log('result==>', i)
        return
      } else {
        if( nums[i] < target) {
          maxMini = Math.max(maxMini, nums[i])
          if( i == nums.length -1) {
            console.log(nums.length)
          }
        } else {
          console.log(nums.indexOf(maxMini) + 1)
        }
      }
    }

  }

  goPlayer(): void {
    this.router.navigateByUrl('/player');
  }

}
