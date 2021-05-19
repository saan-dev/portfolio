import DropDone from './components/DropDone';
import MathGarden from './components/MathGarden';
import Flags from './components/Flags';
import Voicme from './components/Voicme';
import Landing from './components/Landing';
import { MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {
  Switch,
  Route, useLocation
} from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'

function App() {
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState('saanrashid@gmail.com');
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  useEffect(() => {
    if (copied) {
      setValue("Copied!")
      setTimeout(() => {
        setValue("saanrashid@gmail.com")
        setCopied(false)
      }, 1000);
    }
  }, [copied]);

  return (
    <div >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dropdone" component={DropDone} />
        <Route path="/mathgarden" component={MathGarden} />
        <Route path="/flags" component={Flags} />
        <Route path="/voicme" component={Voicme} />
      </Switch>
      <footer>
        <CopyToClipboard text={value}
          onCopy={() => setCopied(true)}>
          <Button className="email" type="default"> {value} <MailOutlined /></Button>
        </CopyToClipboard>
      </footer>
    </div >
  );
}

export default App;
