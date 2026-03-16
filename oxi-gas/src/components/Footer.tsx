import { Phone, Clock, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="col-span-1">
            <a href="#inicio" className="inline-block font-display text-2xl font-bold text-white border-2 border-white px-4 py-1.5 rounded-full mb-6 tracking-wider">
              OXI-GAS
            </a>
            <p className="text-[#8fa3b8] text-lg mb-6 leading-relaxed">
              Tu ferretería industrial de confianza. Proveemos soluciones integrales en gases comprimidos y herramientas de primera línea.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6 font-display">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-[#8fa3b8] hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-[#8fa3b8] hover:text-primary transition-colors">Productos</a></li>
              <li><a href="#seguridad" className="text-[#8fa3b8] hover:text-primary transition-colors">Seguridad</a></li>
              <li><a href="#marcas" className="text-[#8fa3b8] hover:text-primary transition-colors">Marcas</a></li>
              <li><a href="#horarios" className="text-[#8fa3b8] hover:text-primary transition-colors">Horarios</a></li>
              <li><a href="#contacto" className="text-[#8fa3b8] hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6 font-display">Información</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/5491134446666" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#8fa3b8] hover:text-[#25d366] transition-colors group">
                  <div className="w-10 h-10 bg-[#162033] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#25d366]/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+54 9 11 3444-6666</span>
                </a>
              </li>
              <li className="flex items-center text-[#8fa3b8]">
                <div className="w-10 h-10 bg-[#162033] rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm">Lun-Vie: 8 a 12hs / 13:30 a 18hs<br/>Sáb: 8 a 13hs</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ferreteriaoxigas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#8fa3b8] hover:text-[#e1306c] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#162033] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#e1306c]/20 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-lg">@ferreteriaoxigas</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-[#2a3f58] pt-8 flex flex-col items-center text-center text-[#8fa3b8] text-sm">
          <p>&copy; {new Date().getFullYear()} OXI-GAS Ferretería Industrial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}