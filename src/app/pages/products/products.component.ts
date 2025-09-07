import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { products } from '../../models/models';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @ViewChild('productSlider', { static: false }) productSlider!: ElementRef;
  scrollSlider(direction: number) {
    const slider = this.productSlider.nativeElement;
    const scrollAmount = slider.offsetWidth * 0.8; // move by 80% of visible area
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
  products:products[] = [
  //   {
  //     name: 'Gemstone',
  //     image: 'assets/img/gemstone1.png',
  //     price: 20,
  //     oldPrice: 80,
  //     discount: '60% off',
  //     rating: 3,
  //     phone: '+91 9876543210'
  //   },
  //   {
  //     name: 'Amethyst',
  //   image: 'assets/img/gemstone2.png',
  //   price: 25,
  //   oldPrice: 90,
  //   discount: '55% off',
  //   rating: 4,
  //   phone: '+91 9988776655'
  // },
  // {
  //   name: 'Gemstone',
  //   image: 'assets/img/gemstone1.png',
  //   price: 20,
  //   oldPrice: 80,
  //   discount: '60% off',
  //   rating: 3,
  //   phone: '+91 9876543210'
  // },
  // {
  //   name: 'Amethyst',
  //   image: 'assets/img/gemstone2.png',
  //   price: 25,
  //   oldPrice: 90,
  //   discount: '55% off',
  //   rating: 4,
  //   phone: '+91 9988776655'
  // },
  //   {
  //   name: 'Gemstone',
  //   image: 'assets/img/gemstone1.png',
  //   price: 20,
  //   oldPrice: 80,
  //   discount: '60% off',
  //   rating: 3,
  //   phone: '+91 9876543210'
  // },
  // {
  //   name: 'Amethyst',
  //   image: 'assets/img/gemstone2.png',
  //   price: 25,
  //   oldPrice: 90,
  //   discount: '55% off',
  //   rating: 4,
  //   phone: '+91 9988776655'
  // },
  // {
  //   name: 'Gemstone',
  //   image: 'assets/img/gemstone1.png',
  //   price: 20,
  //   oldPrice: 80,
  //   discount: '60% off',
  //   rating: 3,
  //   phone: '+91 9876543210'
  // },
  // {
  //   name: 'Amethyst',
  //   image: 'assets/img/gemstone2.png',
  //   price: 25,
  //   oldPrice: 90,
  //   discount: '55% off',
  //   rating: 4,
  //   phone: '+91 9988776655'
  // },
  // Add more products here...
];

constructor(private commonservice:CommonService){}

ngOnInit(): void {
  
  this.commonservice.getAllProducts().subscribe((res:any)=>{
    this.products=res
  })

}

callProduct(phone: string) {
  window.location.href = `tel:${phone}`;
}


}
