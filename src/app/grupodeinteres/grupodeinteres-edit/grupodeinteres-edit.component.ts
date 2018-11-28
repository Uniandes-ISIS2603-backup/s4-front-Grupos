import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {GrupodeinteresService} from '../grupodeinteres.service';
import {GrupodeinteresDetail} from '../grupodeinteres-detail';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-grupodeinteres-edit',
    templateUrl: './grupodeinteres-edit.component.html',
    styleUrls: ['./grupodeinteres-edit.component.css'],
    providers: []
})
export class GrupodeinteresEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param grupodeinteresService The grupodeinteress' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
       
        private grupodeinteresService: GrupodeinteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
    * The grupodeinteres id as received from the parent component
    */
   grupodeinteres: GrupodeinteresDetail;

   grupodeinteres_id:number;

    /**
    * Updates the information of the grupodeinteres
    */
    editGrupodeinteres(): void {
        ;
        this.grupodeinteresService.updateGrupodeinteres(this.grupodeinteres)
            .subscribe(() => {
                this.toastrService.success("The grupodeinteres's information was updated", "Grupodeinteres edition");
                this.router.navigate(['/gruposdeinteres/list']);
            });
        
    }
    /**
    * The method which retrieves the details of the grupodeinteres that
    * we want to show
    */
   getGrupodeinteresDetail(): void {
    this.grupodeinteresService.getGrupoDetail(this.grupodeinteres_id)
        .subscribe(grupodeinteresDetail => {
          console.log(grupodeinteresDetail);
            this.grupodeinteres = grupodeinteresDetail;
            console.log(this.grupodeinteres);
        });
}

   
 /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
    this.router.navigate(['/gruposdeinteres/list']);
}


    /**
    * This function will initialize the component
    */
    ngOnInit() {
      this.grupodeinteres_id= +this.route.snapshot.paramMap.get('id');
      this.getGrupodeinteresDetail();
    }

    /**
    * This function will be called when the user chooses another grupodeinteres to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
