import { useState, useEffect } from "react";

export const useRemoteConfig = <T>(configName: string, fallbackData: T): T => {
  const [data, setData] = useState<T>(fallbackData);

  useEffect(() => {
    const fetchConfig = async () => {
      const configUrl = `/config/${configName}.json`;

      try {
        const response = await fetch(configUrl);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          console.warn(
            `[FPT-MFE] Failed to load config: ${configName}, using fallback.`
          );
        }
      } catch (error) {
        console.error(`[FPT-MFE] Error loading config: ${configName}`, error);
      }
    };

    fetchConfig();
  }, [configName]);

  return data;
};
