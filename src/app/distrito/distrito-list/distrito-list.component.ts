import { Component, OnInit } from '@angular/core';
import { DistritoService } from '../distrito.service';
import { ActivatedRoute } from '@angular/router';
import { Distrito } from '../distrito';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-distrito-list',
  templateUrl: './distrito-list.component.html',
  styleUrls: ['./distrito-list.component.css']
})
export class DistritoListComponent implements OnInit {
/**
     * Constructor for the component
     * @param distritoService The distrito's services provider
     */
  constructor(private distritoService:DistritoService) { }
  /**
     * The list of distritos which belong to the GruposDeInteres
     */
  distritos:Distrito[];
/**
     * Asks the service to update the list of distritos
     */
  getDistritos():void{
    this.distritoService.getDistritos().subscribe((distritos)=>this.distritos=distritos)
  }
/**
     * This will initialize the component by retrieving the list of distritos from the service
     * This method will be called when the component is created
     */
  ngOnInit() {
    this.getDistritos();
  }

}
