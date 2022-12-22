import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
//No consigo importar el pipe sin que me un error al compilar
export class FormatPricePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let valueFormat: string;
    let comma = ','

    return valueFormat = [value.slice(0, value.length - 2), comma, value.slice(-2)].join('').concat(' €');
  }
}
