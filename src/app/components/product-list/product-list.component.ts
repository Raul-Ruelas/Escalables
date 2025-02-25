import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  standalone: true, // Indica que el componente es independiente
  imports: [NgClass, NgFor, NgIf, ProductDetailComponent], // Importa directivas necesarias
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1500,
      inStock: true,
      onSale: false,
      imageUrl: 'https://www.costco.com.mx/medias/sys_master/products/h67/hbf/188081224646686.jpg'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      inStock: true,
      onSale: true,
      imageUrl: 'https://clevercel.mx/cdn/shop/files/Caracteristicas_capacidad_iphone_14_pro_max_2024_1024x1024.webp?v=1735915626'
    },
    {
      id: 3,
      name: 'Tablet',
      price: 400,
      inStock: false,
      onSale: false,
      imageUrl: 'https://ss628.liverpool.com.mx/xl/1156155981.jpg'
    },
    {
      id: 4,
      name: 'Monitor',
      price: 200,
      inStock: true,
      onSale: true,
      imageUrl: 'https://m.media-amazon.com/images/I/71+qQN-3KvL.jpg'
    },
    {
      id: 5,
      name: 'Teclado mecánico',
      price: 100,
      inStock: true,
      onSale: false,
      imageUrl: 'https://cdn1.coppel.com/images/catalog/mkp/4015/3000/40151066-1.jpg'
    },
    {
      id: 6,
      name: 'Mouse inalámbrico',
      price: 50,
      inStock: false,
      onSale: false,
      imageUrl: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22684fa72/mouse-inalambrico-usb-usb-c-con-bateria-recargable-800-1000-1200-1600-dpi.jpg'
    },
    {
      id: 7,
      name: 'Impresora láser',
      price: 250,
      inStock: true,
      onSale: true,
      imageUrl: 'https://m.media-amazon.com/images/I/711z8azMSUL.jpg'
    },
    {
      id: 8,
      name: 'Auriculares Bluetooth',
      price: 120,
      inStock: true,
      onSale: false,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836'
    },
    {
      id: 9,
      name: 'Silla ergonómica',
      price: 300,
      inStock: false,
      onSale: true,
      imageUrl: 'https://toplivingmexico.com/cdn/shop/products/10066940007057-1.jpg?v=1734371562&width=1080'
    },
    {
      id: 10,
      name: 'Micrófono profesional',
      price: 180,
      inStock: true,
      onSale: false,
      imageUrl: 'https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 11,
      name: 'Disco SSD 1TB',
      price: 220,
      inStock: true,
      onSale: true,
      imageUrl: 'https://http2.mlstatic.com/D_Q_NP_646272-MLA40283983443_122019-O.webp'
    },
    {
      id: 12,
      name: 'Cámara web 1080p',
      price: 90,
      inStock: true,
      onSale: false,
      imageUrl: 'https://dlcdnwebimgs.asus.com/gain/818d26a5-2d8b-49e3-8381-86fb5945d8cd/'
    },
    {
      id: 13,
      name: 'Router Wi-Fi 6',
      price: 160,
      inStock: false,
      onSale: true,
      imageUrl: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/224364a23/repetidor-router-wi-fi-6-ax1500-2-4-ghz-y-5-ghz-hasta-100-m-de-cobertura.jpg'
    },
    {
      id: 14,
      name: 'Tarjeta gráfica RTX 4060',
      price: 500,
      inStock: true,
      onSale: false,
      imageUrl: 'https://m.media-amazon.com/images/I/61XAtpgr1lL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 15,
      name: 'Smartwatch',
      price: 250,
      inStock: true,
      onSale: true,
      imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR1UTU4N0MwSS9jYWJEbEpiZWpYQy9pRFJvTk1WL3dkOUtPUHdmeHpVRi90ejJNajZQak9EYzBUOWd3YWlIOHpLQlFVMEJ2bnk4TDV2UWtuV05TbzFPRQ'
    }
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
