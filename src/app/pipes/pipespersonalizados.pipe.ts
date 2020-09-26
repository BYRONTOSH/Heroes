import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipespersonalizados'
})
export class PipespersonalizadosPipe implements PipeTransform {

  transform(value: string): string {

    value= value.toLocaleLowerCase()
    let separar = value.split(' ')
    separar = separar.map((r)=>{
       return r[0].toUpperCase()+ r.substr(1)
    })
   return separar.join(' ')
}
}
