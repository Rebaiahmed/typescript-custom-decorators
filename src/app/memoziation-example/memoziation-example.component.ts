import { Component, OnInit } from '@angular/core';
import * as memoizee from 'memoizee';
import { memoize } from '../decorators/ memoize.decorator';

@Component({
  selector: 'app-memoziation-example',
  templateUrl: './memoziation-example.component.html',
  styleUrls: ['./memoziation-example.component.scss'],
})
export class MemoziationExampleComponent implements OnInit {
  ngOnInit(): void {
    const memoizedAdd = memoizee(this.add);
    memoizedAdd(1, 2);
    memoizedAdd(1, 2);
    memoizedAdd(1, 3);
  }
  framework = 'Angular';
  count = 0;

  @memoize()
  getTitle(framework: string): string {
    console.log('getTitle is called');
    return `I love ${framework.toUpperCase()}`;
  }

  changeFramework() {
    if (this.framework === 'Angular') {
      this.framework = 'React';
    } else {
      this.framework = 'Angular';
    }
  }

  counterAdd() {
    this.count += 1;
  }

  add(a: number, b: number): number {
    console.log('add is called');
    return a + b;
  }
}
