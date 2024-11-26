import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { UserCircle2, KeyRound, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProductVariant {
  size: string;
  price: number;
  sku: string;
}

interface Product {
  id?: number;
  name: string;
  description: string;
  image: string;
  catalogueId: string;
  brand: string;
  casNumber: string;
  purity?: string;
  grade?: string;
  storage?: string;
  features: string[];
  variants: ProductVariant[];
  indianSuppliers: string[];
  certifications: string[];
  applications: string[];
}

const Admin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    description: "",
    image: "",
    catalogueId: "",
    brand: "",
    casNumber: "",
    features: [],
    variants: [],
    indianSuppliers: [],
    certifications: [],
    applications: [],
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (token) {
      fetchProducts();
    }
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Default credentials check (for demo purposes)
    if (username === "admin" && password === "admin123") {
      const mockToken = "mock-jwt-token";
      localStorage.setItem("token", mockToken);
      setToken(mockToken);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Failed to add product");
      
      await fetchProducts();
      setNewProduct({
        name: "",
        description: "",
        image: "",
        catalogueId: "",
        brand: "",
        casNumber: "",
        features: [],
        variants: [],
        indianSuppliers: [],
        certifications: [],
        applications: [],
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.id) return;

    try {
      const response = await fetch(
        `http://localhost:3001/api/products/${editingProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editingProduct),
        }
      );

      if (!response.ok) throw new Error("Failed to update product");
      
      await fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`http://localhost:3001/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete product");
      
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Card className="shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
                <CardDescription className="text-center text-muted-foreground">
                  Enter your credentials to access the admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <div className="relative">
                      <UserCircle2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="pl-10"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <p className="text-sm text-center text-muted-foreground mt-4">
                    Default credentials for demo:<br />
                    Username: admin<br />
                    Password: admin123
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
            }}
          >
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add New Product Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="catalogueId">Catalogue ID</Label>
                  <Input
                    id="catalogueId"
                    value={newProduct.catalogueId}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, catalogueId: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    id="brand"
                    value={newProduct.brand}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, brand: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="casNumber">CAS Number</Label>
                  <Input
                    id="casNumber"
                    value={newProduct.casNumber}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, casNumber: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="purity">Purity</Label>
                  <Input
                    id="purity"
                    value={newProduct.purity || ""}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, purity: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="grade">Grade</Label>
                  <Input
                    id="grade"
                    value={newProduct.grade || ""}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, grade: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="storage">Storage</Label>
                  <Input
                    id="storage"
                    value={newProduct.storage || ""}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, storage: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="features">Features (comma-separated)</Label>
                  <Input
                    id="features"
                    value={newProduct.features.join(", ")}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        features: e.target.value.split(",").map((s) => s.trim()),
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="suppliers">
                    Indian Suppliers (comma-separated)
                  </Label>
                  <Input
                    id="suppliers"
                    value={newProduct.indianSuppliers.join(", ")}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        indianSuppliers: e.target.value
                          .split(",")
                          .map((s) => s.trim()),
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="certifications">
                    Certifications (comma-separated)
                  </Label>
                  <Input
                    id="certifications"
                    value={newProduct.certifications.join(", ")}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        certifications: e.target.value
                          .split(",")
                          .map((s) => s.trim()),
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="applications">
                    Applications (comma-separated)
                  </Label>
                  <Input
                    id="applications"
                    value={newProduct.applications.join(", ")}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        applications: e.target.value
                          .split(",")
                          .map((s) => s.trim()),
                      })
                    }
                  />
                </div>
                <Button type="submit">Add Product</Button>
              </form>
            </CardContent>
          </Card>

          {/* Product List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Products</h2>
            {products.map((product) => (
              <Card key={product.id} className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setEditingProduct(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => product.id && handleDeleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Edit Product Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Edit Product</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProduct} className="space-y-4">
                  <div>
                    <Label htmlFor="edit-name">Name</Label>
                    <Input
                      id="edit-name"
                      value={editingProduct.name}
                      onChange={(e) =>
                        setEditingProduct({
                          ...editingProduct,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  {/* Add similar fields as in the Add Product form */}
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditingProduct(null)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
