/**
 * Created by xulingming on 2017/9/10.
 */
import {Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { PeopleDatabase, UserData } from './people-database';
import { PersonDataSource } from './person-data-source';
import { MdPaginator, MdSort } from '@angular/material';

export type UserProperties = 'userId' | 'userName' | 'progress' | 'color' | undefined;
export type TrackByStrategy = 'id' | 'reference' | 'index';

const properties = ['id', 'name', 'progress', 'color'];

@Component(
  {
    moduleId: module.id,
    selector: 'table-demo',
    templateUrl: 'table-demo.html',
    styleUrls: ['table-demo.scss']
  }
)
export class TableDemo implements OnInit {
  dataSource: PersonDataSource = null;
  displayColumns: UserProperties[] = [];
  trackByStrategy: TrackByStrategy = 'reference';
  changeReferences = false;
  highlights = new Set<string>();

  dynamicColumnDefs: any[] = [];
  dynamicColumnIds: string[] = [];

  @ViewChild(MdPaginator) _paginator: MdPaginator;

  @ViewChild(MdSort) sort: MdSort;

  constructor(public _peopleDatabase: PeopleDatabase) {
  }

  addDynamicColumnDef() {
    const nextProperty = properties[this.dynamicColumnDefs.length];
    this.dynamicColumnDefs.push({
      id: nextProperty.toUpperCase(),
      property: nextProperty,
      headerText: nextProperty
    });
    this.dynamicColumnIds = this.dynamicColumnDefs.map(columnDef => columnDef.id);
  }

  removeDynamicColumnDef() {
    this.dynamicColumnDefs.pop();
    this.dynamicColumnIds.pop();
  }

  userTrackBy = (index: number, item: UserData) => {
    switch (this.trackByStrategy) {
      case 'id': return item.id;
      case 'reference': return item;
      case 'index': return index;
    }
  }


  ngOnInit():void {
  }

  connect(): void {
    this.displayColumns = ['userId', 'userName', 'progress', 'color'];
    this.dataSource = new PersonDataSource(this._peopleDatabase, this._paginator, this.sort);
    this._peopleDatabase.initialize();
  }
}
