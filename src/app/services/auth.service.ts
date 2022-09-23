import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { UserDetail } from 'src/app/app.model';
import { API_URL } from 'src/app/shared/constants';

type LoginArg = { email: string; password: string };
type SignupArg = {
  firstName: string;
  lastName: string;
  email: string;
  // password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = this.apiUrl + 'users';
  readonly userLoggedIn$ = new BehaviorSubject<string | null>(null);

  constructor(private apiUrl: API_URL, private http: HttpClient) {}

  getUserLoggedIn() {
    return this.userLoggedIn$.getValue();
  }

  isLoggedIn() {
    return !!this.userLoggedIn$.getValue();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  login(arg: LoginArg) {
    // the way we allow user to login is just to check whether
    // an account exists with the given email.
    // If so, the login is successful.

    const endpoint = `${this.endpoint}?email=${encodeURIComponent(arg.email)}`;
    return this.http.get<any[]>(endpoint).pipe(
      map((data) => data.length > 0 && data[0].id), // the request always returns an array, but it's an empty one if no account matches
      tap((userId: any) => this.userLoggedIn$.next(userId || null)),
      catchError(() => of(false))
    );
  }

  signup(arg: SignupArg) {
    // we provide default detail in frontend code since we don't have any backend logic to do so
    const newUser: Omit<UserDetail, 'id'> = {
      ...arg,
      billingAddress: ['Antananarivo'],
      shippingAddress: ['Antananarivo', '102'],
      paymentMethod: {
        expiry: '12/24',
        number: '**** **** **** 1234',
        owner: 'John Doe',
        type: 'VISA',
      },
    };

    // we emit "true" to indicate success
    return this.http.post(this.endpoint, newUser).pipe(
      tap((user: any) => this.userLoggedIn$.next(user.id as string)),
      map(() => true), // no error occured hence the request is deemed successful
      catchError(() => of(false))
    );
  }

  logout() {
    this.userLoggedIn$.next(null);
  }
}
