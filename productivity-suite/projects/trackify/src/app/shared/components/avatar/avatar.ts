import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="avatar-container" 
         [style.width.px]="size" 
         [style.height.px]="size" 
         [style.min-width.px]="size"
         [style.min-height.px]="size"
         [style.background-color]="avatar ? 'transparent' : bgColor()"
         [style.border-radius]="circular ? '50%' : '12px'">
      
      @if (avatar) {
        <img [src]="avatar" 
             [style.width.px]="size" 
             [style.height.px]="size" 
             style="object-fit: cover; border-radius: inherit;" 
             alt="avatar">
      } @else {
        <span class="initials" [style.font-size.px]="size * 0.4">
          {{ initials() }}
        </span>
      }
    </div>
  `,
  styles: [`
    .avatar-container {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: white;
      font-weight: 700;
      user-select: none;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
    }
    .initials {
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }
  `]
})
export class AvatarComponent {
  @Input() name: string = '';
  @Input() avatar?: string | null = null;
  @Input() size: number = 40;
  @Input() circular: boolean = true;

  initials = computed(() => {
    if (!this.name) return '?';
    const parts = this.name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
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
    let hash = 0;
    for (let i = 0; i < this.name.length; i++) {
      hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  });
}
