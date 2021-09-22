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

  useEffect(() => {
    if (notCompatibleMenu.length !== 0) {
      setIsFirstTime(false);
    }
  }, [notCompatibleMenu]);

  return (
    <div
      className={`${
        checkCompatibility(menuCounter, item.id) && 'active'
      } option-item`}
    >
      <input
        type='radio'
        disabled={!checkCompatibility(menuCounter, item.id, isFirstTime)}
        name={`optionMenu${menuCounter}`}
        onClick={(e) => handleCompatibility(e.target.value, menuCounter)}
        value={item.id}
      />{' '}
      {item.value}
    </div>
  );
};

export default OptionItem;
