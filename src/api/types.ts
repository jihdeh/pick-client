export type FetchShortUrlHook = () => [
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

export type FrequentlyAccessedType = [
  {
    originalUrl: string;
    baseUrl: string;
    shortId: string;
    visitedCount: number;
  }
];

export type FetchFrequentlyAccessedHook = () => [
  () => Promise<FrequentlyAccessedType | null>,
  {
    error: {
      code: number;
      message: string;
    };
    isLoading: boolean;
  }
];
