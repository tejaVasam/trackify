import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-field',
  standalone: true,
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {
  label = input<string>('');
  forId = input<string>('');
  required = input<boolean>(false);
  hasError = input<boolean>(false);
  hint = input<string>('');
  variant = input<'default' | 'selection'>('default');
}
