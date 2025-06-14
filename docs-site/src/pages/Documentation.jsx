import Sidebar from "./SideBar";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Documentation() {
    return (
        <main className="h-screen w-full bg-gray-950 flex flex-col">
            {/* Navigation */}
            <Nav></Nav>

            <div className="flex h-full w-full justify-end bg-gray-950">
            <Sidebar />

         <section className="w-[80%] h-auto bg-gray-950 ">
         <Outlet />
         </section>

            </div>
        </main>
    );
}
