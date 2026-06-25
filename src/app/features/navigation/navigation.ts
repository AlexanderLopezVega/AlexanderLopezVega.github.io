import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-navigation',
    imports: [MatButtonModule],
    templateUrl: './navigation.html',
    styleUrl: './navigation.scss',
})
export class NavigationComponent {
    //  Methods
    public scrollTo(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
