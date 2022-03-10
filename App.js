import React from 'react';
import Child from './components/child/child';
import {TransactionProvider} from './components/transectioncontext/transectioncontext';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;