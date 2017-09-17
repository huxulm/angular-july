/**
 * Created by xulingming on 2017/9/15.
 */
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MdMenu, MdButton } from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component(
  {
    selector: 'menu-demo',
    templateUrl: 'menu-demo.html'
  }
)
export class MenuDemo implements OnInit {
  @ViewChild('menu') menuElement: MdMenu;

  @ViewChild('btnMenu') btnMenu: MdButton;

  // @ViewChild('menu') menu: MdMenu;

  ngOnInit():void {
    Observable.fromEvent(this.btnMenu._getHostElement(), 'click')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        console.log('ok.....');
      });
  }

}
