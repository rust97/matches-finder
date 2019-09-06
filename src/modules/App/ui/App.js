import React from "react";

import SearchInput from "../../SearchInput";
import MatchFound from "../../MatchFound/ui/MatchFound";

export default function App() {
  return (
    <div className="mainContainer">
      <MatchFound />
      <SearchInput />
    </div>
  );
}

// /(game=)()*(\d+)/gi
