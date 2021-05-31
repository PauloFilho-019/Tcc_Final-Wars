import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: string = "../BACK_END/src/controll/process/process.paciente.php";
  private api1: string = "../BACK_END/src/controll.process/process.agenda.php";
  constructor(private http: HttpClient) { }

  createData() {

  }
  readData() {
    return this.http.get(`${this.api1}posts/0`);
  }

}
