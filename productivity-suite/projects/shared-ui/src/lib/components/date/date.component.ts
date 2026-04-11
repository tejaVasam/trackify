import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';

@Component({
  selector: 'ui-date',
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
        type="date"
        [disabled]="isDisabled() || disabled()"
        [value]="internalValue() || ''"
        (input)="onInput($event)"
        (blur)="markAsTouched()"
        [class.ui-field__input--error]="hasError"
        class="ui-field__input ui-field__date"
      />
      @if (hint() && !hasError) {
        <span class="ui-field__hint">{{ hint() }}</span>
      }
      @if (hasError) {
        <span class="ui-field__error">This date is invalid</span>
      }
    </div>
  `,
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent extends BaseControl<string> {
  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.updateValue(val);
  }
}
