import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { GetAllPlantsServiceService } from './GetAllPlantsService.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas: Array<Planta>=[];

  constructor(private getAllPlantsServiceService: GetAllPlantsServiceService) { }

  ngOnInit() {
    this.consultarPlantas();
  }

  consultarPlantas() {
    this.getAllPlantsServiceService.plantas().subscribe(plantasFromService => {
      this.plantas = plantasFromService;
    });
  }

}
