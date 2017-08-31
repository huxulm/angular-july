/**
 * Created by xulingming on 2017/8/30.
 */
import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
} from '@angular/core';
import {
  OverlayContainer
} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'entry-july',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
})
export class EntryApp {}

/**
 * Home component for welcome message in this app.
 */
@Component({
  selector: 'home',
  template: `
    <p>Welcome to the development demos for Angular Material!</p>
    <p>Open the sidenav to select a demo.</p>
  `
})
export class Home {}

@Component({
  moduleId: module.id,
  selector: 'july-app',
  templateUrl: 'app.html',
  styleUrls: []
})
export class JulyApp {
  dark = false;
  navItems = [
  ];

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer
  ) {}

  toggleFullScreen() {
    
  }

  toggleTheme() {

  }
}

