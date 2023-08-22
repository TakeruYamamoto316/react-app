import React from "react";

interface TodoAddProps {
  buttonText: string;
  handleAddTodoListItem: () => void;
  inputEl: React.RefObject<HTMLTextAreaElement>;
}

export const TodoAdd: React.FC<TodoAddProps> = ({
  buttonText,
  handleAddTodoListItem,
  inputEl,
}) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};
