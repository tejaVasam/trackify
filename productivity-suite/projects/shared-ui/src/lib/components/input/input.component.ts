import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, FieldComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends BaseControl<string | number> {
  type = input<'text' | 'number' | 'password' | 'email'>('text');

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.updateValue(this.type() === 'number' ? Number(val) : val);
  }
}
