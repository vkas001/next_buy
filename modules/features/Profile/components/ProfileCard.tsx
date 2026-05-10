import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface ProfileCardProps {
  name?: string;
  email?: string;
  location?: string;
  avatar?: string;
  listings?: number;
  orders?: number;
  rating?: string;
  wishlist?: number;
  onEdit?: () => void;
}

export default function ProfileCard({
  name = "John Doe",
  email = "john@example.com",
  location = "Kathmandu, Nepal",
  avatar = "JD",
  listings = 12,
  orders = 48,
  rating = "4.8 ⭐",
  wishlist = 5,
  onEdit,
}: ProfileCardProps) {
  return (
    <View
      style={{
        marginHorizontal: 24,
        marginBottom: 24,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FED7AA",
        borderRadius: 24,
        padding: 20,
      }}
    >
      {/* Avatar + Info + Edit */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}
      >
        {/* Avatar */}
        <View
          style={{
            width: 64,
            height: 64,
            backgroundColor: "#2563EB",
            borderRadius: 32,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Poppins_600SemiBold",
              color: "white",
            }}
          >
            {avatar}
          </Text>
        </View>

        {/* User Info */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_600SemiBold",
              color: "black",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Inter_400Regular",
              color: "#64748B",
            }}
          >
            {email}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            <Ionicons name="location-outline" size={12} color="#64748B" />
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Inter_400Regular",
                color: "#64748B",
                marginLeft: 4,
              }}
            >
              {location}
            </Text>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          onPress={() => router.push("/profile/edit")}
          style={{
            backgroundColor: "#2563EB",
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
              color: "white",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 16,
          borderTopWidth: 1,
          borderTopColor: "#FED7AA",
        }}
      >
        {[
          { value: String(listings), label: "Listings" },
          { value: String(orders), label: "Orders" },
          { value: rating, label: "Rating" },
          { value: String(wishlist), label: "Wishlist" },
        ].map((stat, index, arr) => (
          <View key={stat.label} style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins_600SemiBold",
                color: "black",
              }}
            >
              {stat.value}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Inter_400Regular",
                color: "#64748B",
              }}
            >
              {stat.label}
            </Text>
            {index < arr.length - 1 && (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  backgroundColor: "#FED7AA",
                }}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
