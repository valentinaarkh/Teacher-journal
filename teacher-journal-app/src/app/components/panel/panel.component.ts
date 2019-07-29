import { Component, OnInit } from '@angular/core';
import IButton from '../../common/entities/Button';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    private buttons: IButton[];

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
