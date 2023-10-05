import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class personagem {


  constructor(private http: HttpClient) {}

  getDadosComToken() {



    const headers = new HttpHeaders().set('Accept-Language', 'pt-BR');
 return this.http.get('https://api.api-onepiece.com/characters', { headers: headers });
}
}
