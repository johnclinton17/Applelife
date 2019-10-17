import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api/api.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ApiService: ApiService, private router: Router) { }

userDetails :any;
mobileNo;
emailId;
  ngOnInit() {
  	this.getDetails();
this.userDetails={};
  }

findandReplaceMobileNumber(str){
  var res = str.substring(2, 8);
  res=str.replace(res, "XXX XXX")
  return res;
}
  clearstorage(){   
  localStorage.setItem('addnominee', 'false')
  }
  findandReplaceEmail(str){
  var res = str.substring(2, str.indexOf('@'));
  res=str.replace(res, "XXXXXXX")
  return res;
  }

getDetails() {
      this.ApiService.getRequest(' https://services.dt-Apple life.com/party/parties/members/aaf625c1-a5dd-4706-ad61-870538129fdb').subscribe(data => {
       if(data){  	
        this.userDetails = data.json();
        this.mobileNo = this.findandReplaceMobileNumber(this.userDetails.contacts[0].contactInfo);
        this.emailId =this.findandReplaceEmail(this.userDetails.contacts[1].contactInfo);
       }
    },err => {console.error(err);})
    }

slides = [{
  "policyNumber": "K05GKUE457KP199",
  "proposalNumber": "QM00006161",
  "planCode": "GOLD2",
  "policyStatus": "TERMINATED",
  "proposalStatus": "INFORCE",
  "insured": {
    "id": "2da868f6-dc15-4359-99cf-bdebae43f398"
  },
  "sumAssured": 100000,
  "product": {
    "code": "138N062V01",
    "name": "Apple  Life Group Term Plus Insurance Plan",
    "master": false
  },
  "inceptionDate": "2019-03-28",
  "coverages": [
    {
      "productCode": "MBK-0001-DB",
      "sumAssured": 100000,
      "premium": 12.441,
      "paymentFrequency": "4"
    },
    {
      "productCode": "MBK-0001-ACDMB",
      "sumAssured": 100000,
      "premium": 4.524,
      "paymentFrequency": "4"
    }
  ],
  "masterPolicyNumber": "ALMBK1903140001",
  "masterPolicyHolderName": "One Mobikwik Systems Private Limited.",
  "premiumInfo": {
    "installPrem": 20,
    "stampDutyAmount": 0,
    "regularPremium": 16.965,
    "cgstAmount": 1.53,
    "igstAmount": 0,
    "sgstAmount": null
  },
  "nominees": [
    {
      "partyId": "55cd5e6b-5e11-4f53-b191-22ea63b92f7e",
      "firstName": "My Wife",
      "middleName": null,
      "lastName": null,
      "gender": "Female",
      "dateOfBirth": null,
      "relationOfNominee": "WIFE",
      "nominationPercentage": 100,
      "address": null,
      "emailId": null,
      "mobile": null,
      "age": 40
    }
  ],
  "paymentFrequency": "4",
  "freelookPeriod": "30",
  "premiumPayingTerm": "12",
  "premiumDueDate": "2019-03-13T18:30:00.000+0000",
  "policyTerm": "12",
  "dispatchDate": "2019-03-27T06:31:00.000+0000",
  "docUrl": "http://somedocument.com",
  "expiryDate": "2020-03-12T18:30:00.000+0000",
  "issueDate": "2019-04-09T18:30:00.000+0000"
},
  {
  "policyNumber": "L06GKUE457KP123",
  "proposalNumber": "QM00006161",
  "planCode": "GOLD2",
  "policyStatus": "TERMINATED",
  "proposalStatus": "INFORCE",
  "insured": {
    "id": "2da868f6-dc15-4359-99cf-bdebae43f398"
  },
  "sumAssured": 100000,
  "product": {
    "code": "138N062V01",
    "name": "Apple  Life Group Term Plus Insurance Plan",
    "master": false
  },
  "inceptionDate": "2019-03-28",
  "coverages": [
    {
      "productCode": "MBK-0001-DB",
      "sumAssured": 100000,
      "premium": 12.441,
      "paymentFrequency": "4"
    },
    {
      "productCode": "MBK-0001-ACDMB",
      "sumAssured": 100000,
      "premium": 4.524,
      "paymentFrequency": "4"
    }
  ],
  "masterPolicyNumber": "ALMBK1903140001",
  "masterPolicyHolderName": "One Mobikwik Systems Private Limited.",
  "premiumInfo": {
    "installPrem": 20,
    "stampDutyAmount": 0,
    "regularPremium": 16.965,
    "cgstAmount": 1.53,
    "igstAmount": 0,
    "sgstAmount": null
  },
  "nominees": [
    {
      "partyId": "55cd5e6b-5e11-4f53-b191-22ea63b92f7e",
      "firstName": "My Wife",
      "middleName": null,
      "lastName": null,
      "gender": "Female",
      "dateOfBirth": null,
      "relationOfNominee": "WIFE",
      "nominationPercentage": 100,
      "address": null,
      "emailId": null,
      "mobile": null,
      "age": 40
    }
  ],
  "paymentFrequency": "4",
  "freelookPeriod": "30",
  "premiumPayingTerm": "12",
  "premiumDueDate": "2019-03-13T18:30:00.000+0000",
  "policyTerm": "12",
  "dispatchDate": "2019-03-27T06:31:00.000+0000",
  "docUrl": "http://somedocument.com",
  "expiryDate": "2020-03-12T18:30:00.000+0000",
  "issueDate": "2019-04-09T18:30:00.000+0000"
}
  ];
  slideConfig = {
    "slidesToShow": 1, 'dots': true, "slidesToScroll": 1, 'centerMode': true, 'infinite': false,	'responsive': [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        dots: true,
        focusOnSelect: false
      }
    },
    {
      breakpoint: 440,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        dots: true,
        focusOnSelect: false
      }},{
      breakpoint: 361,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true,
        focusOnSelect: false
      }
    }
  ]
};
  
 

}
