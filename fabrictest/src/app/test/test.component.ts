import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fabric } from 'fabric';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  canvas: fabric.Canvas | undefined;
  events: string[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('fabricSurface', {
      backgroundColor: '#010101',
      selection: true
    })

    this.setup();
  }

  testNavClicked(){
    this.router.navigate(['/']);
  }

  private setup(){
    const rect = new fabric.Rect({ 
      width: 100, 
      height: 50, 
      fill: 'green',
      hasBorders: true,
      borderColor: '#00AAFF',
      borderDashArray: [1,2,0],
      borderScaleFactor: 2
    });
    this.canvas!.on('selection:created', (e) => {
      this.events.push(`Selected ${e.target!.type!}`);
    });
    this.canvas!.on('selection:updated', (e) => {
      this.events.push(`Selectede ${e.target!.type!}`);
    });
    this.canvas!.on('selection:cleared', (e) => {
      this.events.push('Selection cleared');
    });
    // rect.on('selection:cleared', () => {
    //   this.events.push('Selected Rect');
    // });

    this.canvas?.add(rect);

    const img = fabric.Image.fromURL(
      'http://localhost/fs/res_upload/image/1630448440504.png', 
      (fabricImage) => {
        fabricImage.scaleToWidth(100);
        this.canvas?.add(fabricImage);

        fabricImage.on('selection:created', () => {
          this.events.push('Selected Image');
        })
        fabricImage.on('selection:cleared', () => {
          this.events.push('Selected Image');
        })
    });
  }

}
