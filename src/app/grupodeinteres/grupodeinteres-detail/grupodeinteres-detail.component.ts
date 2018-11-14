import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { GrupodeinteresService } from '../grupodeinteres.service';
import { Grupodeinteres } from '../grupodeinteres';
import { GrupodeinteresDetail } from '../grupodeinteres-detail';
import { GrupodeinteresNoticiaComponent } from '../grupodeinteres-noticias/grupodeinteres-noticia.component';
import { GrupodeinteresAddNoticiaComponent } from '../grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';

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

  toggleNoticias(): void {
    if (this.noticiaAddComponent.isCollapsed == false) {
      this.noticiaAddComponent.isCollapsed = true;
    }
    this.noticiaListComponent.isCollapsed = !this.noticiaListComponent.isCollapsed;
  }

  toggleCreateNoticia(): void {
    if (this.noticiaListComponent.isCollapsed == false) {
      this.noticiaListComponent.isCollapsed = true;
    }
    this.noticiaAddComponent.isCollapsed = !this.noticiaAddComponent.isCollapsed;
  }

  /**
  * The method which retrieves the details of the grupodeinteres that
  * we want to show
  */
  getGrupodeinteresDetail(): void {
    this.grupodeinteresService.getGrupoDetail(this.grupodeinteres_id)
      .subscribe(grupodeinteresDetail => {
        console.log(grupodeinteresDetail);
        this.grupodeinteresDetail = grupodeinteresDetail;
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
   * The function called when a noticia is posted, so that the child component can refresh the list
   */
  updateNoticias(): void {
    this.getGrupodeinteresDetail();
    this.noticiaListComponent.updateNoticias(this.grupodeinteresDetail.noticias);
    this.noticiaListComponent.isCollapsed = false;
    this.noticiaAddComponent.isCollapsed = true;
  }

  /**
  * The method which initilizes the component
  * We need to initialize the grupodeinteres and its editorial so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.grupodeinteresDetail = new GrupodeinteresDetail();
    this.grupodeinteres_id = +this.route.snapshot.paramMap.get('id');
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
