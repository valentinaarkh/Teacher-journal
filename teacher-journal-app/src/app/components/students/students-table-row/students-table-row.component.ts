import { Component, OnInit, Input } from '@angular/core';
import IStudent from '../../../common/entities/Student';

@Component({
  selector: '[app-students-table-row]',
  templateUrl: './students-table-row.component.html',
  styleUrls: ['./students-table-row.component.scss']
})
export class StudentsTableRowComponent implements OnInit {
    @Input() private student: IStudent;
    @Input() private isFirst: boolean;
    consdition: boolean = false;

    headings:  string[];

    constructor() {
        this.headings = ['id', 'first_name', 'last_name', 'adress', 'description'];
    }

    ngOnInit() {
    }

}
