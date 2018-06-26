import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];


  serverAdded(event) {
    this.serverElements.push({
      type: 'server',
      name: event.name,
      content: event.content
    });
  }

  serverBlueprintAdded(event) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.name,
      content: event.content
    });
  }

}
