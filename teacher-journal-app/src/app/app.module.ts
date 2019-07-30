import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './root/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { JournalButtonComponent } from './shared/components/journal-button/journal-button.component';
import { JournalHeaderComponent } from './components/journal-header/journal-header.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentsTableRowComponent } from './components/students/students-table-row/students-table-row.component';
import { HeadingDecorationPipe } from './common/helpers/heading-decoration.pipe';
import { HttpServiceService } from './common/services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddButtonComponent } from './shared/components/add-button/add-button.component';
import { AddStudentFormComponent } from './components/students/add-student-form/add-student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    JournalButtonComponent,
    JournalHeaderComponent,
    StudentsTableComponent,
    StudentsTableRowComponent,
    HeadingDecorationPipe,
    AddButtonComponent,
    AddStudentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
