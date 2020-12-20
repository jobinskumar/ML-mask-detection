import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import * as tf from '@tensorflow/tfjs';
// import * as tmImage from '@teachablemachine/image';

@Injectable({
  providedIn: 'root',
})
export class MlMaskDetectionService {
  webcam: any;
  model: any;
  webcamObs = new Subject();
  perdictionObs = new Subject();
  webcamStatus = 'stopped';

  constructor() {}

  init(): Observable<any> {
    const modelURL = 'assets/model.json';
    const metadataURL = 'assets/metadata.json';
    (window as any).tmImage.load(modelURL, metadataURL).then((model: any) => {
      this.model = model;
    });

    return this.perdictionObs.asObservable();
  }

  initCamera(width: number, height: number): Observable<any> {
    this.webcam = new (window as any).tmImage.Webcam(width, height, true);
    this.webcam.setup().then(() => {
      this.webcam.play();
      this.webcamStatus = 'playing';
      window.requestAnimationFrame(() => {
        this.cameraLoop();
      });
      this.webcamObs.next(this.webcam.canvas);
    });

    return this.webcamObs.asObservable();
  }

  stopCamera(): void {
    this.webcam.stop();
    this.webcamStatus = 'stopped';
    window.requestAnimationFrame(() => {});
  }

  cameraLoop(): void {
    if (this.webcamStatus === 'playing') {
      this.webcam.update();
      this.predict();
      window.requestAnimationFrame(() => {
        this.cameraLoop();
      });
    }
  }

  predict(): void {
    this.model.predict(this.webcam.canvas).then((prediction: any) => {
      this.perdictionObs.next(prediction);
    });
  }
}
