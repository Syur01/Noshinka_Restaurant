import { NgClass, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller) {}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(section: string) {
    this.isMenuOpen = false; // Cerramos el menú al hacer click
    this.scrollTo(section); // Llamamos a tu función de scroll existente
  }

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
  changeLanguage(lang: string) {
    localStorage.setItem('idioma', lang); // Guarda la nota
    window.location.reload(); // Recarga para que todos lean la nota
  }
  scrollTo(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  } // Función para cambiar el idioma
}
