import { Injectable } from "@angular/core";


export interface PlayList {
  id: number,
  title: string,
  current: boolean,
  url: string,
  album: string
}
export interface StreamState {
    playing: Boolean;
    readableCurrentTime: string;
    readableDuration: string;
    duration: number | undefined;
    currentTime: number | undefined;
    canplay: boolean;
    error: boolean;
}
@Injectable({providedIn: 'root'})
export class MediaPlayerService {
  playList: PlayList[] = [
    {
      id: 0,
      title: "12345SEX",
      current: false,
      url: "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      album: "/assets/images/12345.jpg"
    },
    {
      id: 1,
      title: "Gimme!Gimme!Gimme!",
      current: false,
      url: "https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3",
      album: "/assets/images/gimme.jpg"
    },
    {
      id: 2,
      title: "You Know You Like It",
      current: false,
      url: "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      album: "/assets/images/snake.jpg"
    }
  ]

  onToggle(id: number) {
    for(let i = 0;i < this.playList.length;i++) {
      if(id != i){this.playList[i].current = false;}
      else {
        const idx = this.playList.findIndex(t => t.id ===id)
        this.playList[idx].current = !this.playList[idx].current
        console.log(this.playList[idx].current );
      }
    }
  }


}
