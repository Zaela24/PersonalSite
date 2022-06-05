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

  mainphoto: ArtCards = this.data.mainPhoto

  mouseEntered: boolean = false

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

  onMouseEnter() {
    this.mouseEntered = true
  }

  onMouseLeave() {
    this.mouseEntered = false
  }

  constructor(
    // public dialogRef: MatDialogRef<LightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
