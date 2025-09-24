import React from 'react';
import Layout from './components/Layout/Layout';
import JobsContainer from './components/JobsModule/JobsContainer';
import './styles/global.css';

function App() {
  return (
    <Layout>
      <JobsContainer />
    </Layout>
  );
}

export default App;