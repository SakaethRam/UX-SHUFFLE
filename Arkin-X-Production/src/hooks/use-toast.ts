// /src/hooks/use-toast.ts
import * as React from 'react';
import { useReducer } from 'react';
import type { ToastProps, ToastActionElement } from '@/components/ui/toast';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Action =
  | { type: 'ADD_TOAST'; toast: ToasterToast }
  | { type: 'UPDATE_TOAST'; toast: Partial<ToasterToast> }
  | { type: 'DISMISS_TOAST'; toastId?: string }
  | { type: 'REMOVE_TOAST'; toastId?: string };

const toastReducer = (state: ToasterToast[], action: Action): ToasterToast[] => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.toast].slice(0, TOAST_LIMIT);
    case 'UPDATE_TOAST':
      return state.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
    case 'DISMISS_TOAST':
      return state.map((t) =>
        t.id === action.toastId ? { ...t, open: false } : t
      );
    case 'REMOVE_TOAST':
      return state.filter((t) => t.id !== action.toastId);
    default:
      return state;
  }
};

export const useToast = () => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const toast = (props: Omit<ToasterToast, 'id'>) => {
    const id = genId();
    const update = { id, ...props, open: true };
    dispatch({ type: 'ADD_TOAST', toast: update });
    setTimeout(() => {
      dispatch({ type: 'DISMISS_TOAST', toastId: id });
    }, TOAST_REMOVE_DELAY);
  };

  const dismiss = (toastId?: string) => {
    dispatch({ type: 'DISMISS_TOAST', toastId });
  };

  return {
    toasts,
    toast,
    dismiss,
  };
};