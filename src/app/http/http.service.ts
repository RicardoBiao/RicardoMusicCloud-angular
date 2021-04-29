import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) { }

// baseUrl: string = 'http://ricardofighting.top:3000';

  public request(params: any): any {
    // POST请求（参数、返回值类型都是任意类型）
    if (params['method'] == 'post' || params['method'] == 'POST') {
      return this.post(params['url'],params['data']);
    } else { // 其他请求
      return this.get(params['url'],params['data']);
    }
  };
  
  // get方法
  public get(url: string, options?: any, params?: Object): Observable<{}> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return this.http.get(url, { headers: options, params: httpParams }).pipe(catchError(this.handleError));
  };
  
  // post方法
  public post(url: string, data: any = null, options?: Object): Observable<{}> {
    // console.log('url==>', this.baseUrl + url, data, options,this.http.post(this.baseUrl + url, data))
    return this.http.post(url, data, options).pipe(catchError(this.handleError));
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
