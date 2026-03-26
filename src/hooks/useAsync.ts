// ============================================================
// useAsync — generic hook for async data fetching
// Handles loading, error, and data states.
// ============================================================
import { useState, useEffect, useCallback } from "react";

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsync<T>(
  asyncFn: () => Promise<{ data: T; success: boolean; message?: string }>,
  deps: unknown[] = []
) {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const result = await asyncFn();
      setState({ data: result.data, loading: false, error: null });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setState({ data: null, loading: false, error: message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { ...state, refetch: execute };
}
