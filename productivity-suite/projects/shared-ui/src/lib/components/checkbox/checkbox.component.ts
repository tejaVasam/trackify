import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-checkbox">
      <input
        type="checkbox"
        [id]="id()"
        [disabled]="isDisabled() || disabled()"
        [checked]="!!internalValue()"
        (change)="onChangeEvent($event)"
        (blur)="markAsTouched()"
        class="ui-checkbox__input"
      />
      @if (label()) {
        <label [for]="id()" class="ui-checkbox__label">
          {{ label() }}
          @if (required()) { <span class="ui-checkbox__required">*</span> }
        </label>
      }
      @if (hasError) {
        <span class="ui-checkbox__error">Invalid selection</span>
      }
    </div>
  `,
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends BaseControl<boolean> {
  onChangeEvent(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.updateValue(checked);
  }
}
