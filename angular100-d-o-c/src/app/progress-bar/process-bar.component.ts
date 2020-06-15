import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.scss']
})
export class ProgressBarComponent implements OnInit/*,OnChanges*/ {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  private $progress = 0;

  @Input()
  get progress(): number {
    return this.$progress;
  }

  set progress(value: number) {
    if (typeof value !== "number") {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }

  constructor() {
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   if ('progress' in changes) {
  //     if (typeof changes['progress'].currentValue !== 'number') {
  //       const progress = Number(changes['progress'].currentValue);
  //       if (Number.isNaN(progress)) {
  //         this.progress = 0;
  //       } else {
  //         this.progress = progress;
  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

}
