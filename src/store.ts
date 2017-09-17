import { action, observable } from 'mobx';
import { loop } from './services';

import ColorMdl from './modules/color';
const MODULES = [ColorMdl];
const APP = window.external.Application;

class DockerStore {

  modules: any[];
  @observable output: Object = {};

  constructor() {
    this.modules = MODULES.map(Mdl => new Mdl());
  }

  @action update = (output: any) => {
    this.output = { ...this.output, ...output };
  };

  @action search() {
    this.output = {};
    loop(APP.ActiveDocument.TreeRoot, this.modules, this.update);
  }

}

export default DockerStore;
