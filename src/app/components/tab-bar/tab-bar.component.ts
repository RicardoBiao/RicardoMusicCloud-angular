import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }

  selectTab = 0;
  @Input() public tabShow: boolean = true;

  ngOnInit() {
  }
  tabChange(e): void {
    console.log(e);
    this.selectTab = e;
    switch (e) {
      case 0 : {
        this.router.navigateByUrl('/home');
        break;
      }
      case 1 : {
        this.router.navigateByUrl('/login');
        break;
      }
      case 2 : {
        this.router.navigateByUrl('/login');
        break;
      }
      case 3 : {
        this.router.navigateByUrl('/login');
        break;
      }
    }
  }

}
