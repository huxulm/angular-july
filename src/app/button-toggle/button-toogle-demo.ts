/**
 * Created by xulingming on 2017/9/3.
 */
import { Component } from '@angular/core';

@Component(
  {
    moduleId: module.id,
    selector: 'button-toggle-demo',
    templateUrl: 'button-toggle-demo.html',
    styleUrls: ['button-toggle-demo.scss']
  }
)
export class ButtonToggleDemo {
  isVertical: boolean = false;
  isDisabled: boolean = false;
  favoritePie = 'Apple';
  pieOptions = [
    'Apple',
    'Cherry',
    'Pecan',
    'Lemon',
  ];
}


