import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {CategoriaDetail} from '../categoria-detail'

import {CategoriaService} from '../categoria.service';


@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.css']
})
export class CategoriaDetailComponent implements OnInit {

  constructor( private categoriaService: CategoriaService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the grupodeinteress in
        //the "Other grupodeinteress" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });}

  
     /**
    * The grupodeinteres's id retrieved from the path
    */
    categoria_id: number;

    /**
    * The grupodeinteres whose details are shown
    */
    categoriaDetail: CategoriaDetail;
    
    
     navigationSubscription;
     
  /**
    * The method which retrieves the details of the grupodeinteres that
    * we want to show
    */
    getCategoriaDetail(): void {
        this.categoriaService.getCategoriaDetail(this.categoria_id)
            .subscribe(categoriaDetail => {
              console.log(categoriaDetail);
                this.categoriaDetail = categoriaDetail;
                console.log(this.categoriaDetail);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the grupodeinteres and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.categoria_id = +this.route.snapshot.paramMap.get('id');
        this.categoriaDetail = new CategoriaDetail();
        this.getCategoriaDetail();
        console.log(this.categoriaDetail);
    }

    /**
    * This method helps to refresh the view when we need to load another grupodeinteres into it
    * when one of the other grupodeinteress in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
