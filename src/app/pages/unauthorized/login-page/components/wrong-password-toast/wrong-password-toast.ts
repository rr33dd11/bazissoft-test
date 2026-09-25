import {Component} from '@angular/core';
import {loginPageTexts} from "@shared/consts/texts";
import {TuiIcon} from '@taiga-ui/core';
import {TuiToast} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [TuiIcon, TuiToast],
  selector: 'app-wrong-password-toast',
  styleUrl: './wrong-password-toast.scss',
  templateUrl: './wrong-password-toast.html',
})
export class WrongPasswordToast {
  protected readonly incorrectPassword = loginPageTexts.incorrectPasswordError;
}
