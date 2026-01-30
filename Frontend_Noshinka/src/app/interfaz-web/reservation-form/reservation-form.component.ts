import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  currentLang = localStorage.getItem('idioma') || 'en';

  textos: any = {
    en: {
      tag: 'Join Us',
      title: 'Make a Reservation',
      desc: 'Experience the art of Nikkei cuisine in our intimate dining room. Reserve your table for an unforgettable evening.',
      labelName: 'Name',
      placeName: 'Your full name',
      labelEmail: 'Email',
      placeEmail: 'your@email.com',
      labelDate: 'Date',
      labelTime: 'Time',
      selectTime: 'Select a time',
      labelGuests: 'Guests',
      guestsNum: 'Guests',
      labelPhone: 'Phone',
      placePhone: '+1 (555) 000-0000',
      btn: 'Confirm Reservation',
      footer: 'For parties larger than 6, please call us directly at',
    },
    es: {
      tag: 'Únete a nosotros',
      title: 'Haz una Reserva',
      desc: 'Vive el arte de la cocina Nikkei en nuestro salón íntimo. Reserva tu mesa para una noche inolvidable.',
      labelName: 'Nombre',
      placeName: 'Nombre completo',
      labelEmail: 'Correo',
      placeEmail: 'tu@correo.com',
      labelDate: 'Fecha',
      labelTime: 'Hora',
      selectTime: 'Selecciona la hora',
      labelGuests: 'Personas',
      guestsNum: 'Personas',
      labelPhone: 'Teléfono',
      placePhone: '+34 000 000 000',
      btn: 'Confirmar Reserva',
      footer: 'Para grupos de más de 6 personas, llámanos directamente al',
    },
  };
}
