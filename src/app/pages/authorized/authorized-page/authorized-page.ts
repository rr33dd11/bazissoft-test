import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';
import {Header} from '@shared/components/header/header';

@Component({
  standalone: true,
  imports: [RouterOutlet, TuiAppBar, TuiProgress, Header],
  selector: 'app-authorized-page',
  styleUrl: './authorized-page.scss',
  templateUrl: './authorized-page.html'
})
export class AuthorizedPage {}
