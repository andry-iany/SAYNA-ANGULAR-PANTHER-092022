import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { UserDetail } from 'src/app/app.model';
import { API_URL } from 'src/app/shared/constants';
import { AuthService } from '../../account/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly userDetail$ = new BehaviorSubject<UserDetail | null>(null);

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private rootApi: API_URL
  ) {}

  refreshUserDetail() {
    const user = this.authService.getUserLoggedIn();
    if (!user) return;

    const endpoint = this.rootApi + 'users/' + user;
    this.http.get<UserDetail>(endpoint).subscribe((user) => {
      const userDetail = this._isEmptyObject(user) ? null : user;
      this.userDetail$.next(userDetail);
    });
  }

  private _isEmptyObject(obj: object) {
    return Object.keys(obj).length === 0;
  }
}
