import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseRouteUrl = `${environment.baseUrl}/File`;
  answer = new BehaviorSubject<Person[]>([]);
  inValid = new BehaviorSubject<PersonModel[]>([]);


  constructor(public http: HttpClient) { }

  public async postFile(f) {
    return this.http.post<File>(`this.baseRouteUrl/?u=${f}`, f);
  }
}
