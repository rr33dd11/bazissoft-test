import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';
import {Header} from '../../../shared/components/header/header';
@Component({
  imports: [RouterOutlet, TuiAppBar, TuiButton, TuiProgress, TuiTitle, Header],
  selector: 'app-authorized-page',
  styleUrl: './authorized-page.scss',
  templateUrl: './authorized-page.html'
})
export class AuthorizedPage {}
