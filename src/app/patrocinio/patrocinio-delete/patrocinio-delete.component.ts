import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatrocinioService } from '../patrocinio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-patrocinio-delete',
    templateUrl: './patrocinio-delete.component.html',
    styleUrls: ['./patrocinio-delete.component.css']
})
export class PatrocinioDeleteComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param patrocinioService The patrocinio's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private patrocinioService: PatrocinioService,
        
        private toastrService: ToastrService,
        private router: Router
    ) { }




    /**
    * El id del patrocinio que viene en el path get .../patrocinios/patrocinio_id
    */
    patrocinio_id: number;
    /**
    * The method which obtains the patrocinio whose deletes we want to show
    */
    deletePatrocinio(): void {
        this.patrocinioService.deletePatrocinio(this.patrocinio_id)
            .subscribe(patrocinioDetail=>{this.router.navigate(['/patrocinios/list']);
            this.toastrService.success("El patrocinio fue eliminado correctamente", "Patrocinio borrado")});
    }


    /**
    * The method which initializes the component.
    * We need to delete the patrocinio so it is never considered as undefined
    */
    ngOnInit() {
        this.patrocinio_id = +this.route.snapshot.paramMap.get('id');
        if (this.patrocinio_id) {
            this.deletePatrocinio();
        }
    }
}
