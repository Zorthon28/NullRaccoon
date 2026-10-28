import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { showroomCopy, showroomPrice } from "../utils/showroom";
export default function ProductCardHome({ product, lang }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const copy = showroomCopy(product, lang);
  const es = lang === "es";
  useEffect(() => { if (added) { const timer = setTimeout(() => setAdded(false), 1300); return () => clearTimeout(timer); } }, [added]);
  return <article className="shop-product-card"><Link className="shop-card-image" to={"/store/product/" + product.id} aria-label={(es ? "Ver " : "View ") + copy.name}>
    <img className="shop-card-primary" src={product.images[0]} alt={copy.name} loading="lazy" width="680" height="760" />
    {product.images[1] && <img className="shop-card-alternate" src={product.images[1]} alt="" aria-hidden="true" loading="lazy" width="680" height="760" />}
    <span className="shop-card-view">{es ? "Explorar pieza" : "Explore piece"} ↗</span>
  </Link><div className="shop-card-meta"><div><p className="shop-category">{copy.category}</p><h3><Link to={"/store/product/" + product.id}>{copy.name}</Link></h3><p className="shop-card-price">{showroomPrice(product.price)} <small>USD</small></p></div><button type="button" className="shop-quick-add" data-added={added} disabled={added} aria-label={added ? (es ? "Añadido al carrito" : "Added to bag") : (es ? "Añadir al carrito: " : "Add to bag: ") + copy.name} onClick={() => { addToCart({ ...product, name: copy.name, image: product.images[0], quantity: 1 }); setAdded(true); }}>{added ? <Check size={19} /> : <Plus size={19} />}</button></div><span className="shop-sr-only" role="status">{added ? (es ? "Añadido al carrito de muestra" : "Added to demo bag") : ""}</span></article>;
}
