import { Injectable } from '@angular/core';
import { ComplianceInterface } from './admincompliance.interface';
@Injectable({
    providedIn: 'root'
})
export class ComplianceService {

    COMPLIANCE_DATA: ComplianceInterface[] = [
        // {
        //     date: '',
        //     user: '',
        //     ip: '',
        //     report: ''
        // }
    ];

    getCompliances() {
        return this.COMPLIANCE_DATA.slice();
    }

}