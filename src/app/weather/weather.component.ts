import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Importar HttpClient
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@Component({
  selector: 'app-weather',
  standalone: true,  // Marca el componente como standalone
  imports: [CommonModule, FormsModule, HttpClientModule],  // Agregar módulos necesarios como CommonModule y FormsModule
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';  // Campo de entrada para la ciudad
  weatherData: any = null;  // Aquí almacenaremos los datos del clima
  errorMessage: string = '';  // Aquí almacenaremos los posibles errores

  constructor(private http: HttpClient) {}  // Inyectar HttpClient en el componente

  // Método para obtener el clima
  getWeather(): void {
    if (this.city) {
      const apiKey = 'TU_API_KEY';  // Usa tu clave API real
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;
      
      this.http.get(apiUrl).subscribe(
        (data: any) => {
          console.log(data);  // Verifica si los datos se reciben correctamente
          this.weatherData = data;
          this.errorMessage = '';
        },
        (error) => {
          console.error(error);  // Si ocurre un error, lo mostramos en la consola
          this.weatherData = null;
          this.errorMessage = 'City not found or there was an error with the API.';
        }
      );
    }
  }
  
}

