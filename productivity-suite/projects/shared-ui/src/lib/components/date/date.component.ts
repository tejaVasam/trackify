import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl } from '../../base-control';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'ui-date',
  standalone: true,
  imports: [CommonModule, FieldComponent],
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent extends BaseControl<string> {
  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.updateValue(val);
  }
}
