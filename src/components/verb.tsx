import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type VERBS = "GET" | "POST" | "PUT" | "DELETE";

export function Verb({
  setVerb,
  verb,
}: {
  setVerb: (v: VERBS) => void;
  verb: VERBS;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {verb}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setVerb("GET")}>GET</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVerb("POST")}>
          POST
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVerb("PUT")}>PUT</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVerb("DELETE")}>
          DELETE
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
