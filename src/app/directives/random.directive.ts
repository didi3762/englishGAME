import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Random]'
})
export class RandomDirective implements OnInit {

  el:HTMLElement;
  sum:number = 0;
  @Input() arrLange:number
  @Output() getRandInit = new EventEmitter<number[]>()
  @Output() getRand = new EventEmitter<number[]>()
  @HostListener('click')    rnd() {
    console.log('clicked');
    for (let i = 0; i < 5; i++){
      this.rand(i)
    }
      this.sum++;
      this.randArr[6] = this.sum
       this.getRand.emit(this.randArr);
  }

  randArr:number[] = [1,2,3,4,5,6,7]

  rand(num:number){
    let rand = Math.floor(Math.random() * Math.floor(this.arrLange));
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[num]= rand;
    this.randArr[5] = rand4;
    
  }


  constructor(private elRef:ElementRef) { 
    this.el = elRef.nativeElement;
    
    
  }
  ngOnInit(): void {
    for (let i = 0; i < 5; i++){
      this.rand(i)
    }
    
    this.getRandInit.emit(this.randArr)
   
  }



}
