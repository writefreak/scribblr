import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

const ContactCards = () => {
  return (
    <div className="py-17">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-5">
        {contact.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={index} href={item.link}>
              <Card className="max-w-75 dark:bg-background/30 not-dark:bg-[#377389]/10 backdrop-blur-xl rounded-xl border border-white/10 p-4  dark:text-white">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-10 w-10 not-dark:bg-[#377389] rounded-full not-dark:border-0 border flex items-center justify-center not-dark:shadow-md">
                    <Icon
                      height={17}
                      width={17}
                      className="not-dark:text-white"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <h3 className="font-semibold font-space-grotesk">
                      {item.title}
                    </h3>
                    <span className="text-xs text-center font-montserrat not-dark:text-gray-600 dark:text-gray-400 w-72 md:w-125">
                      {item.value}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCards;

const contact = [
  {
    icon: Globe,
    title: "WhatsApp",
    value: "+234 808 456 7866",
    link: "#",
  },

  {
    icon: Phone,
    title: "Phone Number",
    value: "+234 808 456 7866",
    link: "#",
  },
  {
    icon: Mail,
    title: "Email",
    value: "iscribbledit@gmail.com",
    link: "#",
  },
];
