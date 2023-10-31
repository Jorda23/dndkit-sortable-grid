import { useState } from "react";

import {
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";

import { Identifiable } from "../interfaces/";

export const useGridContentActions = <T extends Identifiable>(
  initialData: T[]
) => {
  const [items, setItems] = useState<T[]>(initialData);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    handleDragCancel();
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const foundItem = items.find((item) => item.id === active.id);

    if (foundItem) {
      setActiveId(foundItem.id);
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const getDataCardOverlay = (id: string): T => {
    return items.find((item) => item.id === id) || ({} as T);
  };

  return {
    items,
    activeId,
    sensors,
    handleDragEnd,
    handleDragStart,
    handleDragCancel,
    getDataCardOverlay,
  };
};
