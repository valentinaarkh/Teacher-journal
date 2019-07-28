import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
      fetch('assets/data/students.json')
      .then((response) => response.json())
      .then((data) => {
          this.students = data;
      })
  }

}
