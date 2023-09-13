// Theme.js
import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../SVG/MoonIcon';
import { SunIcon } from '../SVG/SunIcon';

export default function Theme({ toggleTheme, isDarkMode }) {
  const switchColor = isDarkMode ? 'primary-100' : 'warning';

  return (
    <Switch
      defaultSelected={isDarkMode}
      size="lg"
      color={switchColor}
      onClick={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    >
    </Switch>
  );
}