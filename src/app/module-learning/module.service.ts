import { Injectable } from '@angular/core';
import * as moduleData from './data/module.json';
import { Module } from '@core/models/Module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  // public getModule(): Module[] {
  //   let retModule: Module[] = [];
  //   moduleData.modules.forEach(mod => {
  //     retModule.push(new Module().deserialize(mod));
  //   });
  //   return retModule;
  // }
}
