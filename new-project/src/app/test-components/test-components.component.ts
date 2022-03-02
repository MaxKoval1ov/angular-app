import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.component.html',
  styleUrls: ['./test-components.component.scss']
})
export class TestComponentsComponent implements OnInit {

  head = 'Hello this'

  contactPerson = "Peter";

  @Output() saveContactPerson = new EventEmitter<String>();

  showContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
