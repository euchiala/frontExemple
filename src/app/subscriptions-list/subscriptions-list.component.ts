import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss']
})
export class SubscriptionsListComponent  implements OnInit {
  constructor(private subscriptionService:SubscriptionService, private router:Router){
  }
  displayedColumns: string[] = ["type" , "price" , "number_of_sessions" , "description" , "duration", "actions"];
  dataSource = new MatTableDataSource();
  
  delete(id:String): void{
        this.subscriptionService.delete(id).subscribe(
          (response) => {
            window.location.reload();
          },
          (error) => {
            console.error(error);
          }
        );
      
  }
  ngOnInit() {
    this.subscriptionService.getAll().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
