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
  /*template: `
    <p>Welcome to the development demos for Angular Material!</p>
    <p>Open the sidenav to select a demo.</p>
  `*/
  templateUrl: './home/home.html',
  styleUrls: ['./home/home.scss']
})
export class Home {}

export const BASE_APP_PATH: string = '/angular-july';

@Component({
  moduleId: module.id,
  selector: 'july-app',
  templateUrl: './app.html',
  styleUrls: ['./july-app.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JulyApp {
  dark = false;
  navItems = [
    {
      route: '',
      name: 'Home'
    },
    {
      route: '/autocomplete',
      name: 'AutoComplete'
    },
    {
      route: '/baseline',
      name: 'BaseLine'
    },
    {
      route: '/button',
      name: 'Button',
    },
    {
      route: '/button-toggle',
      name: 'Button-Toggle'
    },
    {
      route: '/ripple',
      name: 'Ripple'
    },
    {
      route: '/tabs',
      name: 'Tab'
    },
    {
      route: '/table',
      name: 'Table'
    }
  ];

  gitRepoUrl = 'https://github.com/jackdon/angular-july.git';

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer
  ) {
    this.navItems.map((item => {
      return item.route = BASE_APP_PATH + item.route;
    }));
  }

  toggleFullScreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullscreen) {
      elem.mozRequestFullscreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._renderer.addClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.themeClass = darkThemeClass;
    } else {
      this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.themeClass = '';
    }
  }
}

