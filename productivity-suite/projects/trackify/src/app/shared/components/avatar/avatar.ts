import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class AvatarComponent {
  name = input<string>('');
  avatar = input<string | null | undefined>(null);
  size = input<number>(40);
  circular = input<boolean>(true);

  initials = computed(() => {
    const currentName = this.name();
    if (!currentName) return '?';
    const parts = currentName.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  });

  bgColor = computed(() => {
    const colors = [
      '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', 
      '#ef4444', '#f59e0b', '#10b981', '#06b6d4', 
      '#3b82f6', '#2563eb'
    ];
    
    // Simple hash function for consistent color per name
    const currentName = this.name();
    let hash = 0;
    for (let i = 0; i < currentName.length; i++) {
      hash = currentName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  });
}
