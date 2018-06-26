import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter();   // without alias
  @Output('bpAdded') serverBlueprintAdded = new EventEmitter();   // with alias
  newServerName;
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverAdded.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
    this.serverBlueprintAdded.emit({name: this.newServerName, content: this.newServerContent});
  }
}
