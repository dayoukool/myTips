import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createModulePipe'
})
export class CreateModulePipePipe implements PipeTransform {

  transform(Modules: any, sujet: string): any[] {
    console.log('Module :');
    console.log(Modules);
    console.log('sujet :');
    console.log(sujet);
    if (!Modules || !sujet ) {
      console.log('on filtre pas');
      return Modules;
    }

    console.log('on filtre');
    console.log(Modules.filter(el => el.sujet === sujet));
    return Modules.filter(el => el.sujet === sujet);
  }

}
