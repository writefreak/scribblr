import {
  IconBellRinging,
  IconBuilding,
  IconCategory,
  IconChartBar,
  IconDashboard,
  IconHomePlus,
  IconMessage,
  IconNews,
  IconSettings,
} from "@tabler/icons-react";
export const data = {
  user: {
    name: "The Scribblr",
    email: "YS@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Blogs",
      url: "/admin/blogs",
      icon: IconNews,
    },
    {
      title: "Comments",
      url: "/admin/comments",
      icon: IconMessage,
    },

    {
      title: "Categories",
      url: "/admin/categories",
      icon: IconCategory,
    },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: IconChartBar,
    },
    {
      title: "Notifications",
      url: "/admin/notifications",
      icon: IconBellRinging,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: IconSettings,
    },
  ],
};

export enum Paths {
  Home = "/",
  Signin = "/auth/signin",
  Signup = "/auth/signup",
  VerifyEmail = "/auth/verify",
  ResetPassword = "/auth/reset-password",
}

export const APP_TITLE = "The Scribblr" as const;
// export const APP_EMAIL = `joshuahumphrey579@gmail.com` as const;
// export const ProductPath = `/admin/products` as const;
