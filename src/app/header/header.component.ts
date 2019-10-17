//import all dependency file
import { Component, OnInit } from '@angular/core';
import { MzNavbarModule, MzSidenavModule, MzButtonModule, MzDropdownModule, MzBadgeModule } from 'ngx-materialize';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  
   myFunction() {
  var x = document.getElementById("myDIV");
  console.log(x.innerText);
  if (x.innerText === "English") {
    x.innerText = "हिंदी";
  } else {
    x.innerText = "English";
  }
}

logOut(){
 this.router.navigate(['/login']); 
  localStorage.removeItem('token');
  localStorage.removeItem('expirecheck');
}

}
