import React from 'react'
import Footer from './components/Footer.js';
import AddLayout from './containers/AddLayout.js';
import VisibleLayoutList from './containers/VisibleLayoutList.js';
// the below is a static garden layout ( exmaple of one you can produce with the form )
// import StaticGardenLayout from './components/StaticGardenLayout.js';
import CropPieChartWithDataFromFirebase from './components/CropPieChartWithDataFromFirebase.js';

const App = () => (
  <div>
    <AddLayout />
    <VisibleLayoutList />
    <Footer />
    <CropPieChartWithDataFromFirebase />
  </div>
)

export default App;
