import React from 'react';
import ActivityCard from './components/ActivityCard/Component';

function App() {

  const activeDay = {
    sunday: 'active',
    friday: 'active'
  }

  return (
    <div className="App">
      <ActivityCard />
        
    </div>
  );
}

export default App;
