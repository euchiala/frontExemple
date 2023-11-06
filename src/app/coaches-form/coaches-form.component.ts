import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coaches-form',
  templateUrl: './coaches-form.component.html',
  styleUrls: ['./coaches-form.component.scss']
})
export class CoachesFormComponent {
  constructor (private coachService:CoachService, private router:Router, private activatedRoute:ActivatedRoute){
    this.initForm();
  }
  form!: FormGroup;
  currentItemID:String="";

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      birth_date: new FormControl(null, [Validators.required]),
      phone_number: new FormControl(null, [Validators.required]),
      adress: new FormControl(null, [Validators.required]),
      cin: new FormControl(null, [Validators.required]),
      speciality: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required])
    });
  }

  initFormCoach(coach :any):void{
    this.form = new FormGroup({
      name: new FormControl(coach.name, [Validators.required]),
      birth_date: new FormControl(coach.birth_date, [Validators.required]),
      phone_number: new FormControl(coach.phone_number, [Validators.required]),
      adress: new FormControl(coach.adress, [Validators.required]),
      cin: new FormControl(coach.cin, [Validators.required]),
      speciality: new FormControl(coach.speciality, [Validators.required]),
      color: new FormControl(coach.color, [Validators.required])
    })
}

  ngOnInit(): void {
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    if(!!this.currentItemID){
      this.coachService.getById(this.currentItemID).subscribe((item1)=>{this.initFormCoach(item1)});
    }else{
      this.initForm();
    }
  }
  
  
  onSub(): void {
    const date = new Date(this.form.value.birth_date);
    const formattedDate = date.toISOString().slice(0, 10);
    const objectToSubmit = { ...this.form.value, birth_date: formattedDate };
    if (!!this.currentItemID){
    this.coachService.update(this.currentItemID,objectToSubmit).subscribe(
      (response) => {
        this.router.navigate(['/coaches']);
      },
      (error) => {
        console.error(error);
      }
    );
    } else {
      this.coachService.add(objectToSubmit).subscribe(
        (response) => {
          this.router.navigate(['/coaches']);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}

