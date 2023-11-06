import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AttHistoService } from '../services/att-histo.service';
import { formatDate } from '../config/formatDate'

@Component({
  selector: 'app-customers-sheet',
  templateUrl: './customers-sheet.component.html',
  styleUrls: ['./customers-sheet.component.scss']
})
export class CustomersSheetComponent implements OnInit {
  displayedColumns: string[] = ["number", "date", "time"];
  dataSource = new MatTableDataSource<any>();
  currentItemID: any;

  constructor(
    private attHistoService: AttHistoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    this.attHistoService.getAll().subscribe((data) => {
      this.dataSource.data = data.filter((item: any) => item.customerId == this.currentItemID);
      this.dataSource.data.forEach(element => {
        var dateTime = element.attTime
        const date = new Date(dateTime);
        const time = date.toLocaleTimeString();
        element.attTime = formatDate(element.attTime)
        element.time = time
      });
    });
  }
}