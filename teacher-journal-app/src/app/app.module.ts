import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { PanelComponent } from './components/panel/panel.component';
import { JournalButtonComponent } from './shared/components/journal-button/journal-button.component';
import { JournalHeaderComponent } from './components/journal-header/journal-header.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentsTableRowComponent } from './components/students/students-table-row/students-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    JournalButtonComponent,
    JournalHeaderComponent,
    StudentsTableComponent,
    StudentsTableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
