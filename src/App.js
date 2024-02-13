// import './App.css';
import DemoHookUseState from './Hooks/DemoHookUseState';
import DemoUseCallback from './Hooks/DemoUseCallback';
import DemoUseContext from './Hooks/DemoUseContext';
import DemoUseEffect from './Hooks/DemoUseEffect';
import DemoUseMemo from './Hooks/DemoUseMemo';
import DemoUseReducer from './Hooks/DemoUseReducer';
import DemoUseRef from './Hooks/DemoUseRef';
import ContextProvider from './Hooks/Context/ContextProvider';
import DemoReduxApp from './Hooks/DemoReduxApp';
import DemoUseSpring from './Hooks/ReactSpring/DemoUseSpring';
import Ex2UseSpring from './Hooks/ReactSpring/Ex2UseSpring';


function App() {
  return (
    <ContextProvider>
      {/* <DemoHookUseState /> */}
      {/* <DemoUseEffect /> */}
      {/* <DemoUseCallback /> */}
      {/* <DemoUseMemo /> */}
      {/* <DemoUseRef /> */}
      {/* <DemoUseReducer /> */}
      {/* <DemoUseContext /> */}
      {/* <DemoReduxApp /> */}
      {/* <DemoUseSpring /> */}
      <Ex2UseSpring />
    </ContextProvider>
  );
}

export default App;
