import './App.css';
import { Tabs, Badge } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Live from './compents/live/Live';

const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge> },
  { title: <Badge text={'直播'}>Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> },
];

function App() {
  return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*  <p>*/}
        {/*    BJ TV*/}
        {/*  </p>*/}
        {/*  <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />*/}
        {/*</header>*/}
        <div>
          <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              <Live />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            </div>
          </Tabs>
        </div>
      </div>
  );
}

export default App;
