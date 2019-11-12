import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  @Output() genresUpdate = new EventEmitter()
  genres;

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get(`http://localhost:4242/genres/manage-genres`);
  }

  serieGenreUpdate(genresMangasData, serieId) {
    this.postGenresManga(genresMangasData, serieId).subscribe( res => {
      this.getGenresId(serieId).subscribe(genres => {
        this.genres = genres
        this.genresUpdate.emit(this.genres)
      })
    })
  }

  serieGenreDelete(index, serieId) {
    this.deleteKind(index).subscribe( res => {
      this.getGenresId(serieId).subscribe(genres => {
        this.genres = genres
        this.genresUpdate.emit(this.genres)
      })
    })
  }

  postGenresManga(genresMangasData, serieId): Observable<any> {
   return this.http.post(`http://localhost:4242/genresMangas/manage-genres-mangas/${genresMangasData}/${serieId}`, {responseType: 'text'})
  }

  getGenresId(serieId) {
    return this.http.get(`http://localhost:4242/genresMangas/manage-genres-mangas/${serieId}`, {responseType: 'text'})
  }

  deleteKind(id): Observable<any> {
    return this.http.delete(`http://localhost:4242/genresMangas/manage-genres-mangas/${id}`);
  }
  
}
