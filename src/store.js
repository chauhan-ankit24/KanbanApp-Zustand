import { create } from 'zustand';

const store = (set) => ({
    tasks: [{ title: 'Task 1', state: 'PLANNED' }],
    addTask: (title, state) =>
        set((store) => ({
            tasks: [...store.tasks, { title, state }],
        })),
    deleteTask: (title) =>
        set((store) => ({
           er((t tasks: store.tasks.filtask) => task.title !== title)
        }))
});

export const useStore = create(store);