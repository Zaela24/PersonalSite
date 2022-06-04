import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtCards } from '../models/art-cards';
import { DialogData } from 'src/app/about/about.component';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {


  // data: ArtCards[] = [
  //   {
  //     title: 'Tree Frog',
  //     subtitle: 'Photography',
  //     img: '../../assets/img/13669392_1362888097073506_7922752070585731419_o.jpg',
  //     alt: 'Photo of a tree frog',
  //     description: 'I took this photo while working in the arboretum at Carleton'
  //   },
  //   {
  //     title: '3D Chess Pieces',
  //     subtitle: '3D Modeling',
  //     img: '../../assets/img/chess_pieces_by_zaelarose_debnzrb-pre.jpg',
  //     alt: 'Render of 3d chess pieces',
  //     description: 'This is a 3D render I made in Blender a few years ago'
  //   },
  //   {
  //     title: 'Starry Abyss',
  //     subtitle: 'Digital Painting',
  //     img: '../../assets/img/66411676_2804871652875136_1042967056179265536_o.jpg',
  //     alt: 'Painting of space',
  //     description: 'This is a digital painting of space I made in Krita a few years ago'
  //   },
  //   {
  //     title: 'Frosty Pullcart',
  //     subtitle: '2D Vector Art',
  //     img: '../../assets/img/frosty_pullcart_by_zaelarose_ded2jr7-fullview.jpg',
  //     alt: 'Drawing of a pullcart with snow',
  //     description: 'This is a vector drawinng of a pullcart I made a few years ago in Gravit Design'
  //   },
  // ]

  mainphoto: ArtCards = this.data.photos[0]

  activate(photo: ArtCards): void {
    this.mainphoto = photo
  }

  moveSlide(direction: number): void {
    let index = this.data.photos.indexOf(this.mainphoto)
    if (index + direction < 0) {
      index = this.data.photos.length
    }
    else if (index + direction > this.data.photos.length - 1) {
      index = -1
    }
    this.mainphoto = this.data.photos[index + direction]
  }

  constructor(
    // public dialogRef: MatDialogRef<LightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
