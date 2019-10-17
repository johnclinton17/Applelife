//import all dependency file for initiate service
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap, catchError,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

constructor(private _http: Http) { }
 apiUrl = ""
//service requestion api
apirequest(url, params) {
   var expirationMS = 350 * 60 * 1000;

        var record = { value: JSON.stringify('expiry'), timestamp: new Date().getTime() + expirationMS }
        localStorage.setItem('expirecheck', JSON.stringify(record));
        
    return this._http.post(url, params).pipe(map(res => res),catchError(err => {
              return of(null);
          })
    );
  }

  getRequest(url): Observable<any> {
  return this._http.get(url).pipe(
    map(res=>res),catchError(err => {
              return of(null);
          }));
}
}
