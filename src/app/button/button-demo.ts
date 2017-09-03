/**
 * Created by xulingming on 2017/9/3.
 */
import { Component } from '@angular/core';

@Component(
  {
    moduleId: module.id,
    selector: 'button-demo',
    templateUrl: 'button-demo.html',
    styleUrls: ['button-demo.scss']
  }
)
export class ButtonDemo {
  isDisabled: boolean = false;
  clickCounter: number = 0;
  toggleDisable: boolean = false;
}
