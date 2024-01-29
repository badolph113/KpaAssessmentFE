import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonFile } from './json-file';

@Injectable({
  providedIn: 'root'
})
export class JsonFileService {
  private apiUrl = 'https://localhost:7053/api/v1/json-files';

  constructor(private http: HttpClient) { }

  uploadJsonFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.apiUrl, formData);
  }

  getJsonFileById(id: string): Observable<JsonFile> {
    return this.http.get<JsonFile>(`${this.apiUrl}/${id}`);
  }

  updateJsonFile(id: string, content: any): Observable<JsonFile> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<JsonFile>(`${this.apiUrl}/${id}`, content, {headers});
  }

  getAllJsonFilesIds(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
