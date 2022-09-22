import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output('onLoginSuccess') eventEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.eventEmitter.emit();
  }
}
