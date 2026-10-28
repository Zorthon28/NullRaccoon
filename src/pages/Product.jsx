import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import products from "../utils/products";
import { showroomProducts, showroomCopy, showroomPrice } from "../utils/showroom";
import translations from "../utils/translations";
import ProductCardHome from "../components/ProductCardHome";
import ShopReveal from "../components/ShopReveal";
import NotFound from "./NotFound";

export default function Product({ lang }) {
  const { productId } = useParams();
  const product = /^\d+$/.test(productId || "") ? products.find(item => item.id === Number(productId)) : null;
  const { addToCart } = useCart();
  const [selection, setSelection] = useState({ id: productId, index: 0 });
  const [addedId, setAddedId] = useState(null);
  const es = lang === "es";
  useEffect(() => { if (addedId !== null) { const timer = setTimeout(() => setAddedId(null), 1400); return () => clearTimeout(timer); } }, [addedId]);
  if (!product) return <NotFound lang={lang} />;
  const copy = showroomCopy(product, lang);
  const selectedIndex = selection.id === productId ? selection.index : 0;
  const added = addedId === productId;
  return <div className="shop-product-page shop-container"><Helmet><title>{copy.name} · Demo | NullRaccoon</title><meta name="description" content={copy.description} /></Helmet>
    <Link className="shop-back-link" to="/store/products#collection"><ArrowLeft size={15} />{es ? "La colección" : "The collection"}</Link>
    <div className="shop-product-layout"><div className="shop-product-gallery"><div className="shop-detail-image">{product.images.map((image, index) => <img key={image} data-active={index === selectedIndex} src={image} alt={index === selectedIndex ? copy.name : ""} aria-hidden={index !== selectedIndex} width="1000" height="1100" loading={index ? "lazy" : "eager"} />)}</div><div className="shop-thumbnails" aria-label={es ? "Vistas del producto" : "Product views"}>{product.images.map((image, index) => <button key={image} type="button" aria-pressed={index === selectedIndex} aria-label={(es ? "Ver imagen " : "View image ") + (index + 1)} onClick={() => setSelection({ id: productId, index })}><img src={image} alt="" width="80" height="80" /></button>)}<span>{es ? "Los pequeños detalles importan." : "It’s all in the details."}</span></div></div>
    <div className="shop-product-info"><p className="shop-kicker">{copy.category}</p><h1>{copy.name}</h1><p className="shop-product-headline">{copy.headline}</p><p className="shop-detail-price">{showroomPrice(product.price)} <small>USD</small></p><p className="shop-product-description">{copy.description}</p><button className="shop-button shop-add-button" type="button" disabled={added} onClick={() => { addToCart({ ...product, name: copy.name, description: copy.description, image: product.images[0], quantity: 1 }); setAddedId(productId); }}>{added ? <Check size={18} /> : <Plus size={18} />}{added ? (es ? "Añadido al carrito" : "Added to bag") : translations[lang].common.addToCart}</button><p className="shop-product-demo-note">{es ? "Pieza de muestra. Los pagos están desactivados." : "A sample piece. Payments are disabled."}</p><span className="shop-sr-only" role="status">{added ? (es ? "Añadido al carrito de muestra" : "Added to demo bag") : ""}</span>
      <details className="shop-product-details" open><summary>{es ? "Los detalles" : "The details"}</summary>{copy.details.length ? <ul>{copy.details.map(detail => <li key={detail}>{detail}</li>)}</ul> : <p>{copy.description}</p>}</details><Link className="shop-text-link" to="/store/cart">{es ? "Ver carrito de muestra" : "View demo bag"}<ArrowRight size={16} /></Link>
    </div></div>
    <section className="shop-related"><div className="shop-more-heading"><h2>{es ? "En buena compañía." : "In good company."}</h2><p>{es ? "Unas piezas más para completar tu día." : "A few more pieces for your everyday."}</p></div><div className="shop-product-grid">{showroomProducts.filter(item => item.id !== product.id).slice(0, 3).map((item, index) => <ShopReveal key={item.id} delay={index * 60}><ProductCardHome product={item} lang={lang} /></ShopReveal>)}</div></section>
  </div>;
}
