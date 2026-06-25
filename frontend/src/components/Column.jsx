import { useDroppable } from "@dnd-kit/core";

function Column({ title, id, children }) {

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div
      id={id}
      className="column"
      ref={setNodeRef}
    >
      <h2>{title}</h2>

      {children}
    </div>
  );
}

export default Column;