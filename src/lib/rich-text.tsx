import type { ReactNode } from "react";

const BOLD_MARKER = "**";

/**
 * Renders translation copy with its key phrase emphasised.
 * Supports `**phrase**` markers, and falls back to highlighting `boldText`
 * when the copy has no markers.
 */
export function renderEmphasis(
  text: string,
  boldText: string | undefined,
  emphasisClassName: string
): ReactNode {
  if (text.includes(BOLD_MARKER)) {
    return text.split(BOLD_MARKER).map((part, index) =>
      index % 2 === 1 ? (
        <strong className={emphasisClassName} key={`${part}-${index}`}>
          {part}
        </strong>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      )
    );
  }

  const start = boldText ? text.indexOf(boldText) : -1;
  if (!boldText || start === -1) {
    return text;
  }

  return (
    <>
      {text.slice(0, start)}
      <strong className={emphasisClassName}>{boldText}</strong>
      {text.slice(start + boldText.length)}
    </>
  );
}
