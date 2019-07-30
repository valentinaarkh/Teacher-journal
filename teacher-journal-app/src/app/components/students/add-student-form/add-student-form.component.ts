import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent implements OnInit {
    public headings: string[];
    public addStudentForm = new FormGroup ({
        firstName: new FormControl('', [
            Validators.required
        ]),
        lastName: new FormControl('', [
            Validators.required
        ]),
        adress: new FormControl(''),
        description: new FormControl(''),
    });

    constructor() {}

    addStudent(e) {
        console.log(e);
    }

    onSubmit() {
        console.log('Submited', this.addStudentForm.value)
    }

    ngOnInit() {
    }

}
