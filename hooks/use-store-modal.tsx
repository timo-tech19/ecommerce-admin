import { create } from "zustand";

interface useStoreModalSore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useStoreModal = create<useStoreModalSore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
