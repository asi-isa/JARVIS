import { ReactElement } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { KanbanItem, KanbanItemStatus } from ".";

interface KanbanColProps<T extends KanbanItem> {
  id: KanbanItemStatus;
  title: string;
  items: T[];
  renderItem: (item: T) => ReactElement;
}

function byIdxAsc(a: KanbanItem, b: KanbanItem) {
  return a.index - b.index;
}

const KanbanCol = <T extends KanbanItem>({
  id,
  title,
  items,
  renderItem,
}: KanbanColProps<T>) => {
  return (
    <div className="flex flex-col basis-full gap-3 ">
      <p>{title}</p>

      <Droppable droppableId={id}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              className="flex flex-col bg-[var(--bg-muted)] h-full"
            >
              {items.sort(byIdxAsc).map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-3"
                        >
                          {renderItem(item)}
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default KanbanCol;
