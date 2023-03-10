import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MessageService {

    private login = new Subject<any>();
    private message = new Subject<any>();
    private prefrences: any = {};

    sendLoginMessage(message: any) {
        this.login.next(message);
    }

    getLoginMessage(): Observable<any> {
        return this.login.asObservable();
    }

    sendCommonMessage(message: any) {
        this.message.next(message);
    }

    getCommonMessage(): Observable<any> {
        return this.message.asObservable();
    }

    getAnalysis() {
        const analysisObj = localStorage.getItem('analysis');
        const analysis = analysisObj ? JSON.parse(analysisObj) : '';
        return analysis;
    }

    getSource() {
        const sourceObj = localStorage.getItem('dq-source-data');
        const source = sourceObj ? JSON.parse(sourceObj) : '';
        return source;
    }

    setPrefrences(key, object) {
        this.prefrences[key] = object;
    }

    getPrefrences(key) {
        return this.prefrences[key];
    }


}
