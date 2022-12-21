import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})

export class FormatPricePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let valueFormat: string;
    let comma = ','

    return valueFormat = [value.slice(0, value.length - 2), comma, value.slice(-2)].join('').concat(' €');
  }
}
