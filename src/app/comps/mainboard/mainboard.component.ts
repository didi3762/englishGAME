import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})
export class MainboardComponent implements OnInit {

  word:string = ''
  wordEngM:string = ''
  resTexM:string = 'sss'
  sum:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  wordsArr:string[] = [ '','','','' ]

  HebWords = [
    "אדום", "יום","שמיים","שבוע","פרח","שמש","ירח","לחם","צבע", "יין"
  ]

  englishWords = [
    'red','day','sky','week','flower', 'sun', 'moon', 'bread', 'color', 'wine'
  ]

  addRand(event){
    let HebIndex = this.HebWords.indexOf(this.word)
    let engIndex = this.englishWords.indexOf(this.wordEngM)
    if(this.wordEngM==''){
      this.sum = 0
    }
    else if(HebIndex == engIndex){
        this.sum++
    }else{
      this.sum--
    }
    console.log(event,this.wordsArr,this.wordEngM , this.word, HebIndex ,engIndex);
    this.wordEngM = this.englishWords[event[0]]
    this.wordsArr[0] = this.HebWords[event[1]];
    this.wordsArr[1] = this.HebWords[event[2]];
    this.wordsArr[2] = this.HebWords[event[3]];
    this.wordsArr[3] = this.HebWords[event[4]];
    this.wordsArr[event[5]] = this.HebWords[event[0]]
    this.resTexM = this.sum.toString()
  
   
  }



  

}
