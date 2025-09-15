import React from "react";

export default function Field({ label, htmlFor, children, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-emerald-600 dark:text-stone-50 mb-2"
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <div className="text-sm text-red-500 dark:text-red-400 mt-1">
          {error.message}
        </div>
      )}
    </div>
  );
}

function getChildId(children) {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
}
