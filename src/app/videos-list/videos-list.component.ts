import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  id = 'kBSK3Hu8Fy8';
  private player;
  private ytEvent;

  constructor() { }

  ngOnInit() {
    this.savePlayer(this.player);
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

}
