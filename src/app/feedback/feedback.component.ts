import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;

  constructor(private router: Router) { 
    this.lottieConfig = {
      path: 'assets/icons/animation-json/1708-success.json',
      renderer: 'canvas',
      autoplay: false,
      loop: false
    };

  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }

elementSad;
elementOkay;
elementLove;
  ngOnInit() {
     this.elementSad = document.getElementById("sad");
     this.elementOkay = document.getElementById("okay");
     this.elementLove = document.getElementById("love");
  }
  switchSad(){
this.elementSad.classList.add("draw");
this.elementOkay.classList.remove("draw");
this.elementLove.classList.remove("draw");
  }
  switchOkay(){
this.elementSad.classList.remove("draw");
this.elementOkay.classList.add("draw");
this.elementLove.classList.remove("draw");
  }

  switchLove(){
this.elementSad.classList.remove("draw");
this.elementOkay.classList.remove("draw");
this.elementLove.classList.add("draw");
  }

  dealyPromise(ms){
    return new Promise(resolve=> setTimeout(resolve,ms))
  }

  submitFeedback(){
let wrapperElement=document.getElementsByClassName('wrapper') as HTMLCollectionOf<HTMLElement>;
wrapperElement[0].style.display = 'none';
let wrapperElement2 = document.getElementsByClassName('wrapper2') as HTMLCollectionOf<HTMLElement>;
wrapperElement2[0].style.opacity = '1';
this.dealyPromise(3000).then(()=>{this.router.navigate(['/home']);})
this.anim.play();
  }

}
