/**
 * Created by xulingming on 2017/9/14.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component(
  {
    selector: 'list-demo',
    templateUrl: 'list-demo.html',
    styleUrls: ['list-demo.scss'],
    encapsulation: ViewEncapsulation.None,
  }
)
export class ListDemo {
  listTabs = [
    {
      label: 'Plain List',
      link: 'plain-list'
    },
    {
      label: 'Grid List',
      link: 'grid-list'
    },
    {
      label: 'Expansion Panel',
      link: 'expansion-panel',
    }
  ];
  activeIndex: number = 0;
}

@Component(
  {
    selector: 'plain-list-demo',
    templateUrl: 'plain-list-demo.html',
    styleUrls: []
  }
)
export class PlainListDemo {

}

@Component(
  {
    selector: 'grid-list-demo',
    templateUrl: 'grid-list-demo.html',
    styleUrls: ['grid-list-demo.scss']
  }
)
export class GridListDemo {
  gridTitles = [
    '1', '2', '3', '4',
  ]
}

@Component(
  {
    selector: 'expansion-panel-demo',
    templateUrl: 'expansion-panel-demo.html',
    styleUrls: [],
  }
)
export class ExpansionPanelDemo {
  header = 'Exapnsion Panel Header';
  description = 'A Description for the expansional panel';

  // constructor() {}
}
