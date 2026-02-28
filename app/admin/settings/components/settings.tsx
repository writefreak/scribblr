"use client";
import React, { useState } from "react";
import {
  User,
  Globe,
  Lock,
  Camera,
  ShieldCheck,
  Save,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
    { id: "site", label: "Site Settings", icon: <Globe className="w-4 h-4" /> },
    { id: "security", label: "Security", icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <div className="pb-20">
      {/* Header Area */}
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl font-bold tracking-tight font-space-grotesk">
          Settings
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm font-montserrat">
          Manage your account, site preferences, and security.
        </p>
      </div>

      {/* Sub-Header Tabs */}
      <div className="flex items-center gap-1 border-b mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold font-montserrat transition-all relative whitespace-nowrap ${
              activeTab === tab.id
                ? "text-[#377389]"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
          >
            {tab.icon}
            <span className="text-xs md:text-sm">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#377389] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="not-dark:bg-white  border rounded-3xl p-6 md:p-10 shadow-sm">
        {/* PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="w-20 h-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border-2 border-zinc-200 dark:border-zinc-700 overflow-hidden">
                  <User className="w-8 h-8 text-zinc-400" />
                </div>
                <button className="absolute -bottom-2 -right-2 p-2 bg-[#377389] text-white rounded-full shadow-lg hover:scale-105 transition-transform">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
              <div>
                <h3 className="font-bold font-space-grotesk">Profile Avatar</h3>
                <p className="text-xs text-zinc-400 font-montserrat">
                  Click the icon to upload a new photo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-montserrat">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full p-3 text-xs md:text-sm rounded-xl border bg-zinc-50 dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-[#377389]/40 font-montserrat "
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-montserrat">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@blogsite.com"
                  className="w-full p-3 text-xs md:text-sm rounded-xl border bg-zinc-50 dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-[#377389]/40 font-montserrat "
                />
              </div>
            </div>
          </div>
        )}

        {/* SITE SETTINGS TAB */}
        {activeTab === "site" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-5 border rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50">
              <div>
                <p className="text-sm font-bold font-space-grotesk">
                  Maintenance Mode
                </p>
                <p className="text-xs text-zinc-400 font-montserrat">
                  Offline the site for visitors during updates.
                </p>
              </div>
              <input
                type="checkbox"
                className="w-10 h-5 accent-[#377389] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-5 border rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50">
              <div>
                <p className="text-sm font-bold font-space-grotesk">
                  Auto-save Drafts
                </p>
                <p className="text-xs text-zinc-400 font-montserrat">
                  Automatically save your work every 30 seconds.
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-10 h-5 accent-[#377389] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === "security" && (
          <div className="space-y-8">
            <div className="space-y-4 pt-2">
              <Button
                variant="outline"
                className="w-full md:w-auto px-8 rounded-xl font-bold font-montserrat text-xs border-zinc-200"
              >
                Change Password
              </Button>
              <Button
                variant="ghost"
                className="w-full md:w-auto px-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl font-bold font-montserrat text-xs flex gap-2"
              >
                <Trash2 className="w-4 h-4" /> Deactivate Account
              </Button>
            </div>
          </div>
        )}

        {/* Action Bar */}
        <div className="mt-12 pt-8 border-t flex items-center justify-between">
          <p className="hidden md:block text-[10px] text-zinc-400 font-montserrat uppercase font-bold tracking-widest">
            Last updated: Feb 28, 2026
          </p>
          <Button className="w-full text-xs md:text-sm md:w-auto bg-[#377389] hover:bg-[#2c5d6f] text-white rounded-xl px-12 h-11 font-bold font-montserrat  flex gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
