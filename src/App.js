import React from 'react'
import Footer from './components/Footer.js';
import AddLayout from './containers/AddLayout.js';
import VisibleLayoutList from './containers/VisibleLayoutList.js';
import StaticGardenLayout from './components/StaticGardenLayout.js';
import StaticCropPieChart from './components/StaticCropPieChart.js';

const App = () => (
  <div>
    <AddLayout />
    <VisibleLayoutList />
    <Footer />
    <StaticGardenLayout />
    <StaticCropPieChart />
  </div>
)

export default App;
