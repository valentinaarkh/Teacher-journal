import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IStudent from '../../../common/entities/Student';
import { state, style, transition, animate } from '@angular/animations';
import { Store } from '@ngxs/store';
import { AddStudent } from '../../../redux/actions/student-table.actions';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss'],
  animations: [
  ],
})
export class AddStudentFormComponent implements OnInit {
    public newStudent: IStudent;

    @Output() public toggleStudentForm: EventEmitter = new EventEmitter<void>();

    public addStudentForm: FormGroup = new FormGroup ({
        firstName: new FormControl('', [
            Validators.required
        ]),
        lastName: new FormControl('', [
            Validators.required
        ]),
        adress: new FormControl(''),
        description: new FormControl(''),
    });

    constructor(private store: Store) {

    }

    private onSubmit(student: IStudent): void {
        this.store.dispatch(new AddStudent(student))
            .subscribe(() => {
                this.newStudent = this.addStudentForm.value;
                console.log('Submited', this.newStudent);
                this.addStudentForm.reset();
                this.toggleStudentForm.emit();
            });
    }
}
