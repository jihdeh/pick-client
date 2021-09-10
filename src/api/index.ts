import { useState } from "react";
import { API_URL } from "./config";
import { FetchFrequentlyAccessedHook, FetchShortUrlHook } from "./types";

export const useGenerateShortUrl: FetchShortUrlHook = () => {
  const [requestState, setRequestState] = useState<{
    error: any;
    isLoading: boolean;
  }>({ error: null, isLoading: false });

  const makeGenerateRequest = async (inputUrl: string) => {
    try {
      setRequestState({
        error: null,
        isLoading: true,
      });

      const response = await fetch(`${API_URL}/url`, {
        method: "POST",
        body: JSON.stringify({ url: inputUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      setRequestState({
        error: null,
        isLoading: false,
      });

      if (!response.ok) {
        throw new Error(result.message);
      }
      return result;
    } catch (errors: any) {
      setRequestState({
        ...requestState,
        error: errors,
      });
    }
  };
  return [makeGenerateRequest, requestState];
};

export const useGetFrequentlyAccessed: FetchFrequentlyAccessedHook = () => {
  const [requestState, setRequestState] = useState<{
    error: any;
    isLoading: boolean;
  }>({ error: null, isLoading: false });

  const makeFrequentRequest = async () => {
    try {
      setRequestState({
        error: null,
        isLoading: true,
      });

      const response = await fetch(`${API_URL}/url`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      setRequestState({
        error: null,
        isLoading: false,
      });

      if (!response.ok) {
        throw new Error(result.message);
      }
      return result;
    } catch (errors: any) {
      setRequestState({
        ...requestState,
        error: errors,
      });
    }
  };
  return [makeFrequentRequest, requestState];
};
