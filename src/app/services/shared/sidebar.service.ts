import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icono: 'mdi mdi-gague',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'ProgressBar', url: '/progress'},
        {title: 'Gráficas', url: '/graficas1'},
      ]
    }
  ]

  constructor() { }
}
