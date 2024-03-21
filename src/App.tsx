import { useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Input } from "./components/ui/input";
import { Header } from "./components/header";
import { VERBS, Verb } from "./components/verb";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { fetch } from "@tauri-apps/api/http";

function App() {
  const [verb, setVerb] = useState<VERBS>("GET");
  const [apiResponse, setResponse] = useState("");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: verb,
        headers,
      });
      if (response?.ok) {
        setResponse(response.data as any);
      } else {
        console.log(`HTTP Response Code: ${response?.status}`);
      }
    } catch (error) {
      setResponse(error as any);
    }

    // Uses the 'optional chaining' operator
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="flex flex-col items-center  min-h-screen text-center pt-4">
        <div className="flex flex-col w-1/2">
          <form onSubmit={onSubmit}>
            <div className="flex items-center justify-between">
              <Verb verb={verb} setVerb={setVerb} />
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Headers</Label>
              <Textarea
                id="message"
                rows={10}
                value={JSON.stringify(headers)}
                onChange={(e) => setHeaders(JSON.parse(e.target.value))}
              />
            </div>
            <Button type="submit">GO</Button>
          </form>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl">API Response</h2>
          <pre className="text-left whitespace-pre-wrap">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
