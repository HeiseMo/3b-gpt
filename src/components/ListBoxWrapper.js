// ListBoxWrapper.js
import React from "react";

const ListBoxWrapper = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default ListBoxWrapper; // Make sure it's exported as the default export
