import { Component, Input } from "@angular/core";

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visable" select="[well-body]"></ng-content>
    </div>
  `
})

export class CollapsibleWellComponent {
  visable:boolean = true;
  
  toggleContent() {
    this.visable = !this.visable;
  }
}