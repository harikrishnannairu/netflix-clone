import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionPipe'
})
export class DescriptionPipePipe implements PipeTransform {

  transform(value: string, args?: unknown[]): any {
    return `${value.substring(0,140)}...`;
  }

}
