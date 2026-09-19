import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';
import {ROUTE_PATHS} from '../../../app.routes';

@Component({
  imports: [TuiTabs, TuiHeader, RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly router = inject(Router);
  protected readonly paths = ROUTE_PATHS;

}
