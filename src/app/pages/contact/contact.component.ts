import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onSubmitContact(form: NgForm) {
        if (form.valid) {
            console.log('Contact form submitted:', form.value);
            alert('Thank you for your message! We will get back to you within 24 hours.');
            form.resetForm();
        } else {
            alert('Please fill in all required fields.');
        }
    }
}