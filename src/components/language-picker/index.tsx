"use client";

import { useState, useRef, useEffect, useTransition } from "react";

type Language = {
  code: string;
  label: string;
  flag: string; // ISO 3166-1 alpha-2 country code (used by flag-icons)
};

type Props = {
  languages: Language[];
  lang?: string;
  onChange?: (code: string) => void;
};

export default function LanguagePicker({
  languages,
  lang: selected,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const startTransition = useTransition()[1];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((lang) => lang.code === selected);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setIsOpen(false);
    if (onChange) {
      startTransition(() => {
        onChange(code);
      });
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full flex items-center gap-2 focus:outline-none w-fit cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={`fi fis fi-${selectedLang?.flag} text-4xl rounded-full`}
        ></span>
        <span className="text-white">{selectedLang?.label}</span>
      </button>

      {isOpen && (
        <div
          className="min-w-56 end-0 absolute z-10 mt-4 overflow-hidden w-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="listbox"
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              role="option"
              aria-selected={selected === lang.code}
              tabIndex={0}
              onClick={() => handleSelect(lang.code)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSelect(lang.code);
              }}
              className={`cursor-pointer select-none w-full px-4 py-3 text-sm flex items-center gap-2 ${
                selected === lang.code
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className={`fi fi-${lang.flag}`}></span>
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
