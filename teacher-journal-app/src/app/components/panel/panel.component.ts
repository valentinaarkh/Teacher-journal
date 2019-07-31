import { Component, OnInit } from '@angular/core';
import IButton from '../../common/entities/Button';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    private buttons: IButton[];
    public currentPanelId: number = 0;

    constructor() {
        this.buttons = [
            {
                title: 'Students',
                isActive: true,
                id: 0,
            },
            {
                title: 'Subjects',
                isActive: false,
                id: 1,
            },
            {
                title: 'Statistics',
                isActive: false,
                id: 2,
            },
            {
                title: 'Export',
                isActive: false,
                id: 3,
            },
        ];
    }

    switchSection(e) {
        this.currentPanelId = Number(e.target.id);
        this.buttons.forEach((button) => {
            if (this.currentPanelId === button.id) {
                button.isActive = true;
            } else {
                button.isActive = false;
            }
        });
    }

    ngOnInit() {}
}
