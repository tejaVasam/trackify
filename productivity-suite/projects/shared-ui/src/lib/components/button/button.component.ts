import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type()"
      [disabled]="isDisabled() || disabled()"
      (click)="onClick($event)"
      (blur)="markAsTouched()"
      class="ui-btn ui-btn--{{ variant() }}"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseControl<any> {
  type = input<'button' | 'submit' | 'reset'>('button');
  variant = input<'primary' | 'secondary' | 'outline' | 'text'>('primary');
  clicked = output<MouseEvent>();

  onClick(event: MouseEvent) {
    if (!this.isDisabled() && !this.disabled()) {
      this.clicked.emit(event);
      // Optional toggle behavior if hooked up to formControl
      this.updateValue(!this.internalValue());
    }
  }
}
