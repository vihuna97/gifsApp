import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  
  
  @Input()
  public url!: string;
  @Input()
  public title!: string;
  
  public hasLoaded: Boolean = false;
  
  onLoad():void{
    setTimeout(()=>{ 
      this.hasLoaded = true;
    }, 500)
  }
  
  ngOnInit(): void {
    if(!this.url)
    {throw new Error('Url is required.');}
  }
}
