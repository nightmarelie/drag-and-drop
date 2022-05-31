import React, { FC, ReactNode } from "react";
import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import typescript from "fela-plugin-typescript";

const renderer = createRenderer({
  plugins: [typescript()],
});

type Props = {
  children: ReactNode | ReactNode[];
  theme?: object;
};

export const StylesProvider: FC<Props> = ({ children, theme = {} }) => {
  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  );
};
