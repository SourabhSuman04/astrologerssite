import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-askquestion',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './askquestion.component.html',
  styleUrl: './askquestion.component.css'
})
export class AskquestionComponent implements OnInit {

    constructor(private commonservcie:CommonService) { }

    ngOnInit(): void {
    }

    onSubmitQuestion(form: NgForm) {
        if (form.valid) {
            console.log('Question form submitted:', form.value);
            this.commonservcie.askquestion(form.value).subscribe((res:any)=>{
alert('Thank you for your question! You will receive a personalized response within 24-48 hours. Payment instructions have been sent to your email.');
            })

            
            form.resetForm();
        } else {
            alert('Please fill in all required fields.');
        }
    }
}