import Error from "@/app/error";
import AllRooms from "@/components/admin/AllRooms";
import NewRoom from "@/components/admin/NewRoom";
import { getAuthHeader } from "@/helpers/authHeader";

export const metadata = {
  title: "Create New Room - ADMIN",
};

export default async function NewRoomPage() {
  return <NewRoom />;
}
