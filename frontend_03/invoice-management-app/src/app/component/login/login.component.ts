import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {NgForm} from "@angular/forms";
import {LoginState} from "../../interface/app-states";
import {DataState} from "../../enum/datastate.enum";
import {Key} from "../../enum/key.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginState$ : Observable<LoginState> = of({dataState: DataState.LOADED});

    constructor(private router: Router, private userService: UserService) {
    }

    login(loginForm: NgForm) : void {
      this.loginState$ = this.userService.login$(loginForm.value.email, loginForm.value.password)
        .pipe(map(response => {
          if(response.data) {
            localStorage.setItem(Key.TOKEN, response.data.access_token);
            localStorage.setItem(Key.REFRESH_TOKEN, response.data.refresh_token);
            this.router.navigate(['/']);
          }

            return {dataState: DataState.LOADED};
          }),
          startWith({dataState: DataState.LOADING}),
          catchError((error: string) => {
            return of({dataState: DataState.ERROR, loginSuccess: false, error});
          })
        )
    }

  protected readonly DataState = DataState;
}
