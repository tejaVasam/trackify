import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from '../shared/confirm-dialog';
import { db } from '../../db/app.db';

@Component({
  selector: 't-settings',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  template: `
    <div class="p-24 df fd-c gap-6 font-inter" style="background-color: #f7f3f0; ">
      <div class="df fd-c gap-1">
        <h1 class="m-0 fs-28 fw-700 text-primary" style="color: #212121;">Settings</h1>
        <p class="m-0 fs-14 fw-500" style="color: #6b7280;">Manage your application data and preferences</p>
      </div>

      <div class="bg-white br-16 p-24 df fd-c gap-4 w-100" style="box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
        <div class="df fd-c gap-2 mb-8">
            <h2 class="m-0 fs-18 fw-700 text-warn">Danger Zone</h2>
            <p class="m-0 fs-14 text-secondary">Irreversible destructive actions against your device's local database.</p>
        </div>
        
        <div class="df fd-c gap-4">
           <div class="df fd-r jc-sb ai-c p-20 br-8 b-1-solid" style="border-color: #fca5a5; background-color: #fef2f2; box-sizing: border-box;">
              <div class="df fd-c gap-1">
                 <span class="fs-16 fw-700" style="color: #b91c1c;">Wipe Tracking Data</span>
                 <span class="fs-13 fw-500" style="color: #ef4444;">Permanently delete all habits, logs, categories, and your profile.</span>
              </div>
              <button mat-flat-button color="warn" class="fw-700" (click)="clearAllData()">
                 <mat-icon class="mr-4">delete_forever</mat-icon> Erase All Native Data
              </button>
           </div>
        </div>
      </div>
    </div>
  `
})
export class Settings {
  private dialog = inject(MatDialog);

  clearAllData() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '450px',
      data: {
        title: 'Factory Reset Trackify',
        message: 'Are you absolutely sure you want to permanently erase ALL data? This will instantly wipe out your Profile, active Habits, and entire historical Logs array forever. This cannot be undone!'
      }
    });

    dialogRef.afterClosed().subscribe(async (confirmed: any) => {
      if (confirmed) {
        // Sequentially purge table memory avoiding strict db connection termination drop crashes
        await db.users.clear();
        await db.habits.clear();
        await db.habitLogs.clear();
        await db.categories.clear();

        // Force refresh natively stripping all local RAM state signals dropping directly into Auth Guard
        window.location.reload();
      }
    });
  }
}
