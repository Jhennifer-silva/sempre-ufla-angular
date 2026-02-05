import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Carousel } from '../carousel/carousel';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-benefits',
  imports: [RouterLink, Carousel, TranslateModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {

}
