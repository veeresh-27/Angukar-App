import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Telephone } from 'src/app/model/telephone';
import { TelephoneService } from 'src/app/service/telephone.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent {
  id: any;
  telephone: Telephone = {} as Telephone;
  display: boolean = true;
  count: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: TelephoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      if (this.id == 'add') {
        this.display = true;
        this.telephone.image =
          'https://th.bing.com/th/id/OIP.qXq1AiKAQzogFxgd8Ac6BwAAAA?pid=ImgDet&rs=1';
      } else {
        this.service.getTelById(parseInt(this.id)).subscribe((data) => {
          this.telephone = data;
          this.display = false;
        });
      }
    });
  }
  updateDetails() {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      this.service
        .updateTelephone(parseInt(this.id), this.telephone)
        .subscribe((data) => {
          alert('Employee updated');
          this.ngOnInit();
        });
    });
  }

  addTelephone() {
    this.service.addTelephone(this.telephone).subscribe((data) => {
      alert('Added employee successful');
      this.router.navigate(['home']);
    });
  }
  
  deleteTelephone() {
    this.service.deleteTelephoneById(this.telephone.id).subscribe(() => {
      alert('Employee deleted successful');
      this.router.navigate(['home']);
    });
  }
}
