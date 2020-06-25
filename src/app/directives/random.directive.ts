import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, OnInit, AfterViewChecked } from '@angular/core';
import { MyDBserviceService } from '../services/my-dbservice.service';

@Directive({
  selector: '[Random]'
})
export class RandomDirective implements OnInit{

  el:HTMLElement;
  sum:number = 0;
  @Input() HebWords:string[] = []
  @Input() englishWords:string[] = []

  @Input() wordHeb:string = ''
  @Input() arrLange:number

  @Output() getHebWords = new EventEmitter<string[]>()
  @Output() getenglishWords = new EventEmitter<string[]>()
  @Output() getWord = new EventEmitter<string>()
  @Output() getRandInit = new EventEmitter<number[]>()
  @Output() getRand = new EventEmitter<number[]>()
  
  @HostListener('click')    rnd() {
    console.log('clicked');
       
       this.rand()
       this.getWord.emit(this.wordHeb)
       this.getRand.emit(this.randArr);
       
  }

  randArr:number[] = [1,2,3,4,5,6]

  rand(){
    for (let i = 0; i < this.randArr.length; i++) {
      let rand = Math.floor(Math.random() * Math.floor(40));
      this.randArr[i]= rand;
    }
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[5] = rand4;
 }


  constructor(private elRef:ElementRef,private wordsSV:MyDBserviceService) { 
    this.el = elRef.nativeElement;
  }
 
 
  ngOnInit(): void {
      console.log("init");

      this.wordsSV.httpGet(this.wordsSV.urlsJeson.jsonA)
      .subscribe(strResult => {
        this.HebWords = strResult['coloros']['HebWords']
        this.englishWords = strResult['coloros']['englishWords']
        console.log(this.englishWords);

   

    this.getHebWords.emit(this.HebWords)
    this.getenglishWords.emit(this.englishWords)
    this.rand()
    this.getRandInit.emit(this.randArr)
    
       })
}


}


// ng build --output-path docs --base-href https://bresleveloper.github.io/techingAvratech7NG/

