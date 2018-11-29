import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from '../administrador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-administrador-delete',
    templateUrl: './administrador-delete.component.html',
    styleUrls: ['./administrador-delete.component.css']
})
export class AdministradorDeleteComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param administradorService The administrador's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private administradorService: AdministradorService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }




    /**
    * El id del administrador que viene en el path get .../administradores/administrador_id
    */
    administrador_id: number;
    /**
    * The method which obtains the administrador whose deletes we want to show
    */
    deleteAdministrador(): void {
        this.administradorService.deleteAdministrador(this.administrador_id)
            .subscribe(administradorDetail=>{this.router.navigate(['/administradores/list']);
            this.toastrService.success("El administrador fue eliminado correctamente", "Administrador borrado")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the administrador so it is never considered as undefined
    */
    ngOnInit() {
        this.administrador_id = +this.route.snapshot.paramMap.get('id');
        if (this.administrador_id) {
            this.deleteAdministrador();
        }
    }
}
