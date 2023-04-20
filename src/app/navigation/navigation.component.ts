import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() show : boolean;

  showMenu(){
    return this.show;
  }

  navigationItems = [
    {
      name: "Inicio",
      url: "#",
    },
    {
      name: "Productos",
      url: "#",
    },
    {
      name: "Servicios",
      url: "#",
    },
    {
      name: "Trabajo",
      url: "#",
    },
    {
      name: "Contactanos",
      url: "#",
    },
  ];
}
