import { Injectable } from '@angular/core';
import { Telephone } from '../model/telephone';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelephoneService {
  telephone: Telephone = {} as Telephone;
  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:3000/telephone';

  public getAllJsonTelephone(): Observable<Telephone[]> {
    return this.httpClient.get<Telephone[]>(
      'http://localhost:5234/api/AngEmp/allTelephones'
    );
  }

  public getTelById(id: number): Observable<Telephone> {
    let temp = 'http://localhost:5234/api/AngEmp' + '/' + id;
    return this.httpClient.get<Telephone>(temp);
  }

  public updateTelephone(
    id: number,
    telephone: Telephone
  ): Observable<Telephone> {
    let temp = 'http://localhost:5234/api/AngEmp' + '/' + id;
    return this.httpClient.put<Telephone>(temp, telephone);
  }

  public addTelephone(Telephone: Telephone): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'https://localhost:5001/api/AngEmp',
      Telephone
    );
  }

  public deleteTelephoneById(id: number): Observable<Telephone> {
    let temp = 'http://localhost:5234/api/AngEmp' + '/' + id;
    return this.httpClient.delete<Telephone>(temp);
  }
}
