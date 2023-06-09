import { Component } from '@angular/core';
import { SedeService } from '../../services/sede.service';
import { Router } from '@angular/router';
import { Sede } from 'src/app/interface/sede.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  sedes: Sede[] = [];

  constructor(private router: Router, private sedeService: SedeService) {}

  ngOnInit() {
    this.sedeService.getSedes().subscribe((res) => (this.sedes = res));
  }

  verCarreraSede(sede: Sede) {
    this.router.navigate(['/sede', sede.id_sede]);
  }
}
