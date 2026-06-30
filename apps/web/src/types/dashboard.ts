export interface StatCard {
  title: string;
  value: string | number;
  description?: string;
}

export interface QuickAction {
  id: string;
  title: string;
  href: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  timestamp: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  location: string;
}