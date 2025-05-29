import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-6 mt-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>
          &copy; {new Date().getFullYear()} FloodTech. Todos os direitos
          reservados.
        </p>

        <div className="flex flex-col sm:items-end gap-2">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>contato@floodtech.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>(11) 99999-0000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
