const Body = async () => (
  <box>
    <box
      css={`
        color: red;
      `}
    >
      test
    </box>
    <box />
    <></>
  </box>
);

export const Main = () => (
  <>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Render Change 1</title>

    <style
      css={`
        body {
          margin: 0;
        }
      `}
    />

    <Body />
  </>
);
