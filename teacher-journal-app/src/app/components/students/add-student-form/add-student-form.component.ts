import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent implements OnInit {
    public headings: string[];

    constructor() {
      this.headings = ['First name', 'Last name', 'Adress', 'Description'];
    }

    ngOnInit() {
    }

}
