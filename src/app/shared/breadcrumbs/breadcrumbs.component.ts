import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public titulo: string = '';

  constructor( private router: Router,
               private title: Title,
               private meta: Meta ){
    this.getDataRoute()
    .subscribe( data => {
      this.titulo = data.titulo;
      title.setTitle(this.titulo);
    
      // Configuración de MetaTags para buscadores
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };

      meta.updateTag(metaTag);
    })
  }

  ngOnInit() {
  }

  // Obtener la información que corresponde a las rutas establecidas
  getDataRoute(){
    return this.router.events.pipe(
      filter( (event: any) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data)
    )

  }

}
