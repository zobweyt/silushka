import { Dynamic, DynamicProps } from "@corvu/utils/dynamic";
import { A } from "@solidjs/router";
import { JSX, ParentProps, Show, splitProps, ValidComponent } from "solid-js";
import { tv } from "tailwind-variants";

import BackButton from "@shared/ui/back-button";

export const styles = tv({
  slots: {
    root: "flex min-h-10 w-full items-center gap-1",
    label: "flex gap-1 text-2xl font-bold",
    before: "flex items-center justify-center gap-1",
    after: "ms-auto flex items-center justify-center gap-1",
  },
});

export type NavigationBaseProps = {
  back?: string;
  label?: JSX.Element;
  before?: JSX.Element;
  after?: JSX.Element;
};

export type NavigationSharedElementProps = ParentProps<{
  class: string | undefined;
}>;

export type NavigationElementProps = NavigationSharedElementProps;

export type NavigationProps = NavigationBaseProps & Partial<NavigationSharedElementProps>;

export const Navigation = <T extends ValidComponent = "div">(props: DynamicProps<T, NavigationProps>) => {
  const [localProps, otherProps] = splitProps(props as NavigationProps, [
    "class",
    "children",
    "back",
    "label",
    "before",
    "after",
  ]);

  return (
    <Dynamic<NavigationElementProps> as="div" class={styles().root({ class: localProps.class })} {...otherProps}>
      <Show when={localProps.back}>{(back) => <BackButton as={A} href={back()} />}</Show>
      <Show when={localProps.before}>{(before) => <div class={styles().before()}>{before()}</div>}</Show>
      <Show when={localProps.label}>{(label) => <h1 class={styles().label()}>{label()}</h1>}</Show>
      <Show when={localProps.after}>{(after) => <div class={styles().after()}>{after()}</div>}</Show>
    </Dynamic>
  );
};
