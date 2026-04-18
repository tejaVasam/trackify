import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { db } from '../../../db/app.db';
import { ThemeService } from '../../../services/theme.service';
import { AvatarComponent } from '../components/avatar/avatar';
import { User } from '../../../models/user.model';

@Component({
  selector: 't-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class SidenavComponent implements OnInit {
  public readonly title = signal('Trackify');
  public isSidenavOpened = signal(true);
  public isMobile = signal(false);
  public activeUser = signal<User | null>(null);

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
