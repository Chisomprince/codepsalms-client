import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="dark:bg-zinc-900 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
