import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  data: any;
  newcase: number;
  unfinished: number;
  processing: number;
  pending: number;
  reply: number;
  finish: number;

  //{"unfinished":10,"processing":1,"pending":0,"reply":1,"finish":0}

  constructor(private http: Http) { }

  ngOnInit() {
    let url = 'http://localhost:25959/api/questioninfo';
    this.http.get(url).subscribe(value => {
      this.data = value.json();
      this.newcase = this.data['newcase'];
      this.unfinished = this.data['unfinished'];
      this.processing = this.data['processing'];
      this.pending = this.data['pending'];
      this.reply = this.data['reply'];
      this.finish = this.data['finish'];
    });
  }

}
