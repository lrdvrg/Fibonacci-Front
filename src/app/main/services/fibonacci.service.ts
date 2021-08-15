import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FibonacciService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Metodo para retornar el observable de la petición al servicio.
   * @param n cantidad de sucesiones.
   * @returns observable de la petición.
   */
  getFibonacci(n: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fibonacci?nums=${n}`);
  }

}
