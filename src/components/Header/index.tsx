import { IconLogo } from '@components/Icons';
import ThemeToggle from '@components/ThemeToggle';
import FontDropdown from '@components/FontDropdown';

function Header() {
  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <IconLogo></IconLogo>
      <div
        css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <FontDropdown></FontDropdown>
        <div
          css={(theme) => ({
            width: '1px',
            backgroundColor: theme.colors.grayE9,
            height: '100%',
            margin: '0 26px',
          })}
        ></div>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}

export default Header;
