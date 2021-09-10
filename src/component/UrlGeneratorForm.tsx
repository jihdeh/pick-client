import React, { ChangeEvent, FormEvent, useState } from "react";
import validator from "validator";
import { useGenerateShortUrl } from "../api";

const UrlGeneratorForm: React.FC<{}> = () => {
  const [urlInput, setUrlInput] = useState<string>("");
  const [makeRequest, requestState] = useGenerateShortUrl();
  const [shortUrlResponse, setShortUrlResponse] = useState<{
    shortUrl: string;
    originalUrl: string;
  }>();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validator.isURL(urlInput)) return;
    const response = await makeRequest(urlInput);
    if (response?.payload) {
      setShortUrlResponse(response?.payload);
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUrlInput(value);
  };

  const _renderShortUrlResponse = () => (
    <section>
      <p>
        Short URL:
        <a href={shortUrlResponse?.shortUrl} title="short url">
          {shortUrlResponse?.shortUrl}
        </a>
      </p>
      <p>Original URL: {shortUrlResponse?.originalUrl}</p>
    </section>
  );

  const _renderShortUrlError = () => (
    <section>
      <p className="alert">{requestState.error.message}</p>
    </section>
  );

  return (
    <div className="center">
      <form onSubmit={onSubmit}>
        <input type="text" value={urlInput} onChange={onInputChange} />
        <button type="submit">Submit</button>
      </form>
      {requestState.isLoading && <p>Generating url....</p>}
      {shortUrlResponse && _renderShortUrlResponse()}
      {requestState.error && _renderShortUrlError()}
      {urlInput && !validator.isURL(urlInput) && (
        <p className="alert">URL is invalid</p>
      )}
    </div>
  );
};

export default UrlGeneratorForm;
