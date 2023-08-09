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
  
}
