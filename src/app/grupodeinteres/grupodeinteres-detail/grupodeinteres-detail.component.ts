import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import {GrupodeinteresService} from '../grupodeinteres.service';
import {Grupodeinteres} from '../grupodeinteres';
import {GrupodeinteresDetail} from '../grupodeinteres-detail';
import {GrupodeinteresNoticiaComponent} from '../grupodeinteres-noticias/grupodeinteres-noticia.component';
import {GrupodeinteresAddNoticiaComponent} from '../grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
import {GrupodeinteresEventoComponent} from '../grupodeinteres-eventos/grupodeinteres-evento.component';
import {GrupodeinteresAddEventoComponent} from '../grupodeinteres-add-evento/grupodeinteres-add-evento.component';


@Component({
  selector: 'app-grupodeinteres-detail',
  templateUrl: './grupodeinteres-detail.component.html',
  styleUrls: ['./grupodeinteres-detail.component.css']
})
export class GrupodeinteresDetailComponent implements OnInit, OnDestroy {

  /**
  * The constructor of the component
  * @param grupodeinteresService The grupodeinteres service which communicates with the API
  * @param route The route which helps to retrieves the id of the grupodeinteres to be shown
  * @param router The router which is needed to know when the component needs to reload
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private grupodeinteresService: GrupodeinteresService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //This is added so we can refresh the view when one of the grupodeinteress in
    //the "Other grupodeinteress" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

    /**
    * The grupodeinteres's id retrieved from the path
    */
    grupodeinteres_id: number;

    /**
    * The grupodeinteres whose details are shown
    */
    grupodeinteresDetail: GrupodeinteresDetail;

    /**
    * The other grupodeinteress shown in the sidebar
    */
    other_grupodeinteress: Grupodeinteres[];

    /**
    * The suscription which helps to know when a new grupodeinteres
    * needs to be loaded
    */
    navigationSubscription;

    /**
     * The child GrupodeinteresNoticiaListComponent
     */
    @ViewChild(GrupodeinteresNoticiaComponent) noticiaListComponent: GrupodeinteresNoticiaComponent;

    /**
     * The child GrupodeinteresNoticiaListComponent
     */
    @ViewChild(GrupodeinteresAddNoticiaComponent) noticiaAddComponent: GrupodeinteresAddNoticiaComponent;
    
    /**
     * The child GrupodeinteresEventoListComponent
     */
    @ViewChild(GrupodeinteresEventoComponent) eventoListComponent: GrupodeinteresEventoComponent;

    /**
     * The child GrupodeinteresEventoListComponent
     */
    @ViewChild(GrupodeinteresAddEventoComponent) eventoAddComponent: GrupodeinteresAddEventoComponent;

   


    /**
    * The method which retrieves the details of the grupodeinteres that
    * we want to show
    */
    getGrupodeinteresDetail(): void {
        this.grupodeinteresService.getGrupoDetail(this.grupodeinteres_id)
            .subscribe(grupodeinteresDetail => {
              console.log(grupodeinteresDetail);
                this.grupodeinteresDetail = grupodeinteresDetail;
                console.log(this.grupodeinteresDetail);
            });
    }

    /**
    * This method retrieves all the grupodeinteress in the Grupodeinteresstore to show them in the list
    */
    getOtherGrupodeinteress(): void {
        this.grupodeinteresService.getGrupos()
            .subscribe(grupodeinteress => {
                this.other_grupodeinteress = grupodeinteress;
                this.other_grupodeinteress = this.other_grupodeinteress.filter(grupodeinteres => grupodeinteres.id !== this.grupodeinteres_id);
            });
    }


    /**
    * The method which initilizes the component
    * We need to initialize the grupodeinteres and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.grupodeinteres_id = +this.route.snapshot.paramMap.get('id');
        this.grupodeinteresDetail = new GrupodeinteresDetail();
        this.getGrupodeinteresDetail();
        this.getOtherGrupodeinteress();
        console.log(this.grupodeinteresDetail);
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

