import { Component, OnInit } from '@angular/core';
import { ApiCarsService } from '../services/apiCars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data;

  constructor(private apiCars: ApiCarsService ) { }

  ngOnInit() {

   this.apiCars.getCars().subscribe( allCars => {

    this.data = allCars;
   });

  }

}
