import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestamo } from '../models/prestamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  url:string = "https://localhost:7091/api/Prestamo/GetPrestamo"
  constructor(private httpClient:HttpClient) { }

  getPrestamos():Observable<Prestamo[]>{
    return this.httpClient.get<Prestamo[]>(this.url)
  }
}
