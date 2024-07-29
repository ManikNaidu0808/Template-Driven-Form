import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userFormInput = {
    firstName: '',
    lastName: '',
    gender:'',
    email: '',
    password: '',
    confirmPassword:'',
    address: '',
    city: '',
    state: '',
    zip: '',
    terms: false
  };

  states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];

  submitUserDetail(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', this.userFormInput);
      localStorage.setItem('userFormData', JSON.stringify(this.userFormInput));
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  preventInvalidChars(event: KeyboardEvent) {
    const charCode = event.charCode;
    const charStr = String.fromCharCode(charCode);
    if (!/^[a-zA-Z ]$/.test(charStr)) {
      event.preventDefault();
    }
  }
  preventInvalidAlphabets(event: KeyboardEvent) {
    const charCode = event.charCode;
    const charStr = String.fromCharCode(charCode);
        if (!/^[0-9]$/.test(charStr)) {
      event.preventDefault();
    }
  }


   isGmailOrYahooEmail(email: string): boolean {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const yahooRegex = /^[a-zA-Z0-9._%+-]+@yahoo\.com$/;
    return gmailRegex.test(email) || yahooRegex.test(email);
  }

  passwordMismatch: boolean = false;
  checkPasswordMatch() {
    this.passwordMismatch = this.userFormInput.password !== this.userFormInput.confirmPassword;
  }
}
