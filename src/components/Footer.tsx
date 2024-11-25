export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Cembio Lifesciences</h3>
            <p className="text-muted-foreground">
              Your trusted partner in chemical and laboratory equipment supply.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: sales.chembio@gmail.com</li>
              <li>Office: +91 120 4909400</li>
              <li>Sales: +91 9711585551</li>
              <li className="mt-2">
                L-10, Himalya Tower<br />
                Gyankhand 2, Indirapuram<br />
                Ghaziabad, UP 201014<br />
                India
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cembio Lifesciences Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}