import { Component, OnInit, Input } from '@angular/core';
import { MyDBserviceService } from 'src/app/services/my-dbservice.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() wordEng:string = ""
  

  constructor(private wordsSV:MyDBserviceService) {
     
   }

  ngOnInit(): void {
  }


 

}
