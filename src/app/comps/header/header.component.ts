import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() wordEng:string = "ssss"

  constructor() { }

  ngOnInit(): void {
  }

  wordsArr = [
    "אדום", "פרח","שמש","ירח","שבוע","צבע","שמיים","יין","לחם","יום"
  ]

}
