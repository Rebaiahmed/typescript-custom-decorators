/* import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export const CacheRes = (): MethodDecorator => {
  return (() => {
    let result: any;
    return (target: Observable<any>, key: string, descriptor: any) => {
      const originalMethod = descriptor.value;
      descriptor.value = function () {
        if (result) {
          console.log('Returning from cache');
          return of(result);
        }
        console.log('Calling Api');
        return originalMethod.apply(this).pipe(tap((res) => (result = res)));
      };
      return descriptor;
    };
  })();
};
 */
