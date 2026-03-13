import { ReactNode } from "react";
import { create } from "zustand";

type ModalAlign = "center" | "left" | "right";

interface ModalStore {
  isModalOpen: boolean;
  modalId: string;
  modal: ReactNode | null;
  align?: ModalAlign;

  openModal: (id: string, modal: ReactNode, align?: ModalAlign) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalId: "",
  modal: null,
  align: "center",

  openModal: (id: string, modal: ReactNode, align?: ModalAlign) =>
    set({ isModalOpen: true, modalId: id, modal: modal, align }),
  closeModal: () =>
    set({ isModalOpen: false, modalId: "", modal: null, align: "center" }),
}));
