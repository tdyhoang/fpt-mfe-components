import { useState } from "react";

export const useLocation = () => {
  const [displayLocation] = useState("Chọn vị trí");
  const openLocationPicker = () => {};

  return { displayLocation, openLocationPicker };
};
