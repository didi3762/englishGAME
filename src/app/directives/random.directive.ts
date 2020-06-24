import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Random]'
})
export class RandomDirective implements OnInit {

  el:HTMLElement;
  @Input() arrLange:number
  @Output() getRand = new EventEmitter<number[]>()
  @HostListener('click')    rnd() {
    console.log('clicked');
      let rand = Math.floor(Math.random() * Math.floor(this.arrLange));
       this.getRand.emit(this.randArr);
  }

  randArr:number[] = [1,2,3,4,5,6,7,8,9,10]

  rand(num:number){
    let rand = Math.floor(Math.random() * Math.floor(this.arrLange));
    let rand4 = Math.floor(Math.random() * Math.floor(4));
    this.randArr[num]= rand;
    this.randArr[num+5] = rand4;
    
  }


  constructor(private elRef:ElementRef) { 
    this.el = elRef.nativeElement;
    
    
  }
  ngOnInit(): void {
    for (let i = 0; i < 5; i++){
      this.rand(i)
    }
    
    this.getRand.emit(this.randArr)
   
  }



}
