import { Mail, Phone, Heart, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

  // Contact information - replace with your actual details
  const contactInfo = {
    email: "jasminbhesaniya@gmail.com",
    phone: "+91 7874679215"
  };

  // Social links - replace with your actual social media profiles
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jasminbhesaniyajb",
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jasmin-bhesaniya-2aab611b1/",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/BhesaniyaJb",
      color: "hover:text-blue-600"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-3">
                  Jasmin
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg ${social.color}`}
                    //   onMouseEnter={() => setHoveredIcon(social.name)}
                    //   onMouseLeave={() => setHoveredIcon(null)}
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>{contactInfo.email}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-white hover:text-green-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>{contactInfo.phone}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="block text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300"></span>
                      <span>{link}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              
              {/* Made by Jasmin */}
              <div className="flex items-center space-x-2 text-neutral-300">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>by</span>
                <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Jasmin
                </span>
              </div>

              {/* Copyright */}
              <div className="text-neutral-400 text-sm">
                <span>© {currentYear} Jasmin. All rights reserved.</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;