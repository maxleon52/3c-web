import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error && (
        <strong style={{ color: "#e57373", padding: "8px 0 8px 0 " }}>
          {error}
        </strong>
      )}
      <input ref={inputRef} {...rest} />
    </>
  );
}
