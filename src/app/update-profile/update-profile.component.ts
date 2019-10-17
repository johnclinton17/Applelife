import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  pagetype;
mobile_no;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.lottieConfig = {
      path: 'assets/icons/animation-json/input-tick.json',
      renderer: 'canvas',
      autoplay: false,
      loop: false
    };

   }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

textMobile(evernt : any){
	var target = event.srcElement;
     var textLength = this.mobile_no.length;
if(textLength === 10){
this.anim.play();
}
else{
	this.anim.stop();
}
}
  updateMobile(){

	this.router.navigate(['/feedback']);
}
  ngOnInit() {

  	this.route.params.subscribe(params => {
      this.pagetype = params['pageType'];
      console.log(this.pagetype);
    });

  }

}
