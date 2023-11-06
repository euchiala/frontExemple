import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions,  EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { PlanningService } from '../services/planning.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    calendar = [];
    calendarVisible = true;
    currentEvents: EventApi[] = [];
    calendarOptions: CalendarOptions = {
        plugins: [
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
        ],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
    };

    constructor(private changeDetector: ChangeDetectorRef, private planningService: PlanningService) {
    }

    ngOnInit() {
        setTimeout(() => {
            return this.planningService.getAll().subscribe((data => {
                for (var i = 0; i < Object.keys(data).length; i++) {
                    var att = data[i].start.split("T", 1);
                    data[i]['start'] = att[0];
                    this.calendar = data;
                }

            }))
        }, 100);
        setTimeout(() => {
            this.calendarOptions = {
                events: this.calendar,
            };
        }, 400);
    }
}
