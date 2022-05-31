import { useFela, StyleProps } from "react-fela";
import { CSSObject } from "fela";

export type Styles = CSSObject & {
  nested?: { [selector: string]: CSSObject };
};

type StylesFunction = <Theme>(
  stylesProps: Required<StyleProps<Theme, Theme>>
) => Styles;

export type Rule = StylesFunction | Styles;

export type CreateRule<TProps> = (props: TProps) => Rule;

export interface UseStyle<Theme> {
  css: (...styles: Rule[]) => string;
  theme: Theme;
}

export const useStyles = <Theme = any>(): UseStyle<Theme> => {
  const { theme } = useFela<Theme>();

  return {
    ...(useFela<Theme, Theme>(theme) as Exclude<
      UseStyle<Theme>,
      "renderer | matchMedia"
    >),
  };
};
