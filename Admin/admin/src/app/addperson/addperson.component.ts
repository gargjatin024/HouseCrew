import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { apiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.scss']
})
export class AddpersonComponent implements OnInit {

  validationform!: FormGroup; 
  submit: boolean | undefined;
  error = '';
  success = '';

  constructor(public formBuilder: FormBuilder, private router: Router, private service:
    apiService) { }

    ngOnInit(): void {
      this.validationform = this.formBuilder.group({
        person: ['', Validators.required],
        email: ['', Validators.required],
        city: ['', Validators.required],
        service: ['', Validators.required],
        phone: ['', Validators.required],
        age: ['', Validators.required],
        charges: ['', Validators.required],
        date: ['', Validators.required],
      });
    }

    get e() {
      return this.validationform.controls;
    }

    validSubmit() {
      this.submit = true;
      if (this.validationform.invalid) {
        return;
      }
      
      this.service.adds(this.validationform.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data.status == true) {
              this.success = data.msg;
              this.submit = false;
              this.validationform.reset();
            } else {
              this.error = data.msg;
  
            }
          },
          error => {
            this.error = error;
          });
  
    }
}
