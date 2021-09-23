import React, { useEffect, useState } from 'react';

const OptionItem = (props) => {
  const {
    menuCounter,
    item,
    checkCompatibility,
    notCompatibleMenu,
    handleCompatibility,
  } = props;

  const [isFirstTime, setIsFirstTime] = useState(true);

  // Check if compatible menu is not empty, it means that a user already clicked a radio button. It removes the default state that the first group only must be enabled.
  useEffect(() => {
    if (notCompatibleMenu.length !== 0) {
      setIsFirstTime(false);
    }
  }, [notCompatibleMenu]);

  return (
    <div
      className={`${
        (isFirstTime && menuCounter !== 0) ||
        (checkCompatibility(menuCounter, item.id) && 'active')
      } option-item`}
    >
      <input
        type='radio'
        disabled={
          (isFirstTime && menuCounter !== 0) ||
          !checkCompatibility(menuCounter, item.id)
        }
        name={`optionMenu${menuCounter}`}
        onClick={(e) => handleCompatibility(e.target.value, menuCounter)}
        value={item.id}
      />{' '}
      {item.value}
    </div>
  );
};

export default OptionItem;
