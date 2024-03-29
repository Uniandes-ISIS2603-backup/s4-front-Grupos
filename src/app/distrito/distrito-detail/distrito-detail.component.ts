import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistritoService } from '../distrito.service';
import { DistritoDetail } from '../distrito-detail';

@Component({
    selector: 'app-distrito-detail',
    templateUrl: './distrito-detail.component.html',
    styleUrls: ['./distrito-detail.component.css']
})
export class DistritoDetailComponent implements OnInit {

    /**
    * The distrito
    */
    @Input() distritoDetail: DistritoDetail;

    /**
    * Shows or hides the distrito-create-component
    */
    showLocaciones: boolean;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param distritoService The distrito's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private distritoService: DistritoService
    ) { }




    /**
    * El id del distrito que viene en el path get .../distritos/distrito_id
    */
    distrito_id: number;
    /**
    * The method which obtains the distrito whose details we want to show
    */
    getDistritoDetail(): void {
        this.distritoService.getDistritoDetail(this.distrito_id)
            .subscribe(distritoDetail => {
                this.distritoDetail = distritoDetail
            });
    }

    showHideLocaciones(): void {
        if (this.showLocaciones) {
            this.showLocaciones = true;
        }
        else this.showLocaciones = true;
    }

    /**
    * The method which initializes the component.
    * We need to create the distrito so it is never considered as undefined
    */
    ngOnInit() {
        this.distrito_id = +this.route.snapshot.paramMap.get('id');
        if (this.distrito_id) {
            this.distritoDetail = new DistritoDetail();
            this.getDistritoDetail();
        }
    }
}
