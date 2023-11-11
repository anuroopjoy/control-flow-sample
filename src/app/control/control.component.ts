import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/control-base';
import CheckboxComponent from '../controls/checkbox/checkbox.component';
import LabelComponent from '../controls/label/label.component';
import TextInputComponent from '../controls/text-input/text-input.component';
import DropdownComponent from '../controls/dropdown/dropdown.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  standalone: true,
  imports: [
    CheckboxComponent,
    LabelComponent,
    TextInputComponent,
    DropdownComponent,
  ],
})
export class ControlComponent {
  @Input() control!: ControlBase;
  @Input() form!: FormGroup;
  placeholder!: ViewContainerRef;
}
