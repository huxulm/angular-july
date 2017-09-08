/**
 * Created by xulingming on 2017/9/6.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'tabs-demo',
  templateUrl: './tabs-demo.html',
  styleUrls: ['tabs-demo.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsDemo {
  tabLinks = [
    {
      label: 'Sun', link: 'sunny-tab'
    },
    {
      label: 'Rain', link: 'sunny-tab'
    },
    {
      label: 'Fog', link: 'foggy-tab'
    }
  ];

  tabNavBackground: any = undefined;

  // Standard tabs demo
  tabs = [
    {
      label: 'Tab 1',
      content: 'This is the content of the first tab.',
    },
    {
      label: 'Tab 2',
      disabled: true,
      content: 'This is the content of the second tab.'
    },
    {
      label: 'Tab 3',
      extractContent: true,
      content: 'This is the content of the third tab.'
    },
    {
      label: 'Tab 4',
      content: 'This is then content of the fourth tab.'
    }
  ];

  asyncTabs: Observable<any>;

  constructor() {
    this.asyncTabs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.tabs);
      }, 3000);
    })
  }

  swapTabLinks() {
    const temp = this.tabLinks[0];
    this.tabLinks[0] = this.tabLinks[1];
    this.tabLinks[1] = temp;
  }
}

@Component({
  moduleId: module.id,
  selector: 'sunny-tab-demo',
  template: 'This is the routed content of the sunny tab.',
})
export class SunnyTabDemo {
}

@Component({
  moduleId: module.id,
  selector: 'rainy-tab-demo',
  template: 'This is the routed content of the sunny tab.',
})
export class RainyTabDemo {
}

@Component({
  moduleId: module.id,
  selector: 'foggy-tab-demo',
  template: 'This is the routed content of the foggy tab.',
})
export class FoggyTabDemo {
}
