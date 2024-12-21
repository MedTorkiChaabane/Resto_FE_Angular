import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishUrl: string = "http://localhost:8090/api/dishes";
  constructor(private http: HttpClient) { }

  getAllDishes() {
    return this.http.get<{ response: any[] }>(this.dishUrl);
  }

  getDishById(id: any) {
    return this.http.get(this.dishUrl + `/${id}`);
  }

  editDish(dish: any){
    return this.http.put(this.dishUrl, dish);
  }

  getDishesByChefId(id: any) {
    return this.http.get(this.dishUrl + `/chef-dishes/${id}`);
  }

  addDish(dish: any) {
    return this.http.post(this.dishUrl, dish);
  }

  deleteDishById(id: number) {
    return this.http.delete(this.dishUrl + `/${id}`);
  }

}
