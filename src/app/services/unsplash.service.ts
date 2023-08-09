import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RootResult } from '../models/RootResult';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  page: number = 1;
  per_page: number = 10;

  constructor(public httpclient: HttpClient) {}

  obtenerImagenes(search: string) {
    const url = `${environment.unsplash_url}search/photos?page=${this.page}&per_page=${this.per_page}&query=${search}&client_id=${environment.api_key}`;
    return this.httpclient.get<RootResult>(url);
  }
}
