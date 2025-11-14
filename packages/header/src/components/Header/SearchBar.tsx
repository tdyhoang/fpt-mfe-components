import { useEffect, useRef } from "react";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar = ({ isOpen, onClose }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <form
      action="https://fpt.vn/vi/tim-kiem"
      id="searchBar"
      className="search-bar"
      style={{ display: "block" }}
    >
      <input
        ref={inputRef}
        type="text"
        name="q"
        className="text-search"
        autoComplete="off"
        placeholder="Tìm kiếm"
        maxLength={100}
      />
    </form>
  );
};

export default SearchBar;
