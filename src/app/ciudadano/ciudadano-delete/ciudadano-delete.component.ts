import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadanoService } from '../ciudadano.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-ciudadano-delete',
    templateUrl: './ciudadano-delete.component.html',
    styleUrls: ['./ciudadano-delete.component.css']
})
export class CiudadanoDeleteComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param ciudadanoService The ciudadano's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private ciudadanoService: CiudadanoService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }

    /**
    * El id del ciudadano que viene en el path get .../ciudadano/ciudadano_id
    */
    ciudadano_id: number;

    /**
    * Método que borra el ciudadano seleccionando.
    */
    deleteCiudadano(): void {
        this.ciudadanoService.deleteCiudadano(this.ciudadano_id)
            .subscribe(ciudadanoDetail=>{this.router.navigate(['/ciudadanos/list']);
            this.toastrService.success("El ciudadano fue eliminado correctamente", "Ciudadano eliminado")});
    }


    /**
    * El metodo inicializa el componente.
    * Se necesita borrar el ciudadano por esto no se considera indefinido.
    */
    ngOnInit() {
        this.ciudadano_id = +this.route.snapshot.paramMap.get('id');
        if (this.ciudadano_id) {
            this.deleteCiudadano();
        }
    }
}


