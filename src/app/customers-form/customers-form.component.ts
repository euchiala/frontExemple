import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { SubscriptionService } from '../services/subscription.service';
import { CustomerSubscriptionService } from '../services/customer-subscription.service';

@Component({
    selector: 'app-customers-form',
    templateUrl: './customers-form.component.html',
    styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent {

    constructor(private customerService: CustomerService, private customerSubscriptionService: CustomerSubscriptionService, private subscriptionService: SubscriptionService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.initForm();
        this.subscriptionService.getAll().subscribe((data) => {
            this.subscriptionList = data;
        });
    }
    form!: FormGroup;
    currentItemID: String = "";
    subscriptions = new FormControl();
    subscriptionList = [];
    selectedSubscription: any;

    initForm(): void {
        this.form = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            phone_number: new FormControl(null, [Validators.required]),
            startDate: new FormControl(null, [Validators.required]),
            endDate: new FormControl(null, [Validators.required]),
        });
    }

    initFormCustomer(customer: any): void {
        this.form = new FormGroup({
            name: new FormControl(customer.name, [Validators.required]),
            phone_number: new FormControl(customer.phone_number, [Validators.required]),
            subscriptions: new FormControl(customer.subscriptions, [Validators.required]),
            startDate: new FormControl(customer.startDate, [Validators.required]),
            endDate: new FormControl(customer.endDate, [Validators.required]),
        })
    }

    ngOnInit(): void {
        this.currentItemID = this.activatedRoute.snapshot.params["id"];
        if (!!this.currentItemID) {
            this.customerService.getById(this.currentItemID).subscribe((item) => {
                this.customerSubscriptionService.getById(this.currentItemID).subscribe((data) => {
                    console.log(data)
                    var formItem = {
                        name: item["name"],
                        phone_number: item["phone_number"],
                        startDate: data[0]["startDate"],
                        endDate: data[0]["endDate"],
                    }
                    this.initFormCustomer(formItem)
                })
            });
        } else {
            this.initForm();
        }
    }


    onSub(): void {
        const startDate = new Date(this.form.value.startDate);
        const formattedstartDate = startDate.toISOString().slice(0, 10);
        const endDate = new Date(this.form.value.endDate);
        const formattedEndDate = endDate.toISOString().slice(0, 10);
        const objectToSubmit = { ...this.form.value };
        if (!!this.currentItemID) {
            this.customerService.update(this.currentItemID, objectToSubmit).subscribe((response) => {
                this.customerSubscriptionService.getById(this.currentItemID).subscribe((subsIds) => {
                    if (subsIds.length > 0) {
                        this.customerSubscriptionService.delete(this.currentItemID).subscribe(
                            (response) => {
                                let object = {
                                    'customerId': this.currentItemID,
                                    'subscriptionId': this.selectedSubscription,
                                    'startDate': formattedstartDate,
                                    'endDate': formattedEndDate
                                }
                                this.customerSubscriptionService.add(object).subscribe((res) => {
                                },
                                    (error) => {
                                        console.error(error);
                                    })

                                this.router.navigate(['/customers']);
                            },
                            (error) => {
                                console.error(error);
                            });
                    } else {
                        let object = {
                            'customerId': this.currentItemID,
                            'subscriptionId': this.selectedSubscription,
                            'startDate': formattedstartDate,
                            'endDate': formattedEndDate
                        }
                        console.log(object);
                        this.customerSubscriptionService.add(object).subscribe((res) => {
                        },
                            (error) => {
                                console.error(error);
                            })
                        this.router.navigate(['/customers']);
                    }
                });
            },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            this.customerService.add(objectToSubmit).subscribe(
                (response) => {
                    let object = {
                        'customerId': response.id,
                        'subscriptionId': this.selectedSubscription,
                        'startDate': formattedstartDate,
                        'endDate': formattedEndDate
                    }
                    this.customerSubscriptionService.add(object).subscribe((res) => {
                    },
                        (error) => {
                            console.error(error);
                        })
                    this.router.navigate(['/customers']);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }

}

