import { SignUp } from "@clerk/clerk-react";
import { Building2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex flex-col">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">GovIntern Hub</h1>
                <p className="text-xs text-muted-foreground">Government Internships Portal</p>
              </div>
            </NavLink>
            
            <NavLink 
              to="/sign-in" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Already have an account? Sign in
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Join GovIntern Hub</h2>
            <p className="text-muted-foreground">
              Create your account to discover government internship opportunities
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-6">
            <SignUp 
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
              afterSignUpUrl="/"
              appearance={{
                elements: {
                  formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
                  card: "bg-transparent shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "border-input hover:bg-accent hover:text-accent-foreground",
                  dividerLine: "bg-border",
                  dividerText: "text-muted-foreground",
                  formFieldLabel: "text-foreground",
                  formFieldInput: "border-input bg-background",
                  footerActionLink: "text-primary hover:text-primary/90"
                }
              }}
            />
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;