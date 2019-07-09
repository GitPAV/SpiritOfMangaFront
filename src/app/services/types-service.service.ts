import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesServiceService {

  constructor(private http: HttpClient) { }

  getTypes(): Observable<any> {
    return this.http.get(`http://localhost:4242/types/manage-types`);
  }
}
