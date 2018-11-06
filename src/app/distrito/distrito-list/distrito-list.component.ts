import { Component, OnInit } from '@angular/core';
import { DistritoService } from '../distrito.service';

import { Distrito } from '../distrito';

@Component({
  selector: 'app-distrito-list',
  templateUrl: './distrito-list.component.html',
  styleUrls: ['./distrito-list.component.css']
})
export class DistritoListComponent implements OnInit {

  constructor(private distritoService:DistritoService) { }
  distritos:Distrito[];

  getDistritos():void{
    this.distritoService.getDistritos().subscribe((distritos)=>this.distritos=distritos)
  }

  ngOnInit() {
    this.getDistritos();
  }

}
