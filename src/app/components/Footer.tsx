import { Primitive } from "@radix-ui/react-primitive";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 md:p-8">
      <Primitive.div className="grid gap-8 md:grid-cols-3">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                Company
              </a>
            </li>
            <li>
              <a href="/team" className="text-gray-400 hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="/careers" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="/web-design" className="text-gray-400 hover:text-white">
                Web Design
              </a>
            </li>
            <li>
              <a href="/development" className="text-gray-400 hover:text-white">
                Development
              </a>
            </li>
            <li>
              <a href="/seo" className="text-gray-400 hover:text-white">
                SEO
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Infomation</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:info@example.com"
                className="text-gray-400 hover:text-white"
              >
                会社概要
              </a>
            </li>
            <li>
              <a href="/support" className="text-gray-400 hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="/notice" className="text-gray-400 hover:text-white">
                Notice
              </a>
            </li>
            <li>
              <a href="/infomation" className="text-gray-400 hover:text-white">
                Infomation
              </a>
            </li>
          </ul>
        </div>
      </Primitive.div>

      {/* Bottom Bar */}
      <Primitive.div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2024 CodeNest .Inc All Rights Reserved.</p>
      </Primitive.div>
    </footer>
  );
}
