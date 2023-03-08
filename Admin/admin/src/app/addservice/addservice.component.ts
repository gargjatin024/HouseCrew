import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { apiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent implements OnInit {

  validationform!: FormGroup; 
  submit: boolean | undefined;
  //error = '';
  //success = '';
  dataList: any;
  error: any;
  success: any;
 /* editdatastatus: any;
  editdata:any;
  edit_id:any;*/

  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private service:
    apiService) { }

    ngOnInit(): void {
      this.validationform = this.formBuilder.group({
        service: ['', Validators.required],
        include: ['', Validators.required],
      });
      /*if (this.route.snapshot.paramMap.get('success')) {
        this.editdatastatus = "Data updated successfully";
      }*/
      this._fetchData();
    }

    get e() {
      return this.validationform.controls;
    }
    

    validSubmit() {
      this.submit = true;
      if (this.validationform.invalid) {
        return;
      }
      
      this.service.add(this.validationform.value)
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

    _fetchData() {

      this.service.getListData()
        .pipe(first())
        .subscribe(
          data => {
  
            if (data.status == true) {
              this.dataList = data.data;
            } else {
              this.error = "No data found";
            }
          },
          error => {
          });
    }

    delete(_id: any) {
      this.service.deleteservice(_id)
        .pipe(first())
        .subscribe(
          data => {
  
            if (data.status == true) {
              this._fetchData();
              this.success = data.msg;
            } else {
  
            }
          },
          error => {
          });
    }

   /* let _id = this.route.snapshot.params.id;
      this.service.editservice(_id)
      .pipe(first())
      .subscribe(
        data => {

          if (data.status == true) {
            this.editdata = data.seedsdata;
            this.edit_id = this.editdata[0]._id;
            this.validationform.controls['seedname'].setValue(this.editdata[0].seed_name);
            this.validationform.controls['seeddes'].setValue(this.editdata[0].seed_des);
            this.validationform.controls['seedprice'].setValue(this.editdata[0].seed_price);
          
          } else {

          }
        },
        error => {
        });
      this.validationform = this.formBuilder.group({
        seedname: ['', Validators.required],
        seeddes: ['', Validators.required],
        seedprice: ['', Validators.required]
      });
    }

    validSubmit(edit_id: any) {
      this.submit = true;
      if (this.validationform.invalid) {
        return;
      }
      this.validationform.value.edit_id = edit_id;
    this.service.updateseeddata(this.validationform.value)
        .pipe(first())
        .subscribe(
          data => {
  
            if (data.status == true) {
              this.success = data.msg;
              this.submit = false;
              this.edit_id = "";
              this.router.navigate(['/listseeds', { success: "yes" }]);
            } else {
              this.error = data.msg;
  
            }
          },
          error => {
  
            this.error = error;
  
          });
  
    }*/
}
