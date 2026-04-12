import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { db, User } from '../../../db/app.db';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 't-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class SidenavComponent implements OnInit {
  protected readonly title = signal('Trackify');
  isSidenavOpened = signal(true);
  isMobile = signal(false);
  activeUser = signal<User | null>(null);
  
  themeService = inject(ThemeService);

  async ngOnInit() {
    this.checkScreenSize();
    const loadedUser = await db.users.orderBy('id').first();
    if (loadedUser) {
      this.activeUser.set(loadedUser);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const mobile = window.innerWidth <= 768;
    this.isMobile.set(mobile);
    if (mobile) {
      this.isSidenavOpened.set(false);
    } else {
      this.isSidenavOpened.set(true);
    }
  }

  toggleSidenav() {
    this.isSidenavOpened.update(v => !v);
  }

  closeOnMobile() {
    if (this.isMobile()) {
      this.isSidenavOpened.set(false);
    }
  }
}
