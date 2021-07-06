import { Injectable } from '@angular/core';
import { Safe } from '../decorators/safe.decorator';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  @Safe()
  static getItem<T>(key: string): T {
    return (
      this.fromJson(sessionStorage.getItem(key)) ||
      this.fromJson(localStorage.getItem(key))
    );
  }

  @Safe()
  static setItem<T>(key: string, valueObj: T, remember = true): void {
    if (remember) {
      localStorage.setItem(key, this.toJson<T>(valueObj));
    } else {
      sessionStorage.setItem(key, this.toJson<T>(valueObj));
    }
  }

  @Safe()
  static removeItem(key: string): void {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  }

  private static fromJson<T>(value: string | null): T {
    if (value != null) return JSON.parse(value);
    else return JSON.parse('');
  }

  private static toJson<T>(value: T): string {
    return JSON.stringify(value);
  }
}
