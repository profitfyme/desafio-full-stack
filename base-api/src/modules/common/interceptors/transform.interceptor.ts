import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

export interface Response<T> {
  statusCode: number;
  body: {
    status: string;
    data: T;
  };
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        data = Array.isArray(data)
          ? data.map((obj) => classToPlain(obj))
          : classToPlain(data);
        return {
          statusCode: 201,
          body: {
            status: 'success',
            data
          }
        };
      }),
    );
  }
}
