// src/pages/Admin.jsx
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaBox, FaTags, FaSearch, FaToggleOn, FaToggleOff, FaTimes } from 'react-icons/fa';
import { IoStatsChart } from "react-icons/io5";

// Loading Overlay Component - Unchanged (animation requires custom CSS)
const LoadingOverlay = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-2xl animate-pulse-fade-in text-indigo-700">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-500 border-solid mb-6"></div>
        <p className="text-xl font-semibold text-gray-800 tracking-wide">Processing your request...</p>
      </div>
    </div>
  );
};

export default function Admin() {
  const navigate = useNavigate();

  // State to manage active section for navigation
  const [activeAdminSection, setActiveAdminSection] = useState('dashboard');

  // Product Management States
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    isActive: true,
    category: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Category Management States
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  // Global UI States
  const [loading, setLoading] = useState(true);
  const [operationLoading, setOperationLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Real-time Products and Categories Fetch with onSnapshot ---
  useEffect(() => {
    const productsCollectionRef = collection(db, "products");
    const qProducts = query(productsCollectionRef, orderBy("name"));

    const unsubscribeProducts = onSnapshot(
      qProducts,
      (snapshot) => {
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Error fetching products in real-time:", err);
        setError("Failed to fetch products. Please check console for details.");
        setLoading(false);
        toast.error("Error loading products.");
      }
    );

    const categoriesCollectionRef = collection(db, "categories");
    const qCategories = query(categoriesCollectionRef, orderBy("name"));

    const unsubscribeCategories = onSnapshot(
      qCategories,
      (snapshot) => {
        const categoriesList = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setCategories(categoriesList);
      },
      (err) => {
        console.error("Error fetching categories in real-time:", err);
        toast.error("Error loading categories.");
      }
    );

    return () => {
      unsubscribeProducts();
      unsubscribeCategories();
    };
  }, []);

  const handleLogout = async () => {
    try {
      setOperationLoading(true);
      await signOut(auth);
      navigate("/login");
      toast.info("Logged out successfully!");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to log out.");
    } finally {
      setOperationLoading(false);
    }
  };

  // --- Product Form Handlers ---
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      toast.error("Product name, price, and category are required!");
      return;
    }
    setOperationLoading(true);
    setError(null);
    try {
      await addDoc(collection(db, "products"), {
        ...newProduct,
        price: parseFloat(newProduct.price),
        createdAt: new Date(),
      });
      setNewProduct({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        isActive: true,
        category: "",
      });
      toast.success("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Failed to add product. Check console.");
      toast.error("Failed to add product.");
    } finally {
      setOperationLoading(false);
    }
  };

  // --- Product CRUD Operations ---
  const handleDeleteProduct = async (productId) => {
    toast.warn(
      ({ closeToast }) => (
        <div className="flex flex-col items-center p-4">
          <p className="text-lg font-semibold mb-3 text-white text-center">Are you sure you want to delete this product?</p>
          <button
            className="bg-rose-700 text-white px-5 py-2 rounded-lg hover:bg-rose-800 transition duration-200 shadow-md flex items-center gap-2"
            onClick={async () => {
              closeToast();
              setOperationLoading(true);
              setError(null);
              try {
                await deleteDoc(doc(db, "products", productId));
                toast.success("Product deleted successfully!");
              } catch (err) {
                console.error("Error deleting product:", err);
                setError("Failed to delete product. Check console.");
                toast.error("Failed to delete product.");
              } finally {
                setOperationLoading(false);
              }
            }}
          >
            <FaTrash /> Yes, Delete
          </button>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        className: "bg-red-500",
        bodyClassName: "text-white",
        hideProgressBar: true,
      }
    );
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct.name || !editingProduct.price || !editingProduct.category) {
      toast.error("Product name, price, and category are required for update.");
      return;
    }
    setOperationLoading(true);
    setError(null);
    try {
      const productRef = doc(db, "products", editingProduct.id);
      await updateDoc(productRef, {
        name: editingProduct.name,
        description: editingProduct.description,
        price: parseFloat(editingProduct.price),
        imageUrl: editingProduct.imageUrl,
        isActive: editingProduct.isActive,
        category: editingProduct.category,
        updatedAt: new Date(),
      });

      setEditingProduct(null);
      toast.success("Product updated successfully!");
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Failed to update product. Check console.");
      toast.error("Failed to update product.");
    } finally {
      setOperationLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleToggleProductStatus = async (product) => {
    setOperationLoading(true);
    setError(null);
    try {
      const productRef = doc(db, "products", product.id);
      await updateDoc(productRef, {
        isActive: !product.isActive,
      });
      toast.info(`Product '${product.name}' status changed to ${product.isActive ? "Inactive" : "Active"}.`);
    } catch (err) {
      console.error("Error toggling product status:", err);
      setError("Failed to toggle product status. Check console.");
      toast.error("Failed to toggle product status.");
    } finally {
      setOperationLoading(false);
    }
  };

  // --- Category Management Handlers ---
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) {
      toast.error("Category name cannot be empty!");
      return;
    }
    setOperationLoading(true);
    setError(null);
    try {
      await addDoc(collection(db, "categories"), { name: newCategoryName.trim() });
      setNewCategoryName("");
      toast.success("Category added successfully!");
    } catch (err) {
      console.error("Error adding category:", err);
      setError("Failed to add category. Check console.");
      toast.error("Failed to add category.");
    } finally {
      setOperationLoading(false);
    }
  };

  const handleDeleteCategory = async (categoryId, categoryName) => {
    toast.warn(
      ({ closeToast }) => (
        <div className="flex flex-col items-center p-4">
          <p className="text-lg font-semibold mb-2 text-white text-center">Delete category "{categoryName}"?</p>
          <p className="text-sm mb-3 text-gray-100 text-center">Products in this category will have their category cleared.</p>
          <button
            className="bg-rose-700 text-white px-5 py-2 rounded-lg hover:bg-rose-800 transition duration-200 shadow-md flex items-center gap-2"
            onClick={async () => {
              closeToast();
              setOperationLoading(true);
              setError(null);
              try {
                await deleteDoc(doc(db, "categories", categoryId));

                const productsToUpdate = products.filter(p => p.category === categoryName);
                if (productsToUpdate.length > 0) {
                    const batch = writeBatch(db);
                    productsToUpdate.forEach(p => {
                        const productRef = doc(db, "products", p.id);
                        batch.update(productRef, { category: "" });
                    });
                    await batch.commit();
                    toast.info(`Cleared category for ${productsToUpdate.length} products.`);
                }
                toast.success("Category deleted successfully!");
              } catch (err) {
                console.error("Error deleting category:", err);
                setError("Failed to delete category. Check console.");
                toast.error("Failed to delete category.");
              } finally {
                setOperationLoading(false);
              }
            }}
          >
            <FaTrash /> Yes, Delete
          </button>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        className: "bg-red-500",
        bodyClassName: "text-white",
        hideProgressBar: true,
      }
    );
  };


  // --- Filtered Products for Search ---
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeProductsCount = products.filter(p => p.isActive).length;
  const inactiveProductsCount = products.length - activeProductsCount;


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 font-sans text-gray-800 p-4 sm:p-8">
      <LoadingOverlay show={operationLoading || loading} />

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-10 border border-gray-100">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b-2 border-indigo-100">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 tracking-tight mb-4 sm:mb-0">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-medium bg-rose-600 text-white px-6 py-3 rounded-xl hover:bg-rose-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-rose-500"
            disabled={operationLoading}
          >
            <FaSignOutAlt /> Logout
          </button>
        </header>

        {/* Admin Navigation */}
        <nav className="my-8">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button
                onClick={() => setActiveAdminSection('dashboard')}
                className={`flex items-center gap-3 font-semibold text-lg px-7 py-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2
                  ${activeAdminSection === 'dashboard' ? 'bg-indigo-700 text-white ring-indigo-600' : 'bg-indigo-600 text-white hover:bg-indigo-700 ring-indigo-500'}`}
              >
                <IoStatsChart /> Dashboard Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveAdminSection('products')}
                className={`flex items-center gap-3 font-semibold text-lg px-7 py-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2
                  ${activeAdminSection === 'products' ? 'bg-indigo-700 text-white ring-indigo-600' : 'bg-indigo-600 text-white hover:bg-indigo-700 ring-indigo-500'}`}
              >
                <FaBox /> Manage Products
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveAdminSection('categories')}
                className={`flex items-center gap-3 font-semibold text-lg px-7 py-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2
                  ${activeAdminSection === 'categories' ? 'bg-purple-700 text-white ring-purple-600' : 'bg-purple-600 text-white hover:bg-purple-700 ring-purple-500'}`}
              >
                <FaTags /> Manage Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveAdminSection('users')}
                className={`flex items-center gap-3 font-semibold text-lg px-7 py-4 rounded-xl shadow-lg cursor-not-allowed opacity-70 bg-gray-400 text-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-300
                  ${activeAdminSection === 'users' ? 'bg-gray-500' : ''}`}
              >
                Manage Users (Soon)
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveAdminSection('orders')}
                className={`flex items-center gap-3 font-semibold text-lg px-7 py-4 rounded-xl shadow-lg cursor-not-allowed opacity-70 bg-gray-400 text-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-300
                  ${activeAdminSection === 'orders' ? 'bg-gray-500' : ''}`}
              >
                View Orders (Soon)
              </button>
            </li>
          </ul>
        </nav>

        {/* Error Messages */}
        {error && (
          <div className="bg-rose-100 border border-rose-400 text-rose-800 px-6 py-4 rounded-lg relative shadow-md" role="alert">
            <strong className="font-bold mr-2">Error!</strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setError(null)}>
              <FaTimes className="text-rose-500 hover:text-rose-700" />
            </span>
          </div>
        )}

        {/* Conditional Rendering of Sections */}
        {activeAdminSection === 'dashboard' && (
            <section className="bg-indigo-50 p-6 rounded-xl shadow-inner border border-indigo-200">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                    <IoStatsChart className="text-3xl" /> Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-md flex items-center justify-between border border-gray-100">
                        <div className="text-indigo-600">
                            <FaBox className="text-4xl mb-2" />
                            <p className="text-lg font-semibold">Total Products</p>
                        </div>
                        <span className="text-5xl font-extrabold text-indigo-800">{products.length}</span>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md flex items-center justify-between border border-gray-100">
                        <div className="text-emerald-600">
                            <FaToggleOn className="text-4xl mb-2" />
                            <p className="text-lg font-semibold">Active Products</p>
                        </div>
                        <span className="text-5xl font-extrabold text-emerald-800">{activeProductsCount}</span>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md flex items-center justify-between border border-gray-100">
                        <div className="text-red-600">
                            <FaToggleOff className="text-4xl mb-2" />
                            <p className="text-lg font-semibold">Inactive Products</p>
                        </div>
                        <span className="text-5xl font-extrabold text-red-800">{inactiveProductsCount}</span>
                    </div>
                </div>
            </section>
        )}

        {activeAdminSection === 'products' && (
          <>
            {/* Add New Product Form */}
            {!editingProduct && (
              <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg border border-indigo-200">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-4 border-indigo-300 flex items-center gap-3">
                  <FaPlus className="text-4xl text-emerald-600" /> Add New Product
                </h2>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="relative w-full col-span-2">
                    {/* Standard Placeholder Input */}
                    <input type="text" id="name" name="name" value={newProduct.name} onChange={handleNewProductChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Product Name" />
                  </div>
                  <div className="relative w-full col-span-2">
                    {/* Standard Placeholder Textarea */}
                    <textarea id="description" name="description" value={newProduct.description} onChange={handleNewProductChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-20 resize-y" placeholder="Product Description"></textarea>
                  </div>
                  <div className="relative w-full">
                    {/* Standard Placeholder Input */}
                    <input type="number" id="price" name="price" value={newProduct.price} onChange={handleNewProductChange} required step="0.01" min="0" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Price" />
                  </div>
                  <div className="relative w-full">
                    {/* Standard Placeholder Input */}
                    <input type="text" id="imageUrl" name="imageUrl" value={newProduct.imageUrl} onChange={handleNewProductChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Image URL (optional)" />
                  </div>
                  <div className="relative w-full">
                    {/* Standard Placeholder Select - Note: Placeholder text on <select> elements is less common */}
                    <select id="category" name="category" value={newProduct.category} onChange={handleNewProductChange} required className="select-with-arrow w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white">
                      <option value="" disabled>Select a category</option> {/* This acts as the placeholder */}
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 flex items-center mt-4">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="isActive"
                          name="isActive"
                          checked={newProduct.isActive}
                          onChange={(e) => setNewProduct((prev) => ({ ...prev, isActive: e.target.checked }))}
                          className="sr-only"
                        />
                        <div className={`block w-14 h-8 rounded-full ${newProduct.isActive ? 'bg-emerald-500' : 'bg-gray-300'} transition-colors duration-300`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${newProduct.isActive ? 'translate-x-6' : 'translate-x-0'} shadow`}></div>
                      </div>
                      <span className="ml-3 text-lg font-medium text-gray-800">Product is Active</span>
                    </label>
                  </div>
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 text-lg font-bold py-4 px-8 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-emerald-500"
                      disabled={operationLoading}
                    >
                      <FaPlus /> Add Product
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* Edit Product Form */}
            {editingProduct && (
              <section className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg border border-amber-200">
                <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b pb-4 border-amber-300 flex items-center gap-3">
                  <FaEdit className="text-4xl text-amber-600" /> Edit Product
                </h2>
                <form onSubmit={handleUpdateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="relative w-full col-span-2">
                    {/* Standard Placeholder Input */}
                    <input type="text" id="editName" name="name" value={editingProduct.name} onChange={handleEditFormChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Product Name" />
                  </div>
                  <div className="relative w-full col-span-2">
                    {/* Standard Placeholder Textarea */}
                    <textarea id="editDescription" name="description" value={editingProduct.description} onChange={handleEditFormChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-20 resize-y" placeholder="Product Description"></textarea>
                  </div>
                  <div className="relative w-full">
                    {/* Standard Placeholder Input */}
                    <input type="number" id="editPrice" name="price" value={editingProduct.price} onChange={handleEditFormChange} required step="0.01" min="0" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Price" />
                  </div>
                  <div className="relative w-full">
                    {/* Standard Placeholder Input */}
                    <input type="text" id="editImageUrl" name="imageUrl" value={editingProduct.imageUrl} onChange={handleEditFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Image URL (optional)" />
                  </div>
                  <div className="relative w-full">
                    {/* Standard Placeholder Select */}
                    <select id="editCategory" name="category" value={editingProduct.category} onChange={handleEditFormChange} required className="select-with-arrow w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white">
                      <option value="" disabled>Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2 flex items-center mt-4">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="editIsActive"
                          name="isActive"
                          checked={editingProduct.isActive}
                          onChange={(e) => setEditingProduct((prev) => ({ ...prev, isActive: e.target.checked }))}
                          className="sr-only"
                        />
                        <div className={`block w-14 h-8 rounded-full ${editingProduct.isActive ? 'bg-emerald-500' : 'bg-gray-300'} transition-colors duration-300`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${editingProduct.isActive ? 'translate-x-6' : 'translate-x-0'} shadow`}></div>
                      </div>
                      <span className="ml-3 text-lg font-medium text-gray-800">Product is Active</span>
                    </label>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 col-span-2 mt-6">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-3 text-lg font-bold py-4 px-8 rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-amber-500"
                      disabled={operationLoading}
                    >
                      <FaEdit /> Update Product
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="flex-1 flex items-center justify-center gap-3 text-lg font-bold py-4 px-8 rounded-xl bg-gray-500 text-white hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-400"
                      disabled={operationLoading}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* Product List */}
            <section className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b pb-4 border-blue-300 flex items-center gap-3">
                <FaBox className="text-4xl text-blue-600" /> Existing Products
              </h2>
              <div className="mb-8 relative w-full">
                {/* Standard Placeholder Input for Search */}
                <input
                  type="text"
                  id="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {filteredProducts.length === 0 && !loading && !error && (
                <p className="text-gray-600 text-center py-6 text-lg">No products found matching your criteria.</p>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-indigo-200 transition-all duration-300 ease-in-out"
                  >
                    {product.imageUrl && (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="object-cover w-full h-48 rounded-t-xl md:w-56 md:h-56 md:rounded-t-none md:rounded-l-xl mr-6 mb-4 md:mb-0 flex-shrink-0 shadow-md"
                      />
                    )}
                    <div className="p-5 md:p-0 flex flex-col flex-grow relative">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-emerald-700 font-extrabold text-2xl mb-3">
                        ${product.price ? product.price.toFixed(2) : "N/A"}
                      </p>
                      <p className="text-gray-700 text-base mb-3 line-clamp-3">{product.description}</p>
                      <p className="text-gray-600 text-sm mb-4">Category: <span className="font-semibold text-indigo-700">{product.category || 'N/A'}</span></p>
                      <span
                        className={`text-sm font-bold px-4 py-1.5 rounded-full ${
                          product.isActive ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {product.isActive ? "Active" : "Inactive"}
                      </span>
                      <div className="flex flex-wrap gap-3 mt-6 justify-end">
                        <button
                          onClick={() => handleToggleProductStatus(product)}
                          className={`flex items-center gap-2 justify-center text-sm font-medium px-4 py-2 rounded-lg text-white shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                            product.isActive ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500" : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"
                          }`}
                          disabled={operationLoading}
                        >
                          {product.isActive ? <FaToggleOn /> : <FaToggleOff />} {product.isActive ? "Deactivate" : "Activate"}
                        </button>
                        <button
                          onClick={() => handleEditClick(product)}
                          className="flex items-center gap-2 justify-center text-sm font-medium px-4 py-2 rounded-lg text-white shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-amber-500 hover:bg-amber-600 focus:ring-amber-400"
                          disabled={operationLoading}
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="flex items-center gap-2 justify-center text-sm font-medium px-4 py-2 rounded-lg text-white shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-rose-500 hover:bg-rose-600 focus:ring-rose-400"
                          disabled={operationLoading}
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeAdminSection === 'categories' && (
            <section className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200">
                <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b pb-4 border-purple-300 flex items-center gap-3">
                    <FaTags className="text-4xl text-purple-600" /> Manage Categories
                </h2>
                <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative w-full flex-grow">
                        {/* Standard Placeholder Input for Category */}
                        <input type="text" id="newCategoryName" placeholder="New Category Name" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                    </div>
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-3 text-lg font-bold px-8 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-500"
                        disabled={operationLoading}
                    >
                        <FaPlus /> Add Category
                    </button>
                </form>
                <div className="flex flex-wrap gap-3">
                    {categories.length === 0 && !loading && (
                        <p className="text-gray-600 text-center w-full py-4">No categories added yet. Start by adding one above!</p>
                    )}
                    {categories.map((cat) => (
                        <span
                            key={cat.id}
                            className="inline-flex items-center bg-purple-200 text-purple-800 text-base font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-300 transition duration-200 gap-2"
                        >
                            {cat.name}
                            <button
                                onClick={() => handleDeleteCategory(cat.id, cat.name)}
                                className="text-purple-700 hover:text-rose-600 focus:outline-none transform hover:scale-125 transition duration-200"
                                aria-label={`Delete category ${cat.name}`}
                                disabled={operationLoading}
                            >
                                <FaTimes />
                            </button>
                        </span>
                    ))}
                </div>
            </section>
        )}

        {(activeAdminSection === 'users' || activeAdminSection === 'orders') && (
            <section className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <h2 className="text-3xl font-bold text-gray-700 mb-4">
                    {activeAdminSection === 'users' ? 'User Management' : 'Order Viewing'}
                </h2>
                <p className="text-gray-600 text-lg">This section is under development and will be available soon!</p>
            </section>
        )}

      </div>
    </div>
  );
}