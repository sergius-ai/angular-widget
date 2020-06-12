import { Component, OnInit } from '@angular/core';
import { MediaPlayerService } from '../shared/media-player.service';
@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  constructor(public mediaPlayerService: MediaPlayerService) { }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.mediaPlayerService.onToggle(id);
    console.log(id);
  }
}
