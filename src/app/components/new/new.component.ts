import { Component } from '@angular/core';
import { Prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  prestamo: Prestamo = new Prestamo();
  constructor(private prestamoService:PrestamoService) { }
  onSubmit() {
    this.prestamoService.createPrestamo(this.prestamo).subscribe(
      response => {
        console.log('Préstamo creado exitosamente:', response);
      },
      error => {
        console.error('Error al crear préstamo:', error);
      }
    );
  }
}
