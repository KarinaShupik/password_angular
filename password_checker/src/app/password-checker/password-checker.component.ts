import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
  password: string = '';
  isEmpty: boolean = true;
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;
  isShort: boolean = false;

  checkStrength() {
    this.isEmpty = this.password.length === 0;
    this.isShort = this.password.length > 0 && this.password.length < 8;
    this.isWeak = false;
    this.isMedium = false;
    this.isStrong = false;

    if (this.isShort) {
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (hasLetters && hasDigits && hasSymbols) {
      this.isStrong = true;
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.isMedium = true;
    } else {
      this.isWeak = true;
    }
  }
}
