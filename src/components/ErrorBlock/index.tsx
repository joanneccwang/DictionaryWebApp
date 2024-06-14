function ErrorBlock({ error }: { error: { title: string; message: string } }) {
  return (
    <div
      css={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '24px',
      }}
    >
      <div
        css={{
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
        }}
      >
        {error.title}
      </div>
      <p
        css={(theme) => ({
          color: theme.text.secondary,
        })}
      >
        {error.message}
      </p>
    </div>
  );
}

export default ErrorBlock;
