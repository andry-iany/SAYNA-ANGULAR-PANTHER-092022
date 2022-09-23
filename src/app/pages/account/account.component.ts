import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(
    public userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService.refreshUserDetail();
  }

  logout() {
    this.authService.logout();
    this.userService.refreshUserDetail();
    window.location.reload();
  }
}
