import { useState } from 'react';
import { IconMoon } from '@components/Icons';

const ToggleSwitch = ({ className }: { className?: string }) => {
  const [isOn, setIsOn] = useState(true);
  const handleClickSwitch = () => {
    setIsOn(!isOn);
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
        justifyContent: isOn ? 'start' : 'end',
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
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <ToggleSwitch css={{ marginRight: '20px' }}></ToggleSwitch>

      {/* TODO: change icon fill color */}
      <IconMoon
      // css={(theme) => ({ '& path': { stroke: theme.switch.bg } })}
      ></IconMoon>
    </div>
  );
}

export default ThemeToggle;
