import Line from '@components/Line';
import { IconNewWindow } from '@components/Icons';

function SourceUrl({ urls }: { urls: string[] }) {
  return (
    <section>
      <Line></Line>
      <div css={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <div css={{ marginRight: '20px' }}>Source</div>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          {urls.map((url) => (
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                rowGap: '4px',
                alignItems: 'center',
              }}
            >
              <a
                href={url}
                css={(theme) => ({
                  color: theme.a.color,
                  cursor: 'pointer',
                  marginRight: '10px',
                })}
                target='_blank'
              >
                {url}
              </a>
              <IconNewWindow></IconNewWindow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SourceUrl;
