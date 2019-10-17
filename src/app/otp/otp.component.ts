import { Component, OnInit, ViewChild, OnDestroy, Renderer2} from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {


  screenFlag;
  otpText;
  errorFlag =false;
  errorNumberFlag=false;
// animated success
public lottieConfig: Object;
public lottieConfigerror: Object;
private anim: any;
private erroranim: any;
private animationSpeed: number = 1;
  constructor(private ApiService: ApiService, private router: Router, private renderer: Renderer2) {   

  this.lottieConfig = {
  path: 'assets/icons/animation-json/1708-success.json',
  renderer: 'canvas',
  autoplay: false,
  loop: false
};
this.lottieConfigerror = {
  path: 'assets/icons/animation-json/4903-failed.json',
  renderer: 'canvas',
  autoplay: false,
  loop: false
};

    this.renderer.addClass(document.body, 'otp');
}

ngOnDestroy() {
  this.renderer.removeClass(document.body, 'otp');
}

handleAnimation(anim: any) {
  this.anim = anim;
}
handleErrorAnimation(erroranim: any) {
  this.erroranim = erroranim;
}



successAnimation() {
  this.anim.play();
}

pause() {
  this.anim.destroy();
  this.erroranim.destroy();
}

setSpeed(speed: number) {
  this.animationSpeed = speed;
  this.anim.setSpeed(speed);
}



backBtn(){
  this.screenFlag = false;
}


ngOnInit() {

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});


  this.screenFlag=false;
}



isInt(value) {
  var er = /^-?[0-9]+$/;
  return er.test(value);
}

dispOtp;
userOTPlogin(mobile_number) {
  if(this.isInt(mobile_number)){
    if(mobile_number.length){
      this.ApiService.apirequest('OTPlogin', {number:mobile_number}).subscribe(data => {
        console.log(data.json());
        localStorage.setItem('otpcode',data.json().message)
        localStorage.setItem('token',data.json().token)
        this.dispOtp = data.json().message;
        if(data.json().status){
          this.screenFlag = true;
        }
        else{
          this.errorNumberFlag = true;
          this.destroySuccess(3000).then(() => {this.errorNumberFlag = false;});
        }
      },err => {console.error(err);
       this.errorNumberFlag = true;
       this.destroySuccess(3000).then(() => {this.errorNumberFlag = false;}); 
     })
    }
  }else{
    this.errorNumberFlag = true;
    this.destroySuccess(3000).then(() => {this.errorNumberFlag = false;});
  }
  
}

destroySuccess(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}






  onKey(event:any) { // without type info
     var target = event.srcElement;
     var textLength = target.value.length;
    if(textLength == 4){
      document.getElementById('partitioned').blur();
    }
    var target = event.srcElement;

    var  finalOtp = this.otpText;
    var storedOtp = localStorage.getItem('otpcode');
    console.log(storedOtp, finalOtp);
    if(parseInt(storedOtp) === parseInt(finalOtp)){
      this.successAnimation()

      this.destroySuccess(3000).then(() => {this.anim.stop();   this.router.navigate(['/home']);  });
      
this.errorFlag = false;
      console.log("done otp");
    }else{
      if(textLength == 4){
      this.errorFlag = true;
    }
      this.destroySuccess(9000).then(() => {this.errorFlag = false;});
    }
  }



}
