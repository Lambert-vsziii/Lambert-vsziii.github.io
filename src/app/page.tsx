
import LeftSidebar from "@/components/LeftSidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-7xl flex flex-row">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}
