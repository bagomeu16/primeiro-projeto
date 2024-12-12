import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent {

    constructor(private route: ActivatedRoute, private customerService: CustomerService) {
      
    }

    customer: any;

    ngOnInit() {

      //pegar id da url
      let id = this.route.snapshot.paramMap.get('id');

      if (id !== null) {

        this.customer = this.customerService.getById(+id);
      }
    }
}
