import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TuiTabs} from '@taiga-ui/kit';
import {ROUTE_PATHS} from '../../../app.routes';
import {navTabNames} from '@shared/consts/texts';

@Component({
  imports: [TuiTabs, RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly router = inject(Router);
  protected readonly paths = ROUTE_PATHS;

  protected readonly navTabNames = navTabNames;
}
