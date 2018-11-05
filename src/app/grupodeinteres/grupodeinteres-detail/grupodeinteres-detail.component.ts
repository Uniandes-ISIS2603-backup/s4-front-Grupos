import { Component, OnInit, Input } from '@angular/core';
import {GrupodeinteresService} from '../grupodeinteres.service';
import {ActivatedRoute} from '@angular/router';
import {GrupodeinteresDetail} from '../grupodeinteres-detail';

@Component({
  selector: 'app-grupodeinteres-detail',
  templateUrl: './grupodeinteres-detail.component.html',
  styleUrls: ['./grupodeinteres-detail.component.css']
})
export class GrupodeinteresDetailComponent implements OnInit {

  
  constructor(
  private grupoService : GrupodeinteresService,
  private route: ActivatedRoute
  
  ) { }
  
  grupoId: number;
  
  grupoDetail: GrupodeinteresDetail;
  
  getGrupoDetail(): void {
      
      this.grupoService.getGrupoDetail(this.grupoId).subscribe(grupoDetail => {this.grupoDetail = grupoDetail})
  }

  ngOnInit() {
      
      this.grupoId = +this.route.snapshot.paramMap.get('id');
  }

}
