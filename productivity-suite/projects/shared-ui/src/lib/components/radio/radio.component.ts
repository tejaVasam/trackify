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
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent extends BaseControl<any> {
  options = input<RadioOption[]>([]);

  onChangeEvent(value: any) {
    this.updateValue(value);
  }
}
