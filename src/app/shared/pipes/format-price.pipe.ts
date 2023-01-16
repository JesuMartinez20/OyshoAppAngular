import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
//No consigo importar el pipe sin que me de un error al compilar
export class FormatPricePipe implements PipeTransform {
  transform(value: string): string | void {
    let comma = ',';

    if (value) return [value.slice(0, value.length - 2), comma, value.slice(-2)].join('').concat(' €');
  }
}
