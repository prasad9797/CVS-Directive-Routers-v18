import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  contactUsFormValues!: { name: string; message: string };

  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm() {
    if (this.contactUsForm.valid) {
      this.contactUsFormValues = this.contactUsForm.value;
      this.isFormSubmitted = true;
    }
  }
}
