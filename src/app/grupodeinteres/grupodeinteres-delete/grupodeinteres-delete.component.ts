import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupodeinteresService } from '../grupodeinteres.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-grupodeinteres-delete',
    templateUrl: './grupodeinteres-delete.component.html',
    styleUrls: ['./grupodeinteres-delete.component.css']
})
export class GrupodeinteresDeleteComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param grupodeinteresService The grupodeinteres's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private grupodeinteresService: GrupodeinteresService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }



    /**
    * El id del grupodeinteres que viene en el path get .../grupodeinteress/grupodeinteres_id
    */
    grupodeinteres_id: number;
    /**
    * The method which obtains the grupodeinteres whose deletes we want to show
    */
    deleteGrupodeinteres(): void {
        this.grupodeinteresService.deleteGrupodeinteres(this.grupodeinteres_id)
            .subscribe(grupodeinteresDetail=>{this.router.navigate(['/gruposdeinteres/list']);
            this.toastrService.success("El grupodeinteres fue eliminado correctamente", "Grupodeinteres borrado")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the grupodeinteres so it is never considered as undefined
    */
    ngOnInit() {
        this.grupodeinteres_id = +this.route.snapshot.paramMap.get('id');
        if (this.grupodeinteres_id) {
            this.deleteGrupodeinteres();
        }
    }
}
