import { memo } from "react";

import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import CardItem from "../GridItem";
import { CardItemProps } from "../../interfaces";

export const SortableCardItem = memo((Props: CardItemProps) => {
  const sortable = useSortable({ id: Props.id });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardItem
      ref={setNodeRef}
      {...Props}
      {...attributes}
      {...listeners}
      {...style}
    />
  );
});
