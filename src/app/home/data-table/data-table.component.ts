import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableOptions, TableColumn, ColumnMode } from 'angular2-data-table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

 title = 'app-home';

  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  rows = [];
  options: TableOptions;

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://localhost:25959/api/question`);

    req.onload = () => {
      cb(JSON.parse(req.response));
      console.log(JSON.parse(req.response));
    };

    req.send();
  }

  constructor() {
    this.fetch((data) => {
      this.rows.push(...data);
    });
  }

  ngOnInit() {
    this.options = new TableOptions({
      columnMode: ColumnMode.force,
      headerHeight: 50,
      footerHeight: 50,
      rowHeight: 'auto',
      offset: 1,
      limit: 5,
      columns: [
        new TableColumn({ prop: 'QuestionID', name: '回報單號' }),
        new TableColumn({ prop: 'PlatformName', name: '平台' }),
        new TableColumn({ prop: 'GameName', name: '遊戲' }),
        new TableColumn({ prop: 'NickName', name: '暱稱' }),
        new TableColumn({ prop: 'LoginName', name: '登入' }),
        new TableColumn({ prop: 'QuestionType', name: '類別' }),
        new TableColumn({ prop: 'QuestionStatus', name: '狀態' }),
        new TableColumn({ prop: 'CreateTime', name: '日期' }),
        new TableColumn({ cellTemplate: this.editTmpl, prop: 'QuestionID', name: '查看' })
      ]
    });
  }

}
