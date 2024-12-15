import Link from "next/link";
import Image from "next/image";
import navData from "./navigation.json";

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
    {/* Logo Section */}
    <div className="flex items-center mb-4 md:mb-0">
      <Image src="/logo.png" width={50} height={50} alt="Logo" />

      <h1 className="text-lg font-bold"></h1>
    </div>

    {/* Navigation Menu */}
    <nav>
      <ul className="flex flex-col md:flex-row md:space-x-4">
        {navData.map((item) => (
          <li key={item.title} className="relative group">
            {!item.children ? (
              <Link href={item.href || "#"}>
                <h1 className="block py-2 md:py-0">{item.title}</h1>
              </Link>
            ) : (
              <>
                <span className="block py-2 md:py-0 cursor-pointer">
                  {item.title}
                </span>
                <ul className="absolute left-0 bg-gray-700 text-sm hidden group-hover:block z-10">
                  {item.children.map((child) => (
                    <li key={child.href} className="hover:bg-gray-600">
                      <Link href={child.href || "#"}>
                        <h1 className="block px-4 py-2">{child.title}</h1>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>

    {/* Contact Section */}
    <div className="mt-4 md:mt-0">
      <p className="text-sm">
        Contact:{" "}
        <a
          href="mailto:contact@example.com"
          className="text-blue-400 hover:underline"
        >
          contact@example.com
        </a>
      </p>
    </div>
  </header>
);

export default Header;
