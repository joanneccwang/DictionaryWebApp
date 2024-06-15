import { IconLogo } from '@components/Icons';
import ThemeToggle from '@components/ThemeToggle';

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
      <div>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}

export default Header;
