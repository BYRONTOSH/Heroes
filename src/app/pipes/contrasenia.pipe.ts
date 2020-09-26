import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activo:true ): string {

    return (activo) ? value = value.replace(/./g,"*"): value
   
  }

}
