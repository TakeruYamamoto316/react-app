import React, { memo } from "react";

type TodoTitleProps = {
  title: string,
  as?: "h1" | "h2",
}

export const TodoTitle: React.FC<TodoTitleProps> = memo(({ title, as }: TodoTitleProps): React.ReactNode => {
  if (as === "h1") return <h1>{title}</h1>;
  if (as === "h2") return <h2>{title}</h2>;
  return <p>{title}</p>;
});
