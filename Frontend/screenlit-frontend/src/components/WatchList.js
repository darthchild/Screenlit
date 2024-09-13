import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

const watchList = () => {
  return (
    <div className="flex space-x-2">
      <Button variant="default" className="bg-zinc-800 text-white hover:bg-zinc-700">
        <PlayIcon className="mr-2 h-4 w-4" /> Play Trailer
      </Button>
      <Button variant="outline" className="bg-white text-zinc-800 hover:bg-zinc-100">
        See Reviews
      </Button>
    </div>
  );
};

export default watchList;