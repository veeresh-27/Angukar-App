import { Component } from '@angular/core';
import { Telephone } from 'src/app/model/telephone';
import { TelephoneService } from 'src/app/service/telephone.service';

@Component({
  selector: 'app-get-tel',
  templateUrl: './get-tel.component.html',
  styleUrls: ['./get-tel.component.css'],
})
export class GetTelComponent {
  teleList: Telephone[] = [];
  newTelephone: Telephone = {} as Telephone;
  count: number = 0;
  constructor(private service: TelephoneService) {}
  getDataFromServer() {
    let observable = this.service.getAllJsonTelephone();
    observable.subscribe((data: Telephone[]) => {
      this.teleList = data;
      this.count = data.length;
    });
  }
  ngOnInit(): void {
    this.getDataFromServer();
  }
}
