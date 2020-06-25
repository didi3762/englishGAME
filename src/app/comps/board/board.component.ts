import { Component, OnInit, Input } from '@angular/core';
import { MyDBserviceService } from 'src/app/services/my-dbservice.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() wordHeb:string = ''
  @Input() wordRand:string = ''
  @Input() arrLange:number 

  constructor(public wordsSVC:MyDBserviceService) { 
   
  }

  ngOnInit(): void {
  }


}
