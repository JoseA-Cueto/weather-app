import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { WeatherComponent } from "./weather/weather.component";
@Component({
  selector: 'app-root',
  standalone: true,  // Marca el componente como standalone
  imports: [CommonModule, FormsModule, WeatherComponent],  // Agrega módulos necesarios como CommonModule y FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
}


