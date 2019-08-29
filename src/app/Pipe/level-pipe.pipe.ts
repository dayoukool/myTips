import { Pipe, PipeTransform } from '@angular/core';
import { Module } from '../core/models/module.model';


@Pipe({
  name: 'levelPipe'
})
export class LevelPipePipe implements PipeTransform {




  constructor() {

  }
  transform(Modules: Module[], level: number): any {
    console.log('Slides :');
    console.log(Modules);
    console.log('level :');
    console.log(level);
    if (!Modules || !level || level == 0) {
      console.log('on filtre pas');
      return Modules;
    }
    console.log('on filtre');
    console.log(Modules.filter(el => el.level === level));
    return Modules.filter(el => el.level === level);
  }

}
