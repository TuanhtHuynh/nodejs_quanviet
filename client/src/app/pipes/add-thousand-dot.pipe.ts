import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addThousandDot',
})
export class AddThousandDotPipe implements PipeTransform {
  transform(value: any) {
    return value
      .toString()
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
