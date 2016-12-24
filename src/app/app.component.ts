import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private router: Router) {

  }

  ngOnInit() {
    let loginStatus = Cookie.get('UserInfo');

    if (loginStatus !== null) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
