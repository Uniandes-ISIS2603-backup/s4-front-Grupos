import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupodeinteresService } from '../grupodeinteres.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-grupodeinteres-delete-evento',
    templateUrl: './grupodeinteres-delete-evento.component.html',
    styleUrls: ['./grupodeinteres-delete-evento.component.css']
})
export class GrupodeinteresDeleteEventoComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param grupoService The distrito's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private grupoService: GrupodeinteresService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }




    /**
    * El id de la evento que viene en el path get .../grupos/grupo_id/noticis/evento_id
    */
    evento_id: number;
    /**
    * El id del grupo que viene en el path get ...grupos/grupo_id/noticis/evento_id
    */
   grupo_id: number;
    /**
    * The method which obtains the distrito whose deletes we want to show
    */
    deleteEvento(): void {
        this.grupoService.deleteEvento(this.grupo_id, this.evento_id)
            .subscribe(eventoDetail=>{this.router.navigate(['/gruposdeinteres/'+this.grupo_id+'/eventos']);
            this.toastrService.success("El evento fue eliminado correctamente", "Evento borrado")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the distrito so it is never considered as undefined
    */
    ngOnInit() {
        this.evento_id = +this.route.snapshot.paramMap.get('id2');
        this.grupo_id = +this.route.snapshot.paramMap.get('id1');
        if (this.grupo_id&&this.evento_id) {
            this.deleteEvento();
        }
    }
}
