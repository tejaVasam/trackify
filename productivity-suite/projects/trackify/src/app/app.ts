import { Component, signal, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { db, User } from '../db/app.db';
import { NotificationService } from '../services/notification.service';
import { ThemeService } from '../services/theme.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('Trackify');
  isSidenavOpened = signal(true);
  isMobile = signal(false);
  activeUser = signal<User | null>(null);
  
  private notificationService = inject(NotificationService);
  themeService = inject(ThemeService);

  async ngOnInit() {
    this.checkScreenSize();
    const loadedUser = await db.users.orderBy('id').first();
    if (loadedUser) {
      this.activeUser.set(loadedUser);
    }

    // Start checking for reminders every minute
    setInterval(() => {
        this.notificationService.checkReminders();
    }, 60000); // Check every 60 seconds
    
    // Immediate check on load
    this.notificationService.checkReminders();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    // Determine screen breakpoint 
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
