import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/account/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output('onLoginSuccess') eventEmitter = new EventEmitter<void>();

  private fromUrl = '';
  constructor(private authService: AuthService, private router: Router) {
    this.fromUrl =
      (this.router.getCurrentNavigation()?.extras.state?.['from'] as string) ??
      '';
  }

  ngOnInit(): void {}

  onLogin(e: Event) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const arg = {
      email: form['email'].value as string,
      password: form['password'].value as string,
    };

    this.authService.login(arg).subscribe((res) => {
      if (res) {
        this.router.navigateByUrl(this.fromUrl);
      } else {
        alert('Email ou mot de passe incorrect. Veuillez re-essayer');
      }
    });
  }

  onSignUp(e: Event) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const password = form['password'].value as string;
    const confirmPassword = form['confirmPassword'].value as string;

    if (password !== confirmPassword) {
      alert('Veuiller saisir et confirmer correctement votre mot de passe!');
      return;
    }

    const arg = {
      email: form['email'].value as string,
      // password: form['password'].value as string,
      firstName: form['firstName'].value as string,
      lastName: form['lastName'].value as string,
    };
    this.authService.signup(arg).subscribe((res) => {
      console.log('signup successful:', res);
      console.log(this.authService.getUserLoggedIn());
    });
  }
}
