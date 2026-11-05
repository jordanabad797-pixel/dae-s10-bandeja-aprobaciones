// Reusable button: the look comes from `variant`, the content from `children`.
// `type="button"` goes BEFORE {...rest} so it is only a default: a caller can still pass type="submit".
// `className` is taken out of `rest` and merged, so a caller's class never erases the variant.
export default function Button({ variant = "primary", className = "", children, ...rest }) {
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
}
