import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() wordHeb:string = ''
  @Input() wordRand:string = ''
  @Input() arrLange:number 

  constructor() { }

  ngOnInit(): void {
  }

  englishWords = [
    'red','day','sky','week','flower', 'sun', 'moon', 'bread', 'color', 'wine'
  ]

}
