import { Component, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../../services/theme.service';
import { AvatarComponent } from '../avatar/avatar';
import { User } from '../../../../models/user.model';

@Component({
  selector: 't-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, AvatarComponent],
  templateUrl: './header.html'
})
export class HeaderComponent {
  isMobile = input<boolean>(false);
  title = input<string>('Trackify');
  activeUser = input<User | null>(null);
  toggle = output<void>();

  themeService = inject(ThemeService);
}
