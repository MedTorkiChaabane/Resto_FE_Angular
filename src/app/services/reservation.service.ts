import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl: string = "http://localhost:8090/api/reservations";
  constructor(private http: HttpClient) { }

  getAllReservation(){
    return this.http.get(this.reservationUrl);
  }

  addReservation(reservation: any) {
    return this.http.post(this.reservationUrl, reservation);
  }

  deleteRservationById(id: number){
    return this.http.delete(this.reservationUrl+`/${id}`);
  }

  getAllReservationsClient(id: number){
    return this.http.get(this.reservationUrl+`/client-reservations/${id}`);
  }

  getAllReservationsChef(id: number){
    return this.http.get(this.reservationUrl+`/chef-reservations/${id}`);
  }
}
