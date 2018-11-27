import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Noticia} from '../noticia';

@Component({
    selector: 'app-grupodeinteres-noticia-detail',
    templateUrl: './grupodeinteres-noticia-detail.component.html',
    providers: []
})
export class GrupodeinteresNoticiaDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param grupodeinteresService The grupo' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) {}

    /**
    * The  noticia to detail
    */
   noticia: Noticia;
    /**
    * The noticia's id retrieved from the path
    */
   noticia_id: number;
    
    /**
    * The group id
    */
    grupo_id:Number;

  
   
/**
    * The method which retrieves the details of the grupodeinteres that
    * we want to show
    */
   getNoticiaDetail(): void {
    this.grupodeinteresService.getNoticiaDetail(this.grupo_id,this.noticia_id)
        .subscribe(noticia => {
            this.noticia = noticia;
        });
}
   

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        console.log(this.grupo_id + ' grupo')
        this.noticia_id = +this.route.snapshot.paramMap.get('id2');
        console.log(this.noticia_id + ' noticia')
        this.noticia = new Noticia();
        this.getNoticiaDetail();
        
        
        
    }

}
