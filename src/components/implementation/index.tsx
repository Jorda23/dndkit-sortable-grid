import { memo } from "react";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import GridContent from "../GridContent";
import CardItem from "../GridItem";
import { SortableCardItem } from "../sortableCardItem";
import { useGridContentActions } from "../../hooks/useGridContentActions";

import { CardItemProps } from "../../interfaces";

import data from "../../data/cardItem.json";

const Implementation = () => {
  const {
    items,
    activeId,
    handleDragEnd,
    handleDragStart,
    handleDragCancel,
    getDataCardOverlay,
  } = useGridContentActions<CardItemProps>(data);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <GridContent>
          {items.map((item, index) => (
            <SortableCardItem key={item.id} {...item} index={index} />
          ))}
        </GridContent>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeId ? <CardItem {...getDataCardOverlay(activeId)} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default memo(Implementation);
