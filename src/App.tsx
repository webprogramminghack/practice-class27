import { useState } from 'react';
import { Refresh } from './components/Refresh';
// import { Basic } from './components/1.AnimateProperty/1.Basic';
import { Transform } from './components/1.AnimateProperty/2.Transform';
import { XAndYRule } from './components/1.AnimateProperty/3.XAndYRule';
import { Colors } from './components/1.AnimateProperty/4.Colors';
import { AddingState } from './components/1.AnimateProperty/5.AddingState';
import { MultipleProperties } from './components/1.AnimateProperty/6.MultipleProperties';
import { TransitionBasic } from './components/2.TransitionProperty/Basic';
import { RepeatAndDelay } from './components/2.TransitionProperty/RepeatAndDelay';
import { InitialPropertyBasic } from './components/3.InitialProperty/Basic/Basic';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div key={count}>
      {/* <Basic /> */}
      {/* <Transform /> */}
      {/* <XAndYRule /> */}
      {/* <Colors /> */}
      {/* <AddingState /> */}
      {/* <MultipleProperties /> */}
      {/* <TransitionBasic /> */}
      {/* <RepeatAndDelay /> */}
      <InitialPropertyBasic />
      <Refresh onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
