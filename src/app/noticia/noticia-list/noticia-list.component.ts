import { Component, OnInit } from '@angular/core';
import{NoticiaService} from '../noticia.service';
import {Noticia} from '../noticia';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) { }
  noticias:Noticia[];
  getNoticias():void{
        
    this.noticiaService.getNoticias().subscribe(noticias => this.noticias = noticias)
}
  ngOnInit() {
    this.getNoticias();
  }

}
