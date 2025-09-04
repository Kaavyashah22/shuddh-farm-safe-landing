import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Shuddh</span>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-background/70">
            © 2024 Shuddh. All rights reserved.
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/70 max-w-2xl mx-auto">
            Shuddh is a digital farm management platform dedicated to ensuring food safety 
            and responsible antimicrobial use in livestock farming. Protecting consumers 
            and supporting sustainable agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;