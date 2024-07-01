import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        return throwError(
          () =>
            new HttpException(
              error.message || 'Internal server error.',
              error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
            ),
        );
      }),
    );
  }
}
