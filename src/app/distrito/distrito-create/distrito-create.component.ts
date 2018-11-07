import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {DistritoService} from '../distrito.service';
type DateString = {month: number, day: number, year: number};
import {Distrito} from '../distrito';

@Component({
    selector: 'app-distrito-create',
    templateUrl: './distrito-create.component.html',
    styleUrls: ['./distrito-create.component.css'],
    providers: [DatePipe]
})
export class DistritoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param distritoService The distritos' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private distritoService: DistritoService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new distrito
    */
    distrito: Distrito;

  
   

    /**
    * Cancels the creation of the new distrito
    * Redirects to the distritos' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The distrito wasn\'t created', 'Distrito creation');
        this.router.navigate(['/distritos/list']);
    }

    /**
    * Creates a new distrito
    */
    createDistrito(): Distrito {
       
        this.distritoService.createDistrito(this.distrito)   .subscribe(distrito => {   this.distrito.id = distrito.id;  
            this.router.navigate(['/distritos/' + distrito.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.distrito;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        console.log(123);
        this.distrito = new Distrito();
        
    }

}
