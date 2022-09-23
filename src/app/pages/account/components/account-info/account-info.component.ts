import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/e-shop/services/user.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
