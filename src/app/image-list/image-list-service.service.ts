import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageFile } from '../model/ImageFile';

@Injectable({
  providedIn: 'root'
})
export class ImageListServiceService {

  private image_url = 'http://localhost:8080/api/image';  // URL to web API
  constructor(private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<ImageFile[]>(this.image_url + "/getAll");
  }
}
