import { useState } from 'react';
import { IconMoon } from '@components/Icons';

import { useDispatch } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';

const ToggleSwitch = ({
  onChange,
  className,
}: {
  onChange: (status: boolean) => unknown;
  className?: string;
}) => {
  const [isOn, setIsOn] = useState(true);
  const handleClickSwitch = () => {
    setIsOn((prevIsOn) => {
      onChange(!prevIsOn);
      return !prevIsOn;
    });
  };
  return (
    <div
      className={className}
      css={(theme) => ({
        height: '20px',
        width: '40px',
        borderRadius: theme.borderRadius,
        backgroundColor: theme.switch.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: isOn ? 'end' : 'start',
        cursor: 'pointer',
        padding: '0px 3px',
      })}
      onClick={() => handleClickSwitch()}
    >
      <div
        css={(theme) => ({
          borderRadius: '100%',
          height: '14px',
          width: '14px',
          backgroundColor: theme.colors.white,
        })}
      ></div>
    </div>
  );
};

function ThemeToggle() {
  const dispatch = useDispatch();

  const handleToggleTheme = (status: boolean) => {
    const theme = status === true ? 'dark' : 'light';
    dispatch(toggleTheme(theme));
  };
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <ToggleSwitch
        css={{ marginRight: '20px' }}
        onChange={(status) => handleToggleTheme(status)}
      ></ToggleSwitch>

      {/* TODO: change icon fill color */}
      <IconMoon
      // css={(theme) => ({ '& path': { stroke: theme.switch.bg } })}
      ></IconMoon>
    </div>
  );
}

export default ThemeToggle;
