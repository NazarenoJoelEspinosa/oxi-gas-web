import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'oxi-gas-quote-cart:v1';

function safeParseCodes(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === 'string');
  } catch {
    return [];
  }
}

export function useQuoteCart() {
  const [codes, setCodes] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    return safeParseCodes(localStorage.getItem(STORAGE_KEY));
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(codes));
    } catch {
      // ignore (private mode / quota)
    }
  }, [codes]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      setCodes(safeParseCodes(event.newValue));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const set = useMemo(() => new Set(codes), [codes]);

  const has = useCallback((code: string) => set.has(code), [set]);

  const add = useCallback((code: string) => {
    setCodes((current) => (current.includes(code) ? current : [...current, code]));
  }, []);

  const remove = useCallback((code: string) => {
    setCodes((current) => current.filter((c) => c !== code));
  }, []);

  const toggle = useCallback((code: string) => {
    setCodes((current) => (current.includes(code) ? current.filter((c) => c !== code) : [...current, code]));
  }, []);

  const clear = useCallback(() => setCodes([]), []);

  return {
    codes,
    count: codes.length,
    has,
    add,
    remove,
    toggle,
    clear,
  } as const;
}

