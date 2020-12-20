import { Component, OnInit } from '@angular/core';
import { MlMaskDetectionService } from '../ml-mask-detection.service';

@Component({
  selector: 'app-ml-mask-detection',
  templateUrl: './ml-mask-detection.component.html',
  styleUrls: ['./ml-mask-detection.component.scss'],
})
export class MlMaskDetectionComponent implements OnInit {
  showStartBtn = true;
  prediction: any;
  loading = false;
  webcamContainer: any;

  constructor(private mlMaskDetectionService: MlMaskDetectionService) {}

  ngOnInit(): void {}

  startAction(webcamContainer: HTMLElement): void {
    this.webcamContainer = webcamContainer;
    this.showStartBtn = false;
    this.loading = true;
    this.mlMaskDetectionService.init().subscribe((prediction) => {
      this.prediction = this.showStartBtn ? [] : prediction;
    });
    this.mlMaskDetectionService
      .initCamera(webcamContainer.offsetWidth, webcamContainer.offsetHeight)
      .subscribe((webcamCanvas) => {
        this.loading = false;
        webcamContainer.appendChild(webcamCanvas);
      });
  }

  stopAction(): void {
    this.mlMaskDetectionService.stopCamera();
    this.showStartBtn = true;
    this.webcamContainer.querySelector('canvas').remove();
  }
}
