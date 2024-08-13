import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { BehaviorSubject, catchError, from, retry, tap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { storageService } from "./async-storage.service";
const ENTITY = 'user'
@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
        console.log('hi')
        const user = JSON.parse(localStorage.getItem(ENTITY)!);
        if (!user) {
            localStorage.setItem(ENTITY, JSON.stringify(this._createUser()))
        }
    }

    private _user$ = new BehaviorSubject<User[]>([]);
    public user$ = this._user$.asObservable()
    public query() {
        return from(storageService.query<User>(ENTITY))
            .pipe(
                tap(user => {
                    this._user$.next(user)
                    console.log(this.user$)
                }),
                retry(1),
                catchError(this._handleError)
            )
    }
    _createUser(): User[] {
        return [{ name: "Ochoa Hyde", coins: 100, moves: [] }]
    }
    private _handleError(err: HttpErrorResponse) {
        console.log('err:', err)
        return throwError(() => err)
    }
}
