import { useCallback, useEffect, useState } from "react";
import { useGetFrequentlyAccessed } from "../api";
import { FrequentlyAccessedType } from "../api/types";

const FrequentlyAccessed = () => {
  const [makeRequest, requestState] = useGetFrequentlyAccessed();
  const [response, setResponse] = useState<FrequentlyAccessedType>();

  const getFrequentResource = useCallback(async () => {
    const result = await makeRequest();
    if (result) {
      setResponse(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFrequentResource();
  }, [getFrequentResource]);

  const _renderVisitedList = () => {
    return response?.map((urlPayload, index) => (
      <li key={index}>
        <p>Original URL: {urlPayload.originalUrl}</p>
        <p>
          Short URL: &nbsp;
          <a href={`${urlPayload.baseUrl}/${urlPayload.shortId}`}>
            {urlPayload.baseUrl}/{urlPayload.shortId}
          </a>
        </p>
        <p>Visited: {urlPayload.visitedCount}</p>
      </li>
    ));
  };

  return (
    <section>
      <h6>100 Most Frequently Accessed</h6>
      {requestState.isLoading && <p>Loading Top 100 HITs</p>}
      <ul>{_renderVisitedList()}</ul>
    </section>
  );
};

export default FrequentlyAccessed;
