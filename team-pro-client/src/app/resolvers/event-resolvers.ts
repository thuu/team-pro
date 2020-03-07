import { Injectable } from "@angular/core";
import { TeamService } from "../services/team.service";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class EventListResolver implements Resolve<Observable<any[]>> {
  constructor(private teamService: TeamService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Node[]> {
    return this.teamService.schedule();
  }
}
