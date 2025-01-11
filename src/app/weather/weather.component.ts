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
 // Lista local de ciudades
 cityList: string[] = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
  'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco',
  'Indianapolis', 'Charlotte', 'Seattle', 'Denver', 'Washington D.C.',
  'Boston', 'El Paso', 'Detroit', 'Nashville', 'Oklahoma City',
  'Portland', 'Las Vegas', 'Memphis', 'Louisville', 'Baltimore',
  'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento',
  'Kansas City', 'Long Beach', 'Mesa', 'Virginia Beach', 'Atlanta',
  'Colorado Springs', 'Raleigh', 'Omaha'
];

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

