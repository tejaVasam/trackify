import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../../db/app.db';
import { ThemeService } from '../../../../services/theme.service';
import { AvatarComponent } from '../avatar/avatar';

@Component({
  selector: 't-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, AvatarComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']

})
export class HeaderComponent {
  @Input() isMobile: boolean = false;
  @Input() title: string = 'Trackify';
  @Input() activeUser: User | null = null;
  @Output() toggle = new EventEmitter<void>();

  themeService = inject(ThemeService);
}
