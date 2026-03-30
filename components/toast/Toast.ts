import { useToastStore } from "@/store/ToastStore";

type ToastType = "success" | "error" | "warning";

const createToast = (type: ToastType, msg: string) => {
  const id: number = Date.now() + Math.random();

  useToastStore.getState().addToast({
    id,
    type,
    msg,
  });

  setTimeout(() => {
    useToastStore.getState().removeToast(id);
  }, 3000);
};

export const toast = {
  success: (msg: string) => createToast("success", msg),
  error: (msg: string) => createToast("error", msg),
};
