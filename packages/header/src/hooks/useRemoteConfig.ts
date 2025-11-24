import { useState, useEffect } from "react";

export const useRemoteConfig = <T>(configName: string, fallbackData: T): T => {
  const [data, setData] = useState<T>(fallbackData);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const timestamp = new Date().getTime();
        const url = `/config/${configName}.json?t=${timestamp}`;

        const response = await fetch(url);
        if (response.ok) {
          const json = (await response.json()) as T;
          setData(json);
        } else {
          console.warn(
            `[FPT-MFE-COMPONENTS] Failed to load config: ${configName}, using fallback.`
          );
        }
      } catch (error) {
        console.error(
          `[FPT-MFE-COMPONENTS] Error loading config: ${configName}`,
          error
        );
      }
    };

    void fetchConfig();
  }, [configName]);

  return data;
};
