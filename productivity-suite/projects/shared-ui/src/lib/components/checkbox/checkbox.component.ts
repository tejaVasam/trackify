import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule, FieldComponent],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends BaseControl<boolean> {
  onChangeEvent(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.updateValue(checked);
  }
}
