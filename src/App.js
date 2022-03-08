import Header from "./components/header/Header";
import Breadcrumb from "./components/header/Breadcrumb";
import SubHeader from "./components/subheader/SubHeader";
import FilterSection from "./components/subheader/FilterSection";
import FoodDescription from "./components/foodDesciption/FoodDescription";

import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Breadcrumb/>
      <SubHeader/>
      <FilterSection/>
      <FoodDescription/>
    </>
  );
}

export default App;
