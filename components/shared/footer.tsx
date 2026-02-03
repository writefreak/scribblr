import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#377389] md:dark:bg-black text-white mt-14 flex justify-between items-center sm:block">
      <div className="flex justify-between p-5 sm:p-10">
        <div className="flex items-center sm:text-2xl">
          <p>The Writrr</p>
        </div>

        <div className="sm:flex gap-10 hidden">
          <div className="space-y-2">
            <h3 className="text-lg">Contact Us</h3>
            <p className="text-sm">hellowritrr@gmail.com</p>
            <p className="text-sm">(+234) 7045287003</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg">Legal</h3>
            <p className="text-sm">Terms Of Service</p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">FAQ</p>
          </div>
        </div>
      </div>
      <div className="sm:border-t text-xs  pr-4 sm:pr-0 md:bg-black dark:text-white text-[#377389] sm:px-10 sm:py-3 font-montserrat">
        <p>© 2024 The Writrr. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
