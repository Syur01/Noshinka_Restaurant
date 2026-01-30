import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  // 1. La variable de control (igual que en el header)
  currentLang = localStorage.getItem('idioma') || 'en';

  textos: any = {
    en: {
      hero: {
        tag: 'Peru x Japan',
        desc: 'Where Peruvian passion meets Japanese precision. A culinary journey of two cultures, one extraordinary experience.',
        reserve: 'Reserve Your Table',
        menu: 'Explore Menu',
      },
      story: {
        tag: 'Our Story',
        title: 'Two Cultures One Vision',
        p1: 'NOSHINKA celebrates the extraordinary culinary connection between Peru and Japan, a bond forged more than a century ago when the Japanese came and brought their precision and artistry to the vibrant Peruvian cuisine.',
        p2: 'Our cuisine honors this legacy in every creation: a subtle balance between freshness and acidity and the vibrant character of ingredients that converse between two cultures.',
        link: 'Discover our philosophy',
      },
      menu: {
        tag: 'Culinary Art',
        title: 'Featured Creations',
        dish1: {
          name: 'Crispy Nikkei Chicken',
          desc: 'Crispy chicken thighs glazed in sweet soy sauce, served with toasted sesame rice and a smoked rocoto pepper cream.',
        },
        dish2: {
          name: 'Ebi Kataifi Nest',
          desc: 'Jumbo shrimp wrapped in kataifi pastry threads, served on an avocado and wasabi mousse with a sweet and spicy passion fruit reduction.',
        },
        dish3: {
          name: 'Maguro Special Roll',
          desc: 'Fresh tuna and avocado topped with spicy mayonnaise and crispy tobiko, served in a traditional wooden masu box.',
        },
        viewAll: 'View Full Menu',
      },
    },
    es: {
      hero: {
        tag: 'Perú x Japón',
        desc: 'Donde la pasión peruana se encuentra con la precisión japonesa. Un viaje culinario de dos culturas, una experiencia extraordinaria.',
        reserve: 'Reserva tu Mesa',
        menu: 'Explorar Carta',
      },
      story: {
        tag: 'Nuestra Historia',
        title: 'Dos Culturas Una Visión',
        p1: 'NOSHINKA celebra la extraordinaria conexión culinaria entre Perú y Japón, un vínculo forjado hace más de un siglo cuando los japoneses trajeron su precisión y arte a la vibrante cocina peruana.',
        p2: 'Nuestra cocina honra este legado en cada creación: un equilibrio sutil entre frescura y acidez, y el carácter vibrante de ingredientes que conversan entre dos culturas.',
        link: 'Descubre nuestra filosofía',
      },
      menu: {
        tag: 'Arte Culinario',
        title: 'Creaciones Destacadas',
        dish1: {
          name: 'Pollo Nikkei Crujiente',
          desc: 'Muslos de pollo crujientes glaseados en salsa de soja dulce, servidos con arroz al sésamo tostado y crema de rocoto ahumado.',
        },
        dish2: {
          name: 'Nido de Ebi Kataifi',
          desc: 'Langostinos jumbo envueltos en hilos de pasta kataifi, servidos sobre mousse de aguacate y wasabi con reducción de maracuyá agridulce.',
        },
        dish3: {
          name: 'Maguro Special Roll',
          desc: 'Atún fresco y aguacate cubierto con mayonesa picante y tobiko crujiente, servido en una caja masu de madera tradicional.',
        },
        viewAll: 'Ver Carta Completa',
      },
    },
  };
}
