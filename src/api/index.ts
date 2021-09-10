import { useState } from "react";
import { API_URL } from "./config";

type FetchShortUrlHook = () => [
  (inputUrl: string) => Promise<{
    payload: {
      originalUrl: string;
      shortUrl: string;
    };
  } | null>,
  {
    error: {
      code: number;
      message: string;
    };
    isLoading: boolean;
  }
];

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
