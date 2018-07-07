import { Component, OnInit } from '@angular/core';
// MDB Angular Free
// import { InputsModule, WavesModule  } from 'angular-bootstrap-md';
// Forms Module
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  searchText: string;
  tableData = [
    { id: '1', firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: '2', firstName: 'Jacob', lastName: 'Thornton', username: '@jcox' },
    { id: '3', firstName: 'Larry', lastName: 'Last', username: '@larry' },
    { id: '4', firstName: 'John', lastName: 'Doe', username: '@johny' },
    { id: '5', firstName: 'Zigi', lastName: 'Kiwi', username: '@zk' },
    { id: '6', firstName: 'Beatrice', lastName: 'Selphie', username: '@bsl' },
  ];

  filterIt(arr: any, searchKey: any) {
    return arr.filter((obj: any) => {
      return Object.keys(obj).some((key) => {
        return obj[key].includes(searchKey);
      });
    });
  }

  search() {
    if (!this.searchText) {
      return this.tableData;
    }
    if (this.searchText) {
      return this.filterIt(this.tableData, this.searchText);
    }
  }

}
