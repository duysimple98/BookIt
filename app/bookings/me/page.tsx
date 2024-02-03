import Error from "@/app/error";
import MyBookings from "@/components/booking/MyBookings";

export const metadata = {
  title: "My Bookings",
};

const getBookings = async () => {
  const res = await fetch(`${process.env.API_URL}/api/bookings/me`, {
    cache: "no-cache",
    headers: {
      Cookie: `next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Up6fVDtu5iMiAUrG.sQEJc1tbY2xzAK-g6gKcx9hCWGOIaBKNGdboERgrZUoVDHyiUL_aUS3xNC19IWjobe3JNNt1Tr-4LWt408UaV6bIbMr8_A7nXyUAowUivtyUJrI3UF-PxaOy_ukwE-jLW3P9jp3lCsEFWxZADau20BCgyyP4y5N-CNzp0jpdocwjJs-AAo8N_065lcFLkgXdkKrjgFSJBdxhW2kaB2-Dckpf7yQ56YU3DhzfwJwp66SvLx3E1UGUsfCZzlpIO5o39YYjNEaSN_aEsUgd268RfZklyYHmFJ3o6xZY-vfSp_UsjGQNg-C1PJY7SDpncUvF9vbXAkFHrPeKCq3tZ46Vlc_kN9ueLLrd6SbujmEW9u0eeJLkPO9WoqvPp9TTo-DoXqs_tmeCxy58tmdBQ8BFcYd7.lmphZepRjBSeVUxOwKYTOw`,
    },
  });
  return res.json();
};

export default async function MyBookingsPage() {
  const data = await getBookings();

  if (data?.errMessage) {
    return <Error error={data} />;
  }
  return <MyBookings data={data} />;
}
