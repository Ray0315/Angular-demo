import { Component, OnInit } from '@angular/core';

declare let $: JQueryStatic;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').css('background-image', 'url(https://services.gamagic.com/Images/new/bg.jpg)');
  }

}
