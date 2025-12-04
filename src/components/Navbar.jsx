import { Link } from "react-router";
import { BotonPrincipal } from "./Buttons";

import {LogoPage} from "./../assets/icons"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export function Navbar() {
    return(
        <>
        {/* <nav className="content-center h-16 relative bg-transparent" >
            <div className="flex justify-between">

                <div className="content-center"><LogoPage/></div>
                <div className="flex space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/aboutUs">About Us</Link>
                    <Link to="/recipes">Recipes</Link>
                    <a href="">Product</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
                <div>
                    <BotonPrincipal text="Login"/>
                </div>

            </div>
        </nav> */}

        
        <nav class=" bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
  <div class="mx-auto px-2 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" class=" items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent px-1.5 py-1.5 text-sm/6 font-semibold text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-full origin-top-right  bg-[#FFF7DF] p-6 text-sm/6 text-gray-600 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">
              <Link to="/">Home</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">
              <Link to="/aboutUs">About Us</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">
              <Link to="/recipes">Recipes</Link>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">
              <Link to="/products">Products</Link>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
        </button>
      </div>
      <div class="flex shrink-0 items-center">
          <LogoPage/>
        </div>
      <div class="flex content-center justify-between sm:items-stretch sm:justify-start">
        
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
            <a href="#" class="border-b-2 border-transparent hover:border-secondary px-3 py-2 text-sm font-medium text-black"><Link to="/">Home</Link></a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary"><Link to="/aboutUs">About Us</Link></a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary"><Link to="/recipes">Recipes</Link></a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary"><Link to="/products">Products</Link></a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary"><Link to="/blog">Blog</Link></a>
            <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary"><Link to="/products">Contact</Link></a>
          </div>
        </div>
      </div>
      <div class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <BotonPrincipal text="Login"/>
      </div>
    </div>
  </div>

</nav>

        </>
    )
}