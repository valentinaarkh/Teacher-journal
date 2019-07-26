import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journal-button',
  templateUrl: './journal-button.component.html',
  styleUrls: ['./journal-button.component.scss']
})
export class JournalButtonComponent implements OnInit {

    @Input() private isActive: boolean;

    constructor() { }

    private isButtonActive(isActive: boolean): any {
      return {
          'journal-button_active': isActive
      };
    }

}
