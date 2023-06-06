import { Component, Input } from '@angular/core';
import { Telephone } from 'src/app/model/telephone';

@Component({
  selector: 'app-card-tel',
  templateUrl: './card-tel.component.html',
  styleUrls: ['./card-tel.component.css'],
})
export class CardTelComponent {
  @Input() telephone: Telephone = {} as Telephone;
}
