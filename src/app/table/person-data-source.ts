/**
 * Created by xulingming on 2017/9/10.
 */
import { MdPaginator, MdSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PeopleDatabase, UserData } from './people-database';
import 'rxjs/add/observable/merge';
import 'rxjs/operator/map';

export class PersonDataSource extends DataSource<any> {

  constructor(
    private _peopleDatabase: PeopleDatabase,
    private _paginator: MdPaginator,
    private _sort: MdSort
  ) {
    super();
  }

  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._paginator.page,
      this._sort.mdSortChange,
      this._peopleDatabase.dataChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();
      
      // Grab the page's slice of data
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect():void {
    // no op
  }

  getSortedData(): UserData[] {
    const data = this._peopleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'progress': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'color': [propertyA, propertyB] = [a.id, b.id]; break;
      }

      let valueA = isNaN(+propertyA)? propertyA: +propertyA;
      let valueB = isNaN(+propertyB)? propertyB: +propertyB;
      return (valueA < valueB? -1 : 1) * (this._sort.direction == 'asc'? 1 : -1);
    })
  }

}
