import Card from "./Card";
export default function FeaturedSection() {
  return (
    <aside className=" bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <Card>
        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 px-2">
          <div className="flex px-1 py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
              src="https://source.unsplash.com/random/244x324"
            />
            <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Aenean ac tristique lorem, ut mollis dui.
              </a>
              <p className="mt-auto text-xs dark:text-gray-400">
                5 minutes ago
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                >
                  Politics
                </a>
              </p>
            </div>
          </div>
          <div className="flex px-1 py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
              src="https://source.unsplash.com/random/245x325"
            />
            <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Nulla consectetur efficitur.
              </a>
              <p className="mt-auto text-xs dark:text-gray-400">
                14 minutes ago
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                >
                  Sports
                </a>
              </p>
            </div>
          </div>
          <div className="flex px-1 py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
              src="https://source.unsplash.com/random/246x326"
            />
            <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Vitae semper augue purus tincidunt libero.
              </a>
              <p className="mt-auto text-xs dark:text-gray-400">
                22 minutes ago
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                >
                  World
                </a>
              </p>
            </div>
          </div>
          <div className="flex px-1 py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
              src="https://source.unsplash.com/random/247x327"
            />
            <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-serif hover:underline"
              >
                Suspendisse potenti.
              </a>
              <p className="mt-auto text-xs dark:text-gray-400">
                37 minutes ago
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                >
                  Business
                </a>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </aside>
  );
}
