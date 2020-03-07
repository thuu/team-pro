import {Component, OnInit} from '@angular/core';
import { TeamService } from './services/team.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tp-list',
  template: `
    <h1>Current week schedule</h1>
    
    <div class="row tp-event-list">
      <div class="col-sm-12">
        <div class="row" *ngFor="let event of list">
          <div class="col-sm-2">{{event.date}}</div>
          <div class="col-sm-4">{{event.title}}</div>
          <div class="col-sm-4">{{event.start}} - {{event.end}}, {{event.place}}</div>
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
