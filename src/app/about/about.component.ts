import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArtCards } from '../core/models/art-cards';
import {MatDialog} from '@angular/material/dialog';
import { LightboxComponent } from '../core/lightbox/lightbox.component';

export interface DialogData {
  photos: ArtCards[]
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../app.component.scss']
})
export class AboutComponent implements OnInit {

  subtitle1: string = 'Personal Life'

  subtitle2: string = 'Work Experience'

  personalLifeSummary: string = 'I\'m a former water polo player and\
 former national-level swimmer. I retired from both sports in 2017 due\
 to medical issues, but I really enjoy water sports\!\n\n\
I\'m also an artist (though not a very good one). I\'ve left some\
 images below, so feel free to check them out!\n\n\
Nature is something I really love interacting with; I actually\
 interned at the MN DNR (Department of Natural Resources) when I was\
 in high school and worked in the 880 acre arboretum when I was\
 attending Carleton.\n\n\I ended up with a psychology major and\
 computer science minor from the University of Minnesota. I wanted to\
 go into counseling psych, but decided it was too much for me emotionally,\
 so I went into research psychology instead.\n\n\
My psychology specialization was in psychophysics (sensation and\
 perception research), particularly around color vision. Fun fact,\
 I\'m technically a published author in psychology, though it\'s\
 only an abstract that was published and I didn\'t write it.\n\n\
Eventually I decided to leave psychology, as the research aspect\
 just wasn\'t for me.'

  workExperienceSummary: string = 'Logic puzzles were something I\
 loved as a kid. Programming is basically just a lot of logic\
 puzzles strung together, so it was a natural fit for me.\n\n\
My experience with programming started after a psychology professor\
 suggested that I learn how to code. I took a python course and\
 instantly loved it. I wouuld have switched my major, but with\
 some of the unrelated general requirements within the school of\
 science and engineering at UMN there wasn\'t enough time for me to\
 meet everything, so thus a minor.\n\nAside from my classes, I was\
 following other tutorials and courses outside of my regular classes.\
 I just wanted to learn and do more.\n\nEventually I ended up coding\
 for a research lab that I was helping out with, and I made a few\
 practice android apps on the side. It wasn\'t until I graduated that\
 I managed to get professional experience\n\nAt Optum I\'ve been\
 working with a small team on an important product. I can\'t disclose\
 details about it, but it was build with Angular and Spring Boot.\n\n\
I was one of the main drivers for the UI, and would often fix mistakes\
 my coworkers made and help mentor some of them. I even built some\
 custom UI components while I worked there: a custom horizontal\
 scrollview with some custom cards that could display plans and their\
 associated benefits, as well as a popup comparison table. I also\
 worked with the ArcGIS JS API, which is what we were using to display\
 maps of the country and each of the states.\n\nWe went without a tech\
 lead for many months, so myself and one of my coworkers took over that\
 responsibility for about 6 months or so. I also led many standups as\
 our scrummaster took PTO often due to circumstances outside of her\
 control. I also wrote most of our technical user stories from October\
 until March.\n\nUnfortunately the project we were working has had\
 some major changes recently. A senior capability manager decided to\
 hire some contractors to rebuild our frontend in Adobe Experience\
 Manager instead of continuing to use Angular.\n\nThey\'re also no\
 longer using either of our APIs that we built. This would be fine,\
 except for the fact that it\'s supposed to be deployed in 3 months,\
 the contractors will leave after that, then we\'re expected to\
 maintain the new applications -- built in a framework we don\'t know and by\
 another team -- right after they launch during a time when a high\
 profile event where the application is needed for will be. I decided\
 I have too much self respect to deal with all that, which is why I\m\
 currently looking for opportunities elsewhere.'

  cards: ArtCards[] = [
    {
      title: 'Tree Frog',
      subtitle: 'Photography',
      img: '../../assets/img/13669392_1362888097073506_7922752070585731419_o.jpg',
      alt: 'Photo of a tree frog',
      description: 'I took this photo while working in the arboretum at Carleton'
    },
    {
      title: '3D Chess Pieces',
      subtitle: '3D Modeling',
      img: '../../assets/img/chess_pieces_by_zaelarose_debnzrb-pre.jpg',
      alt: 'Render of 3d chess pieces',
      description: 'This is a 3D render I made in Blender a few years ago'
    },
    {
      title: 'Starry Abyss',
      subtitle: 'Digital Painting',
      img: '../../assets/img/66411676_2804871652875136_1042967056179265536_o.jpg',
      alt: 'Painting of space',
      description: 'This is a digital painting of space I made in Krita a few years ago'
    },
    {
      title: 'Frosty Pullcart',
      subtitle: '2D Vector Art',
      img: '../../assets/img/frosty_pullcart_by_zaelarose_ded2jr7-fullview.jpg',
      alt: 'Drawing of a pullcart with snow',
      description: 'This is a vector drawinng of a pullcart I made a few years ago in Gravit Design'
    },
  ]

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LightboxComponent, {
      width: '80vw',
      data: {photos: this.cards},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
