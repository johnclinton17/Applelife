import { Component, Renderer2 } from '@angular/core';
import { ApiService } from './api/api.service'
import { Router, RouterModule, ActivatedRoute, NavigationStart } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
          transition('home => updateaccount, updateaccount => profile , profile => feedback, home => nominee, home => surrender, nominee => addnominee', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('.300s ease', style({ transform: 'translateX(-100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('.300s ease', style({ transform: 'translateX(0)' }))),
            ]),
        ]),
          transition('profile=> updateaccount, updateaccount => home, feedback => profile,nominee => home ,surrender => home, addnominee => nominee',[
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('.300s ease', style({ transform: 'translateX(100%)' })),
                ]),
                // and now reveal the enter
                query(':enter', animate('.300s ease', style({ transform: 'translateX(0)' }))),
            ]),
        ]),
    ])
]
})
export class AppComponent {
    previousUrl='';
    getDepth(outlet) {
        return outlet.activatedRouteData['depth'];
    }
    
    constructor(private renderer: Renderer2, private router: Router) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    if (this.previousUrl) {
                        this.renderer.removeClass(document.body, this.previousUrl);
                    }
                    let currentUrlSlug ='';
                         currentUrlSlug = event.url.slice(1)
                    if (currentUrlSlug) {
                        console.log(currentUrlSlug);
                        console.log('previous',this.previousUrl);
                        var str = currentUrlSlug.replace('/' , '')
                        if(this.previousUrl){


                        var prestr = this.previousUrl.replace('/' , '')
                        this.renderer.removeClass(document.body, prestr);
                    }
                        this.renderer.addClass(document.body, str);
                    }
                    this.previousUrl = currentUrlSlug;
                }
            });
    
    }
}
