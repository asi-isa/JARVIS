import { Dispatch, ReactElement, SetStateAction } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import KanbanCol from "./KanbanCol";

export type KanbanItemStatus = "todo" | "doing" | "done";

export type KanbanItem = {
  id: string;
  status: KanbanItemStatus;
  index: number;
};

function categoriesKanbanItems<T extends KanbanItem>(items: T[]) {
  const todoItems: T[] = [];
  const doingItems: T[] = [];
  const doneItems: T[] = [];

  items.forEach((item) => {
    if (item.status === "todo") {
      todoItems.push(item);
    } else if (item.status === "doing") {
      doingItems.push(item);
    } else {
      doneItems.push(item);
    }
  });

  return { todoItems, doingItems, doneItems };
}

interface KanbanProps<T extends KanbanItem> {
  items: T[];
  setItems: Dispatch<SetStateAction<T[]>>;
  renderItem: (item: T) => ReactElement;
}

const Kanban = <T extends KanbanItem>({
  items,
  setItems,
  renderItem,
}: KanbanProps<T>) => {
  const { todoItems, doingItems, doneItems } = categoriesKanbanItems(items);

  function onChange(result: DropResult) {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sourceColumnId = source.droppableId as KanbanItemStatus;
    const destinationColumnId = destination.droppableId as KanbanItemStatus;

    setItems((currentItems) => {
      // decrement index from 'source column items' where index > source.index
      currentItems
        .filter((item) => item.status === sourceColumnId)
        .filter((item) => item.index > source.index)
        .forEach((item) => (item.index -= 1));

      // increment index from 'destination column items' where index >= destination.index
      currentItems
        .filter((item) => item.status === destinationColumnId)
        .filter((item) => item.index >= destination.index)
        .forEach((item) => (item.index += 1));

      // change status and index from dragged item
      const draggedItem = currentItems.filter(
        (item) => item.id === draggableId
      )[0];

      draggedItem.status = destinationColumnId;
      draggedItem.index = destination.index;

      return currentItems.slice();
    });
  }

  return (
    <DragDropContext onDragEnd={onChange}>
      <div className="flex gap-5">
        <KanbanCol
          title="Todo"
          id="todo"
          items={todoItems}
          renderItem={renderItem}
        />
        <KanbanCol
          title="Doing"
          id="doing"
          items={doingItems}
          renderItem={renderItem}
        />
        <KanbanCol
          title="Done"
          id="done"
          items={doneItems}
          renderItem={renderItem}
        />
      </div>
    </DragDropContext>
  );
};

export default Kanban;
