import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  routes = routes
    .filter(route => route.path !== '**')
    .map(route => ({
      title: route.title ?? '',
      path: route.path ?? '',
    }));
}
