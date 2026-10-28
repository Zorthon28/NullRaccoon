import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, ShoppingBag, ArrowLeft, Languages } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./StoreLayout.css";
export default function StoreLayout({ lang, setLang }) {
  const es = lang === "es";
  const { pathname } = useLocation();
  const { cartItems } = useCart();
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);
  return <div className="store-demo"><Helmet><meta name="robots" content="noindex, follow" /></Helmet>
    <div className="demo-banner shop-demo-banner"><span>{es ? "Una tienda de muestra. Sin pedidos ni pagos reales." : "A concept store. No real orders or payments."}</span><Link to="/projects">{es ? "Volver a NullRaccoon" : "Back to NullRaccoon"}<ArrowUpRight size={12} /></Link></div>
    <header className="shop-header"><div className="shop-container shop-header-inner"><Link className="shop-brand" to="/store/products"><img src="/logo192.png" alt="" width="32" height="32" /><span>NullRaccoon<small>{es ? "Objetos para tu día" : "Objects for everyday"}</small></span></Link>
      <nav aria-label={es ? "Navegación de la tienda" : "Shop navigation"}><Link aria-current={pathname === "/store/products" ? "page" : undefined} to="/store/products#collection">{es ? "La colección" : "The collection"}</Link><Link to="/store/products#feature">{es ? "Los detalles" : "The details"}</Link></nav>
      <div className="shop-header-tools"><button className="shop-language" type="button" aria-label={es ? "View in English" : "Ver en español"} onClick={() => setLang(es ? "en" : "es")}><Languages size={17} /><span>{es ? "EN" : "ES"}</span></button><Link className="shop-bag" to="/store/cart" aria-label={(es ? "Carrito" : "Shopping bag") + " (" + count + ")"}><ShoppingBag size={21} strokeWidth={1.6} /><span>{count}</span></Link></div></div></header>
    <main><Outlet /></main>
    <div className="shop-closing shop-container"><p>{es ? "Una tienda que podría ser la tuya." : "A store like this. Made yours."}</p><Link to="/services#ecommerce-solutions">{es ? "Conoce el servicio de e-commerce" : "Explore our e-commerce service"}<ArrowUpRight size={16} /></Link><Link className="shop-return" to="/projects"><ArrowLeft size={14} />{es ? "Volver al estudio" : "Back to the studio"}</Link></div>
  </div>;
}
