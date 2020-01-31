import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-data-binding',
  templateUrl: './child-data-binding.component.html',
  styleUrls: ['./child-data-binding.component.css']
})
export class ChildDataBindingComponent implements OnInit {
  @Input() mensaje_padre: string;
  @Output() mensaje_hijo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  responder(){
    console.log('pulsó en responder');
    this.mensaje_hijo.emit('noooooooooooo');
  }

}
