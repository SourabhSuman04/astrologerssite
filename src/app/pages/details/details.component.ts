import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
details:any;

constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.details = history.state.product;
    console.log('Received:', this.details);
  }
goBack() {
  window.history.back();
}

openLink(url: string) {
  window.open(url, '_blank');
}

}