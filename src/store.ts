import { action, observable, onBecomeObserved } from 'mobx';
import { loop } from './services';
import { VGCore } from 'vgcore';

const APP: VGCore.Application = (window.external as any).Application;

class DockerStore {

  modules: any[];
  @observable output: { [key: string]: number[] };

  constructor(modules: any[]) {
    this.modules = modules.map(Mdl => new Mdl());
    this.output = {};
    onBecomeObserved(this, 'output', () => this.search());
  }

  @action update = (output: { [key: string]: number[] }) => {
    this.output = { ...this.output, ...output };
  };

  @action search() {
    this.output = {};
    loop(APP.ActiveDocument.TreeRoot, this.modules, this.update);
  }

}

export default DockerStore;
