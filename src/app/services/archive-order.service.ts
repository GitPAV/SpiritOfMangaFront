import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveOrderService {
  archiveOrderUrl = 'http://localhost:4242/finalOrderArchive/manage-final-order-archive';
  mangaArchiveOrderUrl= 'http://localhost:4242/finalOrderArchive/manage-final-order-archive-manga';
  archiveUserList='http://localhost:4242/finalOrderArchive/manage-list-user-archive';

  constructor(private http: HttpClient) { }

  getArchiveOrder(): Observable<any> {
    return this.http.get(this.archiveOrderUrl)
  }

  getMangaArchiveOrder(): Observable<any> {
    return this.http.get(this.mangaArchiveOrderUrl)
  }

  getListUsersArchive(): Observable<any> {
    return this.http.get(this.archiveUserList)
  }
}
