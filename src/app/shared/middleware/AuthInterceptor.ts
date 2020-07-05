import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // // do token stuff here
        // request = request.clone({
        //     setHeaders: {
        //       Authorization: `Bearer ${this.auth.getToken()}`
        //     }
        //   });
        return next.handle(request);
        // // .pipe(
        // //    tap((req) => console.log(req))
        // // );
    }
}
