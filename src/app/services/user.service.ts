import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatAll, filter, map, mergeAll, of } from 'rxjs';
import { UserDetail } from 'src/app/app.model';
import { API_URL } from 'src/app/shared/constants';
import { AuthService } from './auth.service';

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

  readonly detail$ = this.authService.userLoggedIn$.pipe(
    filter((user) => !!user),
    map((user) => {
      const endpoint = this.rootApi + 'users/' + user;
      return this.http.get<UserDetail>(endpoint);
    }),
    concatAll()
  );

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
