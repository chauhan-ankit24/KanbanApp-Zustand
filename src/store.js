import { create } from 'zustand';
import {devtools,persist} from 'zustand/middleware';

const store = (set) => ({
    tasks: [],
    draggedTask: null,
    addTask: (title, state) =>
        set((store) => ({
            tasks: [...store.tasks, { title, state }],
        })),
    deleteTask: (title) =>
        set((store) => ({
            tasks: store.tasks.filter((task) => task.title !== title)
        })),
    setDraggedTask: (title) => set({ draggedTask: title }),
    moveTask: (title, state) => set((store) => ({
        tasks: store.tasks.map((task) => {
            if (task.title === title) {
                return { title, state };
            }
            return task;
        })
    }))
});

export const useStore = create(persist(devtools(store),{name:"store"}));