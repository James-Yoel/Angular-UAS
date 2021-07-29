import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fasilitas } from '../shared/fasilitas';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PelayanApiServiceService {

  public user: any;
  public result: any;
  private urlApi = 'http://umn-pti2019.herokuapp.com';

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    public router: Router
  ) { }

  getAllFasilitas(): Observable<Fasilitas> {
    return this.http.get<Fasilitas>(`${this.urlApi}/api/fasilitas?sort=id&order=asc`);
  }

  getFasilitasByKode(kode: string): Observable<Fasilitas> {
    return this.http.get<Fasilitas>(`${this.urlApi}/api/fasilitas/${kode}`);
  }

  registrasi(data: any) {
    return this.http.post(`${this.urlApi}/api/register`, data);
  }

  login(user_name: string, password: string, remember_me: boolean) {
    console.log(user_name, password);
    return this.http.post<{ token: string }>(`${this.urlApi}/api/login`, { user_name, password, remember_me }).pipe(tap(res => {
      localStorage.setItem('access_token', res.token);
      console.log(this.jwtHelper.isTokenExpired());
      console.log(this.jwtHelper.getTokenExpirationDate());
      this.user = localStorage.getItem('access_token');
    }));
    
  }

  verifikasi(token: string) {
    return this.http.post(`${this.urlApi}/api/verify`, { token });
  }

  logout() {
    localStorage.removeItem('access_token');
    window.alert('Logged out!');
    this.router.navigate(['/login']);
  }

  updateProfile(data: any) {
    return this.http.put(`${this.urlApi}/api/update`, data);
  }

  deleteFavorite(data: any) {
    return this.http.put(`${this.urlApi}/api/delete-favorites`, data);
  }

  updateFasilitas(data: any, kode: string) {
    return this.http.put(`${this.urlApi}/api/fasilitas/${kode}`, data);
  }

  addFasilitas(data: any) {
    return this.http.post(`${this.urlApi}/api/fasilitas`, data);
  }
}
