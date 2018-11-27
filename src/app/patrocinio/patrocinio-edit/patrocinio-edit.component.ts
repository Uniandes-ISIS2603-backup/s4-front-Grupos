import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {PatrocinioService} from '../patrocinio.service';
import {PatrocinioDetail} from '../patrocinio-detail';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-patrocinio-edit',
    templateUrl: './patrocinio-edit.component.html',
    styleUrls: ['./patrocinio-edit.component.css'],
    providers: []
})
export class PatrocinioEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param patrocinioService The patrocinios' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
       
        private patrocinioService: PatrocinioService,
        private toastrService: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    /**
    * The patrocinio id as received from the parent component
    */
   patrocinio: PatrocinioDetail;

   patrocinio_id:number;

    /**
    * Updates the information of the patrocinio
    */
    editPatrocinio(): void {
        ;
        this.patrocinioService.updatePatrocinio(this.patrocinio)
            .subscribe(() => {
                this.toastrService.success("The patrocinio's information was updated", "Patrocinio edition");
                this.router.navigate(['/patrocinios/list']);
            });
        
    }
    /**
    * The method which retrieves the details of the patrocinio that
    * we want to show
    */
   getPatrocinioDetail(): void {
    this.patrocinioService.getPatrocinioDetail(this.patrocinio_id)
        .subscribe(patrocinioDetail => {
          console.log(patrocinioDetail);
            this.patrocinio = patrocinioDetail;
            console.log(this.patrocinio);
        });
}

   
 /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
    this.router.navigate(['/patrocinios/list']);
}


    /**
    * This function will initialize the component
    */
    ngOnInit() {
      this.patrocinio= new PatrocinioDetail();
      this.patrocinio_id= +this.route.snapshot.paramMap.get('id');
      this.getPatrocinioDetail();
    }

    /**
    * This function will be called when the user chooses another patrocinio to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
