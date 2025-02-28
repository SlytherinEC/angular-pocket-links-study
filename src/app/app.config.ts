import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "angular-pocket-links-study",
        appId: "1:508130970182:web:2c497dc19ff39364d3d847",
        storageBucket: "angular-pocket-links-study.firebasestorage.app",
        apiKey: "AIzaSyCBOXc8cPOxC3gqjNtQeFWFQmGrYoSIMsk",
        authDomain: "angular-pocket-links-study.firebaseapp.com",
        messagingSenderId: "508130970182", measurementId: "G-8QEHEVMQ7C"
      })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
