import React,{useState} from 'react'
import "./style.css";
// import  Menus  from './Menu';
import Menu from './Menu';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((curElement) =>{
  return curElement.category;
})
), "All", 
]
console.log(uniqueList);



const Apple = () => {
  const [menuData, setMenuData ] = useState(Menu);
  const [menulist, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
  if (category==="All") {
    setMenuData(Menu);
    return;
    
  }


    const updatedList = Menu.filter((curElement ) => {
      return curElement.category === category;
    });
    setMenuData(updatedList);
  };

  return (
  <>
    <Navbar filterItem = {filterItem} menulist = {menulist}/>
    <MenuCard menuData={menuData}/>
  </>
  );
  
};
export default Apple;


