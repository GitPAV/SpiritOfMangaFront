import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  getGenres()  {
    return this.http.get(`http://localhost:4242/genres/manage-genres`);
  }

  postGenresManga(genresMangasData, serieId) {
    return this.http.post(`http://localhost:4242/genresMangas/manage-genres-mangas/${genresMangasData}/${serieId}`, {responseType: 'text'}).toPromise();
  }

  getGenresId(serieId) {
    return this.http.get(`http://localhost:4242/genresMangas/manage-genres-mangas/${serieId}`, {responseType: 'text'})
  }

  deleteKind(id) {
    return this.http.delete(`http://localhost:4242/genresMangas/manage-genres-mangas/${id}`).toPromise();
  }
  
}
