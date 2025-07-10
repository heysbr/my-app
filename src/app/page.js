import Login from "@/component/Login";
import Profile from "@/component/Profile";
import UserContextProvider from "@/context/UserContextProvider";

export default function Home() {
  return (
    <UserContextProvider>
      <div className="flex flex-row items-center justify-center h-screen bg-[radial-gradient(circle,_#00000022_2px,_transparent_2px)] bg-[size:10px_10px] bg-gray-600">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}
