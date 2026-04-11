import { Directive, inject, input, signal, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive()
export abstract class BaseControl<T> implements ControlValueAccessor, OnInit {
  label = input<string>('');
  placeholder = input<string>('');
  required = input<boolean>(false);
  disabled = input<boolean>(false);
  hint = input<string>('');
  id = input<string>(`control-${Math.random().toString(36).substring(2, 9)}`);

  internalValue = signal<T | null>(null);
  isDisabled = signal<boolean>(false);
  isTouched = signal<boolean>(false);

  protected onChange: (val: T | null) => void = () => {};
  protected onTouched: () => void = () => {};

  ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (this.ngControl?.control?.disabled) {
      this.isDisabled.set(true);
    }
  }

  updateValue(val: T | null) {
    if (!this.isDisabled() && !this.disabled()) {
      this.internalValue.set(val);
      this.onChange(val);
      this.markAsTouched();
    }
  }

  markAsTouched() {
    if (!this.isTouched()) {
      this.isTouched.set(true);
      this.onTouched();
    }
  }

  // --- ControlValueAccessor Implementation ---

  writeValue(obj: T | null): void {
    this.internalValue.set(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  get hasError(): boolean {
    return !!(this.ngControl?.invalid && (this.ngControl?.touched || this.ngControl?.dirty));
  }
}
