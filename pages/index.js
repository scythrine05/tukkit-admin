import React from "react";
import Link from "next/link";

//Containers
import Cards from "../containers/Cards";

//Components
import Button from "../components/Button";

//Icons
import { POSTADD } from "../utils/Icons";

export default function Posts() {
  return (
    <div>
      <div className="px-5">
        <Link href="/editor">
          <Button label={<POSTADD />} />
        </Link>
      </div>
      <Cards />
    </div>
  );
}
