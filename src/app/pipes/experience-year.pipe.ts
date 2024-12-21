import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experienceYear'
})
export class ExperienceYearPipe implements PipeTransform {

  transform(value: number): string {
    if(value==1){
      return `${value} year`;
    }
    return `${value} years`;
  }

}
