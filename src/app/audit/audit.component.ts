import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

import { Audit, User } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' })
export class AuditComponent implements OnInit
{
    audits = [];
    currentUser: User;
    noOfRecordsperPage: number;
    pageNum: number;
    showRecords = [];
    format: string = 'dd/MM/yyyy; hh:mm:ss';
    public searchTerm: string;
    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    )
    {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit()
    {
        this.loadAllAudits();
    }

    private loadAllAudits()
    {
        this.auditService.getAll()
            .pipe(first())
            .subscribe(audits => {this.audits = audits;
                // this.noOfRecordsperPage =  [].constructor(Math.round(1));
            });
                // this.showRecords = this.audits;
                // this.setRecords(1);
                
    }

    formatChange(value){
        this.format = value === '12' ? 'dd/MM/yyyy; hh:mm:ss' : 'dd/MM/yyyy; HH:mm:ss';
       }

    //    noOfRecords(value){
    //        this.pageNum = value;
    //        value = (value==='All') ? this.audits.length : value;
    //        this.noOfRecordsperPage =  [].constructor(Math.round(this.audits.length/value));
    //     }

    //     setRecords(num) {
    //         this.showRecords = Array.from({ length: Math.ceil(this.audits.length / this.pageNum ) }, (v, i) =>
    //         this.audits.slice(i * this.pageNum , i * this.pageNum  + this.pageNum ))[num-1];
    //     }


       

}