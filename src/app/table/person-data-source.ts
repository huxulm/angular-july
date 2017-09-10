/**
 * Created by xulingming on 2017/9/10.
 */
import { MdPaginator, MdSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PeopleDatabase, UserData } from './people-database';
import 'rxjs/add/observable/merge';
import 'rxjs/operator/map';

export class PeopleDataSource extends DataSource<any> {

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
    return null;
  }

  disconnect():void {
    // no op
  }

}
