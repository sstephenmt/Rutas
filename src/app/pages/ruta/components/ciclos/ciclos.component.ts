import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent {
  @Input() ciclos!: number
  get arrayCiclo(){
    return new Array(this.ciclos).fill(0)
  }

  ngOnInit(): void {
    
    console.log(this.arrayCiclo)
  }


  tabla() {    
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.ciclos},1fr)`,
      'grid-template-rows': `70px`,
      gap: '15px'
    }
  }
}
