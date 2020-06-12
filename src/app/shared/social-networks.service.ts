import { Injectable } from "@angular/core";
export interface Social {
  href: string,
  class: string,
  image: string,
  title: string,
  alter: string
}

@Injectable({providedIn: 'root'})
export class SocialNetworksService {
  social: Social[] = [
    {
      href: "",
      class: "facebook",
      image: "/assets/images/fb.png",
      title: "facebook",
      alter: "facebook",
    },
    {
      href: "",
      class: "twitter",
      image: "/assets/images/tw.png",
      title: "twitter",
      alter: "twitter",
    },
    {
      href: "",
      class: "googleplus",
      image: "/assets/images/gp.png",
      title: "googleplus",
      alter: "googleplus"
    }

  ]
}
