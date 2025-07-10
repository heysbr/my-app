import Login from "@/component/Login";
import Profile from "@/component/Profile";
import UserContextProvider from "@/context/UserContextProvider";

export default function Home() {
  return (
    <UserContextProvider>
      <div className="flex flex-row items-center justify-center h-screen bg-gray-600">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}
