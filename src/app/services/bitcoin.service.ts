import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, retry, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class bitcoinService {
constructor (public http: HttpClient){}

    public getRate() {
        return this.http.get<{answer: number}>('https://blockchain.info/tobtc?currency=USD&value=1')
        .pipe(
            map(res => res.answer),
            retry(1),
            catchError(this._handleError)
        )
    }
    public getMarketPrice(){
        return this.http.get<{answer: number}>('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        .pipe(
            map(res => res.answer),
            retry(1),
            catchError(this._handleError)
        )
    }
    private _handleError(err: HttpErrorResponse) {
        console.log('err:', err)
        return throwError(() => err)
    }
}