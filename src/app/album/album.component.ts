import { Component, OnInit } from '@angular/core';
import { MediaPlayerService } from '../shared/media-player.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(public mediaPlayerService: MediaPlayerService) { }

  ngOnInit(): void {
  }

}
