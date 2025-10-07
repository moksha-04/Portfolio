import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-center">
            Made by Kadava Mokshagnanjali
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
