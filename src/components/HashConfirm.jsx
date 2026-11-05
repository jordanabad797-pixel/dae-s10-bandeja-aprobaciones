import { useState } from "react";
import Button from "./Button";

// Confirmation of a destructive plan: the person must type the exact hash.
// `typed` lives here because nobody else needs it; `matches` is derived, so it is never stored.
export default function HashConfirm({ hash, onConfirm }) {
  const [typed, setTyped] = useState("");
  const matches = typed === hash;

  return (
    <div className="hash-confirm">
      <label>
        Hash del plan
        <input
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={typed}
          onChange={(event) => setTyped(event.target.value)}
        />
      </label>
      <Button variant="danger" disabled={!matches} onClick={() => onConfirm()}>
        Aprobar
      </Button>
    </div>
  );
}
