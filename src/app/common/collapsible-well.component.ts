import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
    <h4 class="well-title">
    <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content select="[well-body]" *ngIf="visibility"></ng-content>
    </div>


    `
})

export class CollapsibleWellComponent {
    @Input () title: string;

    visibility = false;

    toggleContent() {
        this.visibility = !this.visibility
    }
}