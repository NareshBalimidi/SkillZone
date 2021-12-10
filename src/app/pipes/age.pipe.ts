import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let currentYear = new Date().getFullYear();
    let userBirthYear = new Date(value).getFullYear();
    let age = currentYear-userBirthYear;
    return age;
  }

}
