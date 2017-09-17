import * as React from 'react';
import * as ReactDOM from "react-dom";
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import DockerStore from './store';

const store = new DockerStore();

@observer
class Docker extends React.Component<any, any> {

  componentDidMount() {
    store.search();
  }

  render() {
    const output = toJS(store.output);
    const keys = Object.keys(output);

    return (
      <div>
        {keys.map((key: string) => {
          const count = output[key].length;
          return count ? <div key={key}>{key}: {output[key].length}</div> : null;
        })}
      </div>
    );
  }

}

ReactDOM.render(
  <Docker />,
  document.getElementById('docker')
);
