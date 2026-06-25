import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { TechDemosComponent } from '../tech-demos/tech-demos';
import { GamesComponent } from '../games/games';
import { NavigationComponent } from '../navigation/navigation';

@Component({
    selector: 'app-home',
    imports: [AboutComponent, GamesComponent, HeroComponent, NavigationComponent, TechDemosComponent],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class HomeComponent {

}
