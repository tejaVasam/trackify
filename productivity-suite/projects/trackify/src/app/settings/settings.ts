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
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
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
