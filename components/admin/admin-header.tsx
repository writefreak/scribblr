import { BellDot } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { ThemeSwitch } from "../ui/theme/theme-switch";
import { Card } from "../ui/card";

const AdminHeader = () => {
  return (
    <Card className="py-3 px-4 border rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-space-grotesk font-medium">
            Hello, welcome 👋
          </span>
          <span className="text-xs font-montserrat not-dark:text-gray-600">
            Endwell Heritage
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className=" h-7 w-7 rounded-full flex items-center justify-center">
            <img
              src="/img8.jpg"
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <Button className="bg-[#377389] hover:bg-[#377389]/40 h-7 w-7 rounded-full flex items-center justify-center">
            <BellDot height={15} width={15} strokeWidth={1.5} color="white" />
          </Button>
          <ThemeSwitch
            className="h-7 w-7
          "
          />
        </div>
      </div>
    </Card>
  );
};

export default AdminHeader;
