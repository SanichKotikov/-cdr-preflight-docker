import React from 'react';
import ReactDOM from "react-dom";
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import modules from './modules';
import DockerStore from './store';

const store = new DockerStore(modules);

@observer
class Docker extends React.Component<any> {

  render() {
    const output = toJS(store.output);

    return (
      <div>
        {Object.keys(output).map((key: string) => (
          <div key={key}>
            {key}: {output[key].length}
          </div>
        ))}
      </div>
    );
  }

}

ReactDOM.render(
  <Docker />,
  document.getElementById('docker')
);
