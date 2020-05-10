import { Component, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''; Used with 2 way data binding [(ngModel)]
  // newServerContent = ''; Used with 2 way data binding [(ngModel)]
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor(){

  }

  // Lifecycle hook
  ngOnInit(){
    
  }

  onAddServer(serverNameInput: HTMLInputElement){
    // console.log(this.serverContentInput);
    // console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
