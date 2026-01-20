import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-benefits',
  imports: [RouterLink, Carousel],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {

}
