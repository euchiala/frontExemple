import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscriptions-form',
  templateUrl: './subscriptions-form.component.html',
  styleUrls: ['./subscriptions-form.component.scss']
})
export class SubscriptionsFormComponent {

  constructor (private subscriptionService:SubscriptionService, private router:Router, private activatedRoute:ActivatedRoute){
    this.initForm();
  }
  form!: FormGroup;
  currentItemID:String="";

  initForm(): void {
    this.form = new FormGroup({
      type: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      number_of_sessions: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
    });
  }

  initFormSubscription(subscription :any):void{
    this.form = new FormGroup({
      type: new FormControl(subscription.type, [Validators.required]),
      price: new FormControl(subscription.price, [Validators.required]),
      number_of_sessions: new FormControl(subscription.number_of_sessions, [Validators.required]),
      description: new FormControl(subscription.description, [Validators.required]),
      duration: new FormControl(subscription.duration, [Validators.required]),
    })
}

  ngOnInit(): void {
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    if(!!this.currentItemID){
      this.subscriptionService.getById(this.currentItemID).subscribe((item1)=>{this.initFormSubscription(item1)});
    }else{
      this.initForm();
    }
  }
  
  
  onSub(): void {
    const objectToSubmit = { ...this.form.value};
    if (!!this.currentItemID){
    this.subscriptionService.update(this.currentItemID,objectToSubmit).subscribe(
      (response) => {
        this.router.navigate(['/subscriptions']);
      },
      (error) => {
        console.error(error);
      }
    );
    } else {
      this.subscriptionService.add(objectToSubmit).subscribe(
        (response) => {
          this.router.navigate(['/subscriptions']);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}

