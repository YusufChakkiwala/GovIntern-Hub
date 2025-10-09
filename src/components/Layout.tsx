import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, Users, Phone, Info, Brain } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">GovIntern Hub</h1>
                <p className="text-xs text-muted-foreground">Government Internships Portal</p>
              </div>
            </NavLink>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <Building2 className="h-4 w-4" />
                <span>Home</span>
              </NavLink>
              
              <NavLink 
                to="/internships" 
                className={({ isActive }) => 
                  `flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <Users className="h-4 w-4" />
                <span>Internship Schemes</span>
              </NavLink>
              
              <NavLink 
                to="/ai-match" 
                className={({ isActive }) => 
                  `flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <Brain className="h-4 w-4" />
                <span>AI Match</span>
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </NavLink>
            </nav>

            {/* Authentication */}
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="redirect">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <NavLink to="/sign-up">
                  <Button variant="default" size="sm">
                    Sign Up
                  </Button>
                </NavLink>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">GovIntern Hub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making Government Opportunities Accessible for Every Student.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/internships" className="text-muted-foreground hover:text-primary">All Internships</NavLink></li>
                <li><NavLink to="/ai-match" className="text-muted-foreground hover:text-primary">AI Matching</NavLink></li>
                <li><NavLink to="/about" className="text-muted-foreground hover:text-primary">About Us</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</NavLink></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Connect</h3>
              <p className="text-sm text-muted-foreground mb-2">
                support@govinternhub.gov.in
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">WhatsApp</Button>
                <Button variant="outline" size="sm">Email</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GovIntern Hub. All rights reserved. | A Government of India Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;