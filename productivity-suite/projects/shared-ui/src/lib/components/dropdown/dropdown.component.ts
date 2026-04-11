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
  templateUrl: './dropdown.component.html',
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
