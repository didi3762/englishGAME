import { Component, OnInit, Input } from '@angular/core';
import { MyDBserviceService } from 'src/app/services/my-dbservice.service';

@Component({
  selector: 'mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})
export class MainboardComponent implements OnInit {

  word:string = ''
  wordEngM:string = ''
  resTexM:string = '0'
  sum:number = 0
  HebWords:string[] = []
  englishWords:string[] = []
  @Input() rand:number[]= []

  constructor() { }

  ngOnInit(): void { }

  wordsArr:string[] = [ '','','','' ];


  

  addRand(event){
    let HebIndex = this.HebWords.indexOf(this.word)
    let engIndex = this.englishWords.indexOf(this.wordEngM)
    if(this.wordEngM==''||this.wordEngM==null){
      console.log(this.sum);
      this.sum = 0
    }
    else if(HebIndex == engIndex){
        this.sum++
        console.log(this.sum);
    }else{
      console.log(this.sum);
      this.sum--
    }
    this.wordEngM = this.englishWords[event[0]]
    this.wordsArr[0] = this.HebWords[event[1]];
    this.wordsArr[1] = this.HebWords[event[2]];
    this.wordsArr[2] = this.HebWords[event[3]];
    this.wordsArr[3] = this.HebWords[event[4]];
    this.wordsArr[event[5]] = this.HebWords[event[0]]
    this.resTexM = this.sum.toString()

 }



  

}
