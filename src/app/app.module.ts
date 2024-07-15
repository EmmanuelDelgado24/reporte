import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Otros componentes, directivas y pipes si los hay
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap solo si AppComponent es tu componente raíz
})
export class AppModule {}


