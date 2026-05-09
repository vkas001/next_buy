import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Seller } from "../types";

interface SellerCardProps {
  seller: Seller;
  onViewProfile: () => void;
  onChat: () => void;
}

export default function SellerCard({
  seller,
  onViewProfile,
  onChat,
}: SellerCardProps) {
  return (
    <View className="mx-6 mb-4 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-4">
      {/* Title */}
      <Text className="text-sm font-bodyMedium text-textSecondary dark:text-darkTextSecondary mb-3 uppercase">
        Seller Info
      </Text>

      {/* Seller Row */}
      <View className="flex-row items-center mb-4">
        {/* Avatar */}
        <View className="w-12 h-12 bg-primary rounded-full items-center justify-center mr-3">
          <Text className="text-base font-heading text-white">
            {seller.avatar}
          </Text>
        </View>

        {/* Info */}
        <View className="flex-1">
          <View className="flex-row items-center gap-2">
            <Text className="text-base font-bodyMedium text-textPrimary dark:text-darkTextPrimary">
              {seller.name}
            </Text>
            {seller.isVerified && (
              <Ionicons name="checkmark-circle" size={16} color="#2563EB" />
            )}
          </View>
          <View className="flex-row items-center gap-3 mt-1">
            <View className="flex-row items-center gap-1">
              <Ionicons name="star" size={12} color="#F59E0B" />
              <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
                {seller.rating}
              </Text>
            </View>
            <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
              {seller.totalSales} sales
            </Text>
            <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
              Joined {seller.joinedDate}
            </Text>
          </View>
        </View>
      </View>

      {/* Location */}
      <View className="flex-row items-center gap-1 mb-4">
        <Ionicons name="location-outline" size={14} color="#64748B" />
        <Text className="text-xs font-body text-textSecondary dark:text-darkTextSecondary">
          {seller.location}
        </Text>
      </View>

      {/* Divider */}
      <View className="border-t border-border dark:border-darkBorder mb-4" />

      {/* Buttons */}
      <View className="flex-row gap-3">
        {/* View Profile */}
        <TouchableOpacity
          onPress={onViewProfile}
          className="flex-1 border border-border dark:border-darkBorder rounded-xl py-3 items-center"
        >
          <Text className="text-sm font-bodyMedium text-textPrimary dark:text-darkTextPrimary">
            View Profile
          </Text>
        </TouchableOpacity>

        {/* Chat */}
        <TouchableOpacity
          onPress={onChat}
          className="flex-1 bg-primary dark:bg-darkPrimary rounded-xl py-3 items-center flex-row justify-center gap-2"
        >
          <Ionicons name="chatbubble-outline" size={16} color="white" />
          <Text className="text-sm font-bodyMedium text-white">Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
