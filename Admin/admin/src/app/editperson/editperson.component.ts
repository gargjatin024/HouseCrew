import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { apiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.scss']
})
export class EditpersonComponent implements OnInit {

  validationform!: FormGroup;
  submit: boolean | undefined;
  error = '';
  success = '';
  editdata:any;
  edit_id:any;

  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute,  private router: Router, private service:
    apiService) { }

    ngOnInit(): void {
      let _id = this.route.snapshot.params.id;
      this.service.editperson(_id)
      .pipe(first())
      .subscribe(
        data => {

          if (data.status == true) {
            this.editdata = data.persondata;
            this.edit_id = this.editdata[0]._id;
            this.validationform.controls['person'].setValue(this.editdata[0].person);
            this.validationform.controls['email'].setValue(this.editdata[0].email);
            this.validationform.controls['city'].setValue(this.editdata[0].city);
            this.validationform.controls['service'].setValue(this.editdata[0].service);
            this.validationform.controls['phone'].setValue(this.editdata[0].phone);
            this.validationform.controls['age'].setValue(this.editdata[0].age);
            this.validationform.controls['charges'].setValue(this.editdata[0].charges);
            this.validationform.controls['date'].setValue(this.editdata[0].date);
          
          } else {

          }
        },
        error => {
        });
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

      validSubmit(edit_id: any) {
      this.submit = true;
      if (this.validationform.invalid) {
        return;
      }
      this.validationform.value.edit_id = edit_id;

      this.service.updatepersondata(this.validationform.value)
        .pipe(first())
        .subscribe(
          data => {

            if (data.status == true) {
              this.success = data.msg;
              this.submit = false;
              this.edit_id = "";
              this.router.navigate(['/listperson', { success: "yes" }]);
            } else {
              this.error = data.msg;

            }
          },
          error => {

            this.error = error;

          });

      }

      }