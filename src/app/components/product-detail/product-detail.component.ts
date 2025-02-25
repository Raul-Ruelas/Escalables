import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true, // Indica que es un componente independiente
  imports: [NgIf], // Importa NgIf para condicionales
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input() product!: Product;
}
