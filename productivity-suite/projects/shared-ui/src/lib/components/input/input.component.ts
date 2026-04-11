import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-field">
      @if (label()) {
        <label [for]="id()" class="ui-field__label">
          {{ label() }}
          @if (required()) { <span class="ui-field__required">*</span> }
        </label>
      }
      <input
        [id]="id()"
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="isDisabled() || disabled()"
        [value]="internalValue() || ''"
        (input)="onInput($event)"
        (blur)="markAsTouched()"
        [class.ui-field__input--error]="hasError"
        class="ui-field__input"
      />
      @if (hint() && !hasError) {
        <span class="ui-field__hint">{{ hint() }}</span>
      }
      @if (hasError) {
        <span class="ui-field__error">This field is invalid</span>
      }
    </div>
  `,
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
