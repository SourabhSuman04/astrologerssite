import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports:[CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  products = {
    title: 'Traditional Silk Saree',
    description: 'A premium silk saree with golden zari border. Perfect for weddings and festive occasions.',
    price: 2999,
    images: [
      'assets/images/saree1.jpg',
      'assets/images/saree2.jpg',
      'assets/images/saree3.jpg'
    ],
    upiMobile: '9876543210',
    qrCodeUrl: 'assets/images/upi-qr.png'
  };

  selectedImage = this.products.images[0];

  selectImage(img: string) {
    this.selectedImage = img;
  }
    product: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.product = history.state.product;
    console.log('Received Product:', this.product);
  }
}
