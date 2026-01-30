import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentLang = localStorage.getItem('idioma') || 'en';

  textos: any = {
    en: {
      desc: 'A celebration of Nikkei cuisine — where the artistry of Japan meets the vibrant soul of Peru.',
      hours: 'Hours',
      days1: 'Tuesday – Thursday',
      days2: 'Friday – Saturday',
      days3: 'Sunday – Monday',
      closed: 'Closed',
      contact: 'Contact',
      rights: 'ALL RIGHTS RESERVED.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    es: {
      desc: 'Una celebración de la cocina Nikkei — donde el arte de Japón se une con el alma vibrante del Perú.',
      hours: 'Horarios',
      days1: 'Martes – Jueves',
      days2: 'Viernes – Sábado',
      days3: 'Domingo – Lunes',
      closed: 'Cerrado',
      contact: 'Contacto',
      rights: 'TODOS LOS DERECHOS RESERVADOS.',
      privacy: 'Privacidad',
      terms: 'Términos',
    },
  };
}
