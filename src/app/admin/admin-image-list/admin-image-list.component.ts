import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-admin-image-list',
  templateUrl: './admin-image-list.component.html',
  styleUrls: ['./admin-image-list.component.css']
})
export class AdminImageListComponent implements OnInit {
  images: Observable<Image[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}
