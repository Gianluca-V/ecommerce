import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { gsap } from "gsap";
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  products: Product[] = [];
  centerProduct?: Product;
  bottomProduct?: Product;
  smartwatchs?: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.centerProduct = this.products.find(p => p.name == 'Samsung Galaxy S22');
      this.bottomProduct = this.products[5];
      this.smartwatchs = this.products.filter(p => p.category == 'smartwatch').slice(0, 3);
    })

    let carousel = gsap.timeline({ repeat: -1, yoyo: true });
    for (let i = 1; i <= 3; i++) {
      carousel.to(`.carousel__div:nth-of-type(${i})`, { opacity: 1, duration: 1, delay: 1 }, "<");
      carousel.to(`.carousel__div:nth-of-type(${i})`, { opacity: 0, duration: 1, delay: 5 }, "<");
    }

    let underscore = gsap.timeline({ repeat: -1 });
    underscore.set(".underscore-anim", { opacity: 0, delay: 0.66 });
    underscore.set(".underscore-anim", { opacity: 1, delay: 0.66 });
  }

  private sliderAnimation(): void {
    let slider = gsap.timeline({ repeat: -1, });
    slider.to('.slider__products', { xPercent: -100, duration: 1, delay: 5 });
    slider.to('.slider__products', { xPercent: -200, duration: 1, delay: 5 });
    slider.to('.slider__products', { xPercent: 0, duration: 1, }, "+=5");
  }
  ngAfterViewInit() {
    // Use setTimeout to wait for the component to render before accessing the DOM
    setTimeout(() => {
      let slider = gsap.timeline();

      // Wait for the 'slider__products' element to be fully loaded
      slider.to('.slider__products', { opacity: 1, duration: 1, delay: 0, onComplete: this.sliderAnimation });
    });

    const elements = Array.from(document.querySelectorAll(".slider__img"));
    elements.filter((el): el is HTMLElement => el instanceof HTMLElement).forEach((el) => {
      VanillaTilt.init(el);
    });
  }


}
