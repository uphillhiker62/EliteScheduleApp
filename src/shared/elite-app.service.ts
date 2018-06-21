import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/Operators';

@Injectable()
export class EliteApi {
    constructor(private http: HttpClient) {}
    private currentTourney: any = {};

    private baseUrl = "https://elite-schedule-1397e.firebaseio.com";

    getTournaments(): Observable<any> {
        return this.http.get(`${this.baseUrl}/tournaments.json`);
    }

    getTournamentData(tourneId: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneId}.json`).pipe(
            map((response: Response) => {
                this.currentTourney = response.json();
                return response.json()
            })
        )
    }
}