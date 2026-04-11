import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  InputComponent,
  DropdownComponent,
  ButtonComponent,
  CheckboxComponent,
  RadioComponent,
  DateComponent
} from '../../../../shared-ui/src/public-api';

@Component({
  selector: 't-lib-preview',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    DropdownComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    DateComponent
  ],
  templateUrl: './lib-preview.html',
  styleUrl: './lib-preview.scss',
})
export class LibPreview {
  private fb = inject(FormBuilder);

  previewForm = this.fb.group({
    textInput: ['Example User'],
    dropdownSelection: ['option2'],
    checkValue: [true],
    radioSelection: ['radio1'],
    dateValue: ['2026-04-10']
  });

  dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  radioOptions = [
    { label: 'Choice A', value: 'radio1' },
    { label: 'Choice B', value: 'radio2' }
  ];

  onButtonClick() {
    console.log('Button Clicked!', this.previewForm.value);
    alert('Form value: ' + JSON.stringify(this.previewForm.value, null, 2));
  }
}
