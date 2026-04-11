import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';

export interface DropdownOption {
  label: string;
  value: any;
}

@Component({
  selector: 'ui-dropdown',
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
      <select
        [id]="id()"
        [disabled]="isDisabled() || disabled()"
        (change)="onChangeEvent($event)"
        (blur)="markAsTouched()"
        [class.ui-field__input--error]="hasError"
        class="ui-field__select"
      >
        <option [value]="null" [disabled]="true" [selected]="internalValue() == null">
          {{ placeholder() || 'Select an option' }}
        </option>
        @for (option of options(); track option.value) {
          <option [value]="option.value" [selected]="internalValue() === option.value">
            {{ option.label }}
          </option>
        }
      </select>
      @if (hasError) {
        <span class="ui-field__error">This field is invalid</span>
      }
    </div>
  `,
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends BaseControl<any> {
  options = input<DropdownOption[]>([]);

  onChangeEvent(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    const selectedOption = this.options().find(o => String(o.value) === String(val));
    this.updateValue(selectedOption ? selectedOption.value : val);
  }
}
