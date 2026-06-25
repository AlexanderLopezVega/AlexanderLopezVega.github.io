import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-tech-demo',
    imports: [MatButtonModule, MatCardModule, MatChipsModule],
    templateUrl: './tech-demo.html',
    styleUrl: './tech-demo.scss',
})
export class TechDemoComponent {
    //  Fields
    @Input({ required: true }) public name!: string;
    @Input() public description?: string | undefined;
    @Input() public genre?: string | undefined;
    @Input() public canView: boolean = true;
}