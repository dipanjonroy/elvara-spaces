import { create } from "zustand";

type ToastType = "success" | "error" | "warning";

type ToastProp = {
  id: number;
  type: ToastType;
  msg:string;
};

type ToastStoreProp = {
  toasts: ToastProp[];
  addToast:(toast:ToastProp)=>void;
  removeToast:(id:number)=>void;
};

export const useToastStore = create<ToastStoreProp>((set)=>({
  toasts:[],
  
  addToast:(toast)=>set((state)=>({
    toasts:[...state.toasts,toast]
  })),
  removeToast:(id)=>set((state)=>({
    toasts:state.toasts.filter((toast)=>toast.id !== id),
  }))
}))