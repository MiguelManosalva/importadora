import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  /*
  menu: any = [
    {
      titulo: "Principal",
      icono: "mdi mdi-gauge",
      submenu: []
    }
  ];

  constructor(public router: Router) {
    this.menu[0].submenu = [];
    let verReportes: boolean = false;

    const userLocale = sessionStorage.getItem('sesionHumanWareApp');

    if (userLocale) {
      let usuario = JSON.parse(userLocale);
    }else
    this.router.navigate(["/login"]);



    // Valida si el usuario puede ver informes
    for(let p of usuario.permisos){
      if(p.informe == '1') verReportes = true;
    }

  
    // Asignar permisos
    if (usuario.perfil == 'admin') {
      this.menu[0].submenu = [
        { titulo: "Dashboard", url: "dashboard" },
        { titulo: "Mis dispositivos", url: "inicio" },
        { titulo: "Preguntas", url: "preguntas" },
        { titulo: "Respuestas", url: "respuestas" },
        { titulo: "Observaciones", url: "observaciones" },
        { titulo: "Usuarios", url: "usuarios" }
      ]
    } else {
      this.menu[0].submenu = [
        { titulo: "Dashboard", url: "dashboard" },
        { titulo: "Mis dispositivos", url: "inicio" },
        { titulo: "Preguntas", url: "preguntas" },
        { titulo: "Respuestas", url: "respuestas" },
        { titulo: "Observaciones", url: "observaciones" }
      ]
    }
    if(verReportes){
      this.menu[0].submenu.push({ titulo: "Reportes", url: "reportes" })
    }

  }*/
}
