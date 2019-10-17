import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, NavigationStart } from '@angular/router';

declare var $ : any ;
@Component({
  selector: 'app-surrender-policy',
  templateUrl: './surrender-policy.component.html',
  styleUrls: ['./surrender-policy.component.css']
})
export class SurrenderPolicyComponent implements OnInit{
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  bottomflag = true; 

  @HostListener('touchmove', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
    //console.log('move not working');
  }

  constructor(route: ActivatedRoute,private router: Router,) {
  }

  ngOnInit() {

    
  }
  

success(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


  checkEdge(event) {
    this.edge = event;
    if(event.bottom==false){
      $(".swipe-card").css({ "transform": "translate(0 ,1000px)", "transition": "20s linear"});
      $(".animation-circle-ripples").addClass("animate");
      $(".hide-move-div h5").css({ "opacity": "0" , "transition": ".5s linear"});
      $(".hide-when-slide").css({ "opacity": "0" , "transition": ".5s linear"});
      $(".hidden-text-layer").css({ "opacity": "1" , "transition": ".5s linear"});
         this.success(8500).then(() => {this.router.navigate(['/feedback']);  });
    }
    // this.bottomflag = event.bottom;
    //console.log('edge:', event.bottom);
   // console.log('started:', event.bottom);
  }
}
