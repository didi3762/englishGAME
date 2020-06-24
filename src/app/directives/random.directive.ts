import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Random]'
})
export class RandomDirective implements OnInit {

  el:HTMLElement;
  sum:number = 0;
  @Input() wordHeb:string = ''
  @Input() arrLange:number
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
      let rand = Math.floor(Math.random() * Math.floor(this.arrLange));
      this.randArr[i]= rand;
    }
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[5] = rand4;
 }


  constructor(private elRef:ElementRef) { 
    this.el = elRef.nativeElement;
    
    
  }
  ngOnInit(): void {
    
      this.rand()
    
    this.getRandInit.emit(this.randArr)
   
  }



}
