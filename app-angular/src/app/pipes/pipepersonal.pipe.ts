import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipepersonal'
})
export class PipepersonalPipe implements PipeTransform {

  transform(value: string, dec: string): string {
    return dec + value + dec;
  }

}
