import {Component, OnInit} from '@angular/core';
import { TeamService } from './services/team.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tp-list',
  template: `
    <h1>Current week schedule</h1>

    <div class="row tp-event-item" *ngFor="let event of list">
      <div class="col-sm-2 my-auto">
        <div class="event-item-col">
          <div class="week-day">{{event.startDate | date:'EEE'}}</div>
          <div class="date">{{event.startDate | date:'dd/MM'}}</div>
        </div>
      </div>
      <div class="col-sm-5 my-auto">
        <div class="event-item-col">
          <div class="event-name">{{event.title}}</div>
          <div class="place">{{event.place}}</div>
          <div class="time">{{event.startDate | date:'H:mm'}} - {{event.endDate | date:'H:mm'}}</div>
        </div>
      </div>
      <div class="col-sm-5 text-right my-auto">
        <div class="event-item-col">
          <div class="reg-info">
            <div class="reg-info-item">
              <div class="title">Forwarders</div>
              <div class="count">{{event.forwarderCount}}</div>
            </div>
            <div class="reg-info-item">
              <div class="title">Defenders</div>
              <div class="count">{{event.defenderCount}}</div>
            </div>
            <div class="reg-info-item">
              <div class="title">Goalies</div>
              <div class="count">{{event.goalieCount}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ListComponent implements OnInit{
  list: any[];

  constructor(private teamService: TeamService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.list = data['eventList'];
    });
  }
}
