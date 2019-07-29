import { Component, OnInit } from '@angular/core';
import IStudent from '../../../common/entities/Student';
import { dataUrl } from '../../../common/constants/index';
import { HttpServiceService } from '../../../common/services/http-service.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
    private students: IStudent[];
    public condition: boolean = true;

    constructor(private httpService: HttpServiceService) {
        // this.httpService = HttpServiceService;
        this.students = [];
    }

    public ngOnInit(): void {
        this.httpService.getData(dataUrl)
            .subscribe((data: IStudents[]) => {
                this.students = data;
            });
      // fetch('assets/data/students.json')
      // .then((response) => response.json())
      // .then((data) => {
      //     this.students = data;
      // });
    }

}
