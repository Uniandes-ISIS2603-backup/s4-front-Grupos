import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DistritoService } from '../distrito.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-distrito-delete-locacion',
    templateUrl: './distrito-delete-locacion.component.html',
    styleUrls: ['./distrito-delete-locacion.component.css']
})
export class DistritoDeleteLocacionComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param distritoService The distrito's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private distritoService: DistritoService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }




    /**
    * El id de la locacion que viene en el path get .../distritos/distrito_id/noticis/locacion_id
    */
    locacion_id: number;
    /**
    * El id del distrito que viene en el path get ...distritos/distrito_id/noticis/locacion_id
    */
   distrito_id: number;
    /**
    * The method which obtains the distrito whose deletes we want to show
    */
    deleteLocacion(): void {
        this.distritoService.deleteLocacion(this.distrito_id, this.locacion_id)
            .subscribe(distritoDetail=>{this.router.navigate(['/distritos/list']);
            this.toastrService.success("La locacion fue eliminada correctamente", "Locacion borrada")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the distrito so it is never considered as undefined
    */
    ngOnInit() {
        this.locacion_id = +this.route.snapshot.paramMap.get('id2');
        this.distrito_id = +this.route.snapshot.paramMap.get('id1');
        if (this.distrito_id&&this.locacion_id) {
            this.deleteLocacion();
        }
    }
}
