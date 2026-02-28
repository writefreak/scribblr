"use client";
import React, { useState } from "react";
import {
  Bell,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  CheckCheck,
  Trash2,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "comment",
    title: "New Comment",
    description: "John Doe commented on 'University Students Protest...'",
    time: "2 mins ago",
    isRead: false,
    icon: <MessageSquare className="w-4 h-4 text-blue-500" />,
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 2,
    type: "system",
    title: "Trending Post",
    description: "Your post 'New Mobile App...' has reached 1k views!",
    time: "1 hour ago",
    isRead: false,
    icon: <TrendingUp className="w-4 h-4 text-green-500" />,
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    id: 3,
    type: "alert",
    title: "Security Alert",
    description: "New login detected from a Lagos, Nigeria IP address.",
    time: "5 hours ago",
    isRead: true,
    icon: <AlertCircle className="w-4 h-4 text-amber-500" />,
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    id: 4,
    type: "user",
    title: "New Contributor",
    description: "Sarah Jenkins accepted your invitation to join as Editor.",
    time: "Yesterday",
    isRead: true,
    icon: <UserPlus className="w-4 h-4 text-purple-500" />,
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
];

export default function NotifWrapper() {
  const [filter, setFilter] = useState("all");
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const deleteNotif = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Filter logic simplified to All vs Unread
  const filteredNotifications = notifications.filter((n) =>
    filter === "unread" ? !n.isRead : true,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="md:text-2xl text-xl font-bold tracking-tight font-space-grotesk flex items-center gap-3">
            Notifications
            {unreadCount > 0 && (
              <span className="bg-[#377389] text-white text-xs px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm font-montserrat">
            Stay updated with your blog's activity and alerts.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl w-fit">
        {["all", "unread"].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-6 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              filter === t
                ? "bg-white dark:bg-zinc-800 shadow-sm text-[#377389]"
                : "text-zinc-500 hover:text-zinc-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`group relative flex items-start gap-4 p-4 rounded-2xl border transition-all hover:shadow-md ${
                notif.isRead
                  ? "not-dark:bg-white  border-zinc-100 dark:border-zinc-900"
                  : "not-dark:bg-white  border-l-4 border-l-[#377389] border-y-zinc-100 border-r-zinc-100 dark:border-zinc-900 shadow-sm"
              }`}
            >
              <div
                className={`shrink-0 w-10 h-10 rounded-full ${notif.bg} flex items-center justify-center`}
              >
                {notif.icon}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`text-sm font-bold font-space-grotesk ${notif.isRead ? "text-zinc-600" : "text-zinc-900 dark:text-zinc-100"}`}
                  >
                    {notif.title}
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-montserrat uppercase font-bold">
                    {notif.time}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-zinc-500 font-montserrat leading-relaxed">
                  {notif.description}
                </p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteNotif(notif.id)}
                  className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-zinc-400 hover:text-red-600 rounded-full transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center space-y-4 border-2 border-dashed rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto text-zinc-400">
              <Bell className="w-8 h-8" />
            </div>
            <p className="text-zinc-500 font-montserrat italic">
              {filter === "unread"
                ? "No unread notifications."
                : "All caught up!"}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={markAllRead}
          className="bg-[#377389] text-white font-semibold text-xs md:text-sm flex gap-2 items-center"
        >
          <CheckCheck className="w-4 h-4" /> Mark all as read
        </Button>
      </div>
    </div>
  );
}
