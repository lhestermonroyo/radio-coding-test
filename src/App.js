import './App.css';
import React, { useEffect, useState } from 'react';
import mockData from './mockData';
import OptionGroup from './components/OptionGroup';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mockData);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <h1>Radio Button Test</h1>
      <OptionGroup data={data} />
    </div>
  );
};

export default App;
