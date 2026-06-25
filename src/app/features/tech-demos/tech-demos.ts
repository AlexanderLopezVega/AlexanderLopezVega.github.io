import { Component } from '@angular/core';
import { TechDemo } from './tech-demo/tech-demo.d';
import { TechDemoComponent } from './tech-demo/tech-demo';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrailingTechDemoComponent } from './trailing-tech-demo/trailing-tech-demo';

@Component({
    selector: 'app-tech-demos',
    imports: [MatGridListModule, TechDemoComponent, TrailingTechDemoComponent],
    templateUrl: './tech-demos.html',
    styleUrl: './tech-demos.scss',
})
export class TechDemosComponent {
    //  Fields
    protected readonly data: TechDemo[] = [
        {
            name: 'Relative Movement Physics',
            genre: 'Physics',
            description: 'Control a character upon a moving platform using physics.',
            canView: false
        },
    ];
}