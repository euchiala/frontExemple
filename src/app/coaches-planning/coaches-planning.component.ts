import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanningService } from '../services/planning.service';
import { CoachService } from '../services/coach.service';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
    selector: 'app-coaches-planning',
    templateUrl: './coaches-planning.component.html',
    styleUrls: ['./coaches-planning.component.scss']
})
export class CoachesPlanningComponent {
    currentItemID: string = "";
    calendarVisible = true;
    calendar = []
    color: any;
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
        select: this.handleDateSelect.bind(this),
        eventsSet: this.handleEvents.bind(this)
    };
    currentEvents: EventApi[] = [];

    constructor(private planningService: PlanningService, private coachService: CoachService, private changeDetector: ChangeDetectorRef, private router: Router, private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.currentItemID = this.activatedRoute.snapshot.params["id"];

        setTimeout(() => {
            return this.planningService.getById(this.currentItemID).subscribe((data => {
                for (var i = 0; i < Object.keys(data).length; i++) {
                    var att = data[i].start.split("T", 1);
                    data[i]['start'] = att[0];
                    this.calendar = data;
                    this.color = data[i]['color'];
                }
            }))
        }, 100);
        setTimeout(() => {
            this.calendarOptions = {
                events: this.calendar,
            };
        }, 400);
    }
    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }

    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {

        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                title,
                color: this.color,
                start: selectInfo.startStr,
                end: selectInfo.endStr,

                allDay: selectInfo.allDay
            });
            let object = {
                'coachId': this.currentItemID,
                'title': title,
                'start': selectInfo.startStr,
                'color': this.color
            }
            this.planningService.add(object).subscribe((res) => {
            },
                (error) => {
                    console.error(error);
                })
        }
    }



    handleEvents(events: EventApi[]) {
        this.currentEvents = events;
        this.changeDetector.detectChanges();
    }
}
