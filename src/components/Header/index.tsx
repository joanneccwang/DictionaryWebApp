import { IconLogo } from '@components/Icons';

function Header() {
  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '50px',
      }}
    >
      <IconLogo></IconLogo>
      <div>Toolbar</div>
    </header>
  );
}

export default Header;
