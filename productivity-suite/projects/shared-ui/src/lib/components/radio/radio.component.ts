import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';

export interface RadioOption {
  label: string;
  value: any;
}

@Component({
  selector: 'ui-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-radio-group">
      @if (label()) {
        <div class="ui-radio-group__label">
          {{ label() }}
          @if (required()) { <span class="ui-radio-group__required">*</span> }
        </div>
      }
      <div class="ui-radio-group__options">
        @for (option of options(); track option.value) {
          <label class="ui-radio">
            <input
              type="radio"
              [name]="id()"
              [disabled]="isDisabled() || disabled()"
              [value]="option.value"
              [checked]="internalValue() === option.value"
              (change)="onChangeEvent(option.value)"
              (blur)="markAsTouched()"
              class="ui-radio__input"
            />
            <span class="ui-radio__text">{{ option.label }}</span>
          </label>
        }
      </div>
      @if (hasError) {
        <span class="ui-radio-group__error">This selection is invalid</span>
      }
    </div>
  `,
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent extends BaseControl<any> {
  options = input<RadioOption[]>([]);

  onChangeEvent(value: any) {
    this.updateValue(value);
  }
}
