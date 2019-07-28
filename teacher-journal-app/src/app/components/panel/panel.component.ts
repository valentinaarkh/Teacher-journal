import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    
    constructor() {
        this.buttons = [
            {
                title: 'Students',
                isActive: true,
            },
            {
                title: 'Subjects',
                isActive: false,
            },
            {
                title: 'Statistics',
                isActive: false,
            },
            {
                title: 'Export',
                isActive: false,
            },
        ];
    }

    ngOnInit() {}
}
