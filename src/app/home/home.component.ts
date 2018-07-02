import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  open: boolean;
  selected: any;

  items = [
    { value: 'Images' },
    { value: 'Videos' }
  ];

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onGalleryClick(item) {
    this.selected = item.value; 
    this.open = false;
    switch(this.selected){
        case "Images": 
          this.router.navigate(["images"]);
          break;
        case "Videos":
          this.router.navigate(["videos"]);
          break;
    }
}

}
