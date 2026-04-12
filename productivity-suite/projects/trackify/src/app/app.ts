import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { inject } from '@angular/core';

import { SidenavComponent } from './shared/sidenav/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private notificationService = inject(NotificationService);

  async ngOnInit() {
    // Start checking for reminders every minute
    setInterval(() => {
      this.notificationService.checkReminders();
    }, 60000); // Check every 60 seconds

    // Immediate check on load
    this.notificationService.checkReminders();
  }
}
