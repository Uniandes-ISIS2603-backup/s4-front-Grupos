import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DistritoService } from '../distrito.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-distrito-delete',
    templateUrl: './distrito-delete.component.html',
    styleUrls: ['./distrito-delete.component.css']
})
export class DistritoDeleteComponent implements OnInit {

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
    * El id del distrito que viene en el path get .../distritos/distrito_id
    */
    distrito_id: number;
    /**
    * The method which obtains the distrito whose deletes we want to show
    */
    deleteDistrito(): void {
        this.distritoService.deleteDistrito(this.distrito_id)
            .subscribe(distritoDetail=>{this.router.navigate(['/distritos/list']);
            this.toastrService.success("El distrito fue eliminado correctamente", "Distrito borrado")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the distrito so it is never considered as undefined
    */
    ngOnInit() {
        this.distrito_id = +this.route.snapshot.paramMap.get('id');
        if (this.distrito_id) {
            this.deleteDistrito();
        }
    }
}
