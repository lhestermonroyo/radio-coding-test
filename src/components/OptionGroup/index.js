import React, { useState } from 'react';
import OptionItem from '../OptionItem';

const OptionGroup = (props) => {
  const { data } = props;
  const { menus, rules } = data;

  const [notCompatibleMenu, setNotCompatibleMenu] = useState([]);
  const [lastItemMenuCounter, setLastItemMenuCounter] = useState(null);

  const handleCompatibility = (value, menuCounter) => {
    // if under same menu/group, the not compatible menu must reset
    // else the not compatible menu will keep on adding record
    if (lastItemMenuCounter === menuCounter) {
      if (rules[value]) {
        setNotCompatibleMenu(rules[value]);
      } else {
        setNotCompatibleMenu(notCompatibleMenu.concat(rules[value]));
      }
    } else {
      setLastItemMenuCounter(menuCounter);
      setNotCompatibleMenu(notCompatibleMenu.concat(rules[value]));
    }
  };

  // check if the the items is in the first menu/group
  const checkFirstGroup = (isFirstTime, menuCounter) => {
    return isFirstTime && menuCounter === 0;
  };

  // check if the item exists on the not compatible menu, the radio button will be disabled
  const checkCompatibility = (menuCounter, itemId, isFirstTime) => {
    let validateFirstGroup = checkFirstGroup(isFirstTime, menuCounter);

    if (validateFirstGroup) {
      if (validateFirstGroup === true) {
        return true;
      } else {
        return false;
      }
    } else {
      if (menuCounter === 0 || !notCompatibleMenu.includes(parseInt(itemId))) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <React.Fragment>
      {menus.map((menu, menuCounter) => {
        return (
          <div key={menuCounter} className='option-group'>
            {menu.map((item, itemCounter) => {
              return (
                <OptionItem
                  key={itemCounter}
                  menuCounter={menuCounter}
                  item={item}
                  notCompatibleMenu={notCompatibleMenu}
                  handleCompatibility={handleCompatibility}
                  checkCompatibility={checkCompatibility}
                />
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default OptionGroup;
