import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { FormsModule } from '@angular/forms';  // Importar FormsModule

// Arrancar la aplicación con el AppComponent, agregando los módulos necesarios
bootstrapApplication(AppComponent, {
  providers: [
    // Asegurarse de que HttpClientModule esté disponible
    HttpClientModule,
    CommonModule,
    FormsModule
  ]
})
  .catch(err => console.error(err));
