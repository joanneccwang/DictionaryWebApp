import { useContext, useState } from 'react';

import { IconArrowDown } from '@components/Icons';
import { FontFamily } from '@/types/font';
import { CurrentFontContext } from '@/context';
import { TypeCurrentFontContext } from '@/context/currentFontContext';

const fonts = {
  [FontFamily.SansSerif]: {
    value: FontFamily.SansSerif,
    displayName: 'Sans Serif',
  },
  [FontFamily.Serif]: {
    value: FontFamily.Serif,
    displayName: 'Serif',
  },
  [FontFamily.Mono]: {
    value: FontFamily.Mono,
    displayName: 'Mono',
  },
};

const Dropdown = ({
  onChooseFont,
  onClose,
}: {
  onChooseFont: (font: FontFamily) => void;
  onClose: () => void;
}) => {
  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
        position: 'absolute',
        top: 'calc(100% + 10px)',
        right: '0px',
        padding: '24px',
        zIndex: 1,
        borderRadius: theme.borderRadius,
        boxShadow: `${theme.boxShadow} ${theme.boxShadowColor}`,
        width: 'max-content',
        backgroundColor: theme.dropdown.bg,
      })}
    >
      {Object.values(fonts).map((font) => (
        <div
          key={font.value}
          css={(theme) => ({
            cursor: 'pointer',
            '&:hover': { color: theme.colors.purple },
            fontFamily: `${font.value}, ${theme.fontFamily}`,
          })}
          onClick={() => {
            onChooseFont(font.value);
            onClose();
          }}
        >
          <div>{font.displayName}</div>
        </div>
      ))}
    </div>
  );
};

function FontDropdown() {
  const { currentFont, changeCurrentFont } = useContext(
    CurrentFontContext
  ) as TypeCurrentFontContext;

  const [isShowFontDropdown, setIsShowFontDropdown] = useState(false);
  const toggleFontDropdown = () => {
    setIsShowFontDropdown(!isShowFontDropdown);
  };
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={toggleFontDropdown}
    >
      <div css={{ marginRight: '14px' }}>{fonts[currentFont].displayName}</div>
      <IconArrowDown />

      {isShowFontDropdown && (
        <Dropdown
          onChooseFont={(font) => changeCurrentFont(font)}
          onClose={() => setIsShowFontDropdown(false)}
        ></Dropdown>
      )}
    </div>
  );
}

export default FontDropdown;
