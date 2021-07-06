import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cacheable',
  templateUrl: './cacheable.component.html',
  styleUrls: ['./cacheable.component.scss'],
})
export class CacheableComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (result: any) => {
        console.log('result', result);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
