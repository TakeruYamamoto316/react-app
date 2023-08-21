import React, { useRef } from "react";

interface TodoAddProps {
  buttonText: string;
  handleAddTodoListItem: () => void;
  inputEl: React.RefObject<HTMLTextAreaElement>;
}

export const TodoAdd: React.FC<TodoAddProps> = ({
  buttonText,
  handleAddTodoListItem,
}) => {
  const inputEl = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};
