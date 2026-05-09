export interface ProfileStats {
  listings: number;
  orders: number;
  rating: string;
  wishlist: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: string;
  stats: ProfileStats;
  isVerified: boolean;
}
