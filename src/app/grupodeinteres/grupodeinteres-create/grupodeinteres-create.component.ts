import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {GrupodeinteresService} from '../grupodeinteres.service';
import {Grupodeinteres} from '../grupodeinteres';


@Component({
  selector: 'app-grupodeinteres-create',
  templateUrl: './grupodeinteres-create.component.html',
  styleUrls: ['./grupodeinteres-create.component.css']
})
export class GrupodeinteresCreateComponent implements OnInit {

 /**
    * Constructor for the component
    * @param distritoService The distritos' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private grupoDeInteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new grupo
    */
    grupo: Grupodeinteres;

  
   

    /**
    * Cancels the creation of the new grupo
    * Redirects to the grupos list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The grupo wasn\'t created', 'Grupo creation');
        this.router.navigate(['/gruposdeinteres/list']);
    }

    /**
    * Creates a new grupo
    */
    createGrupo(): Grupodeinteres {
       
        this.grupoDeInteresService.createGrupo(this.grupo).subscribe(grupo => {   this.grupo.id = grupo.id;  
            this.router.navigate(['/gruposdeinteres/' + grupo.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.grupo;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        this.grupo = new Grupodeinteres();
        
    }


}
