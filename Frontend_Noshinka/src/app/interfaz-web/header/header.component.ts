import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller) {}
  // Idioma por defecto
  currentLang = 'en';

  // Objeto con todos los textos del Header y secciones
  textos: any = {
    en: {
      story: 'Our Story',
      menu: 'Menu',
      reservations: 'Reservations',
      contact: 'Contact',
      book: 'Book a Table',
    },
    es: {
      story: 'Nuestra Historia',
      menu: 'Carta',
      reservations: 'Reservas',
      contact: 'Contacto',
      book: 'Reservar Mesa',
    },
  };
  scrollTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }
  changeLanguage(lang: string) {
    this.currentLang = lang;
  }
}
