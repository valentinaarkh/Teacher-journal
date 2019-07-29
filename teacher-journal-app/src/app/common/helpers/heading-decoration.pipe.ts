import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headingDecoration'
})

export class HeadingDecorationPipe implements PipeTransform {

  public transform(value: string): string {
        const array: string[] = value.split('_');
        const result: string[] = array.map((word) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
        });
        return result.join(' ');
    }
}
