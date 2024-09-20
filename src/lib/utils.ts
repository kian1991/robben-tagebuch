import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fakeLatency() {
  return new Promise((res) => setTimeout(res, Math.random() * 5000));
}
