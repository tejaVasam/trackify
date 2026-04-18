import { Component, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IconPickerDialogComponent } from './icon-picker-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 't-icon-picker',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IconPickerComponent,
      multi: true
    }
  ]
})
export class IconPickerComponent implements ControlValueAccessor {
  icons = input<string[]>([
    'star', 'fitness_center', 'water_drop', 'menu_book',
    'check_circle', 'bolt', 'local_fire_department',
    'monitor_heart', 'self_improvement', 'psychology',
    'directions_run', 'pool', 'bedtime', 'restaurant',
    'shopping_cart', 'work', 'school', 'home',
    'favorite', 'event', 'sunny', 'cloud', 'spa',
    'coffee', 'brush', 'code', 'camera_alt', 'music_note',
    'meditation', 'nature', 'pets', 'savings', 'assignment'
  ]);
  
  private dialog = inject(MatDialog);

  selectedIcon = signal<string>('star');
  isDisabled = signal<boolean>(false);

  onChange: (val: string) => void = () => {};
  onTouched: () => void = () => {};

  openPicker() {
    if (this.isDisabled()) return;
    
    const dialogRef = this.dialog.open(IconPickerDialogComponent, {
      width: '400px',
      data: {
        icons: this.icons(),
        selectedIcon: this.selectedIcon()
      },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectIcon(result);
      }
    });
  }

  selectIcon(icon: string) {
    this.selectedIcon.set(icon);
    this.onChange(icon);
    this.onTouched();
  }

  writeValue(value: string): void {
    if (value) {
      this.selectedIcon.set(value);
    }
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
