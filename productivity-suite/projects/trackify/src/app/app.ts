import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidenavComponent } from './shared/sidenav/sidenav';
import { HeaderComponent } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavComponent,
    HeaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
