import { Component } from '@angular/core';
import { UnsplashService } from './services/unsplash.service';
import { RootResult } from './models/RootResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unsplash-web-integrations';
  // search:string="";

  constructor(private unsplashService: UnsplashService){}
  // url:string = `{}`;
  resultado:any=[];

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  buscarImagen(search:string){
    this.unsplashService.obtenerImagenes(search).subscribe((datos)=>{
      this.resultado = datos;
      console.log(datos.results);
      console.log(this.resultado.results[0].urls['regular']);
      console.log(this.resultado.results[1].urls['regular']);
      
      
    });
  }


  
  // mostrarModal(itemId: string) {
  //   const modalSelector = `#modal-${itemId}`;
  //   const modalElement = document.querySelector(modalSelector);
  //   if (modalElement) {
  //     const bootstrapModal = new bootstrap.Modal(modalElement);
  //     bootstrapModal.show();
  //   }
  // }

}
