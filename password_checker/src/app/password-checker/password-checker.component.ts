import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
  password: string = ''; // This property is bound to the input field

  // Object to manage password strength states
  strengthStates = {
    isEmpty: true,
    isShort: false,
    isWeak: false,
    isMedium: false,
    isStrong: false
  };

  // Method to check the strength of the password
  checkStrength() {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    // Reset states
    this.strengthStates = {
      isEmpty: passwordLength === 0,
      isShort: false,
      isWeak: false,
      isMedium: false,
      isStrong: false
    };

    if (this.strengthStates.isEmpty) {
      return;
    }

    this.strengthStates.isShort = passwordLength > 0 && passwordLength < 8;

    if (this.strengthStates.isShort) {
      return;
    }

    if (hasLetters && hasDigits && hasSymbols) {
      this.strengthStates.isStrong = true;
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.strengthStates.isMedium = true;
    } else {
      this.strengthStates.isWeak = true;
    }
  }
}
