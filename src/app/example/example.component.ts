import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Swal.fire('Oops...', 'Something went wrong!', 'error’);
  }
}
