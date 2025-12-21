import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-800 border-t border-dark-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <a
              href="https://github.com/JulianoMRA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-700 hover: bg-accent-primary rounded-full transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/julianomra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-700 hover:bg-[#0077b5] rounded-full transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:julianomelorodriguesalencar@gmail.com"
              className="p-3 bg-dark-700 hover:bg-accent-primary rounded-full transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-400 text-center flex items-center gap-2">
            Desenvolvido com <Heart className="text-accent-primary" size={16} /> por Juliano Alencar
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}