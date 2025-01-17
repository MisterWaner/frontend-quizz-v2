import { create } from 'zustand';

export type LayoutState = {
    isSidebarOpen: boolean;
};

type LayoutAction = {
    openSidebar: () => void;
    closeSidebar: () => void;
};

export const useLayoutStore = create<LayoutState & LayoutAction>()(
    (set) => ({
        isSidebarOpen: false,
        openSidebar: () => {
            set({ isSidebarOpen: true });
        },
        closeSidebar: () => {
            set({ isSidebarOpen: false });
        },
    })
);