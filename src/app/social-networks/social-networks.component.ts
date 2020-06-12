import { Component, OnInit } from '@angular/core';
import { SocialNetworksService } from '../shared/social-networks.service';
@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {
  constructor(public socialNetworksService: SocialNetworksService ) { }

  ngOnInit(): void {
  }

}
