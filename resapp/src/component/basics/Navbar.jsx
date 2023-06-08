import React from 'react'

const Navbar = ({filterItem, menulist}) => {
  return (
<>
    <nav className='navbar'>
        <div className="btn-group">
            {
                menulist.map((curElement) => {
                    return (
                        <button className='btn-group__item' 
                    onClick = {() => filterItem (curElement)}>
                    {curElement}</button>
                    )
                    
                     
                })
            }
      
    </div>
  </nav>
</>
  );
};

export default Navbar;
