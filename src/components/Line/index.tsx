function Line() {
  return (
    <div
      css={(theme) => ({
        flex: '1',
        height: '1px',
        background: theme.line.bg,
      })}
    ></div>
  );
}

export default Line;
