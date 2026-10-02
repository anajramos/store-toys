import React, { useState } from 'react';
import { Heart, ShoppingBag, Sparkles, Star, ShieldCheck, Gift, X, Plus, MessageCircle, CreditCard, Minus, Search, ChevronDown, Truck, Award } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const Facebook = ({ size = 24, fill, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill || 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const WhatsApp = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

import './App.css';

const dolls = [
  { id: 1,  name: 'Boneca Sofia',        edition: 'Edição Primavera',        price: 149, image: '/doll-1.png' },
  { id: 2,  name: 'Boneca Luna',         edition: 'Edição Estrelada',        price: 159, image: '/doll-2.png' },
  { id: 3,  name: 'Boneca Bella',        edition: 'Edição Clássica',         price: 139, image: '/doll-3.png' },
  { id: 4,  name: 'Boneca Nina',         edition: 'Edição Verão',            price: 145, image: '/doll-4.png' },
  { id: 5,  name: 'Boneca Flora',        edition: 'Edição Fada',             price: 169, image: '/doll-5.png' },
  { id: 6,  name: 'Boneca Aurora',       edition: 'Edição Especial',         price: 199, image: '/hero-doll.png' },
  { id: 7,  name: 'Boneca Clara',        edition: 'Edição Sonhos',           price: 159, image: '/doll-1.png' },
  { id: 8,  name: 'Boneca Mel',          edition: 'Edição Outono',           price: 145, image: '/doll-2.png' },
  { id: 9,  name: 'Boneca Alice',        edition: 'Edição Contos',           price: 165, image: '/doll-3.png' },
  { id: 10, name: 'Boneca Maya',         edition: 'Edição Bosque',           price: 155, image: '/doll-4.png' },
  { id: 11, name: 'Boneca Lis',          edition: 'Edição Flores',           price: 175, image: '/doll-5.png' },
  { id: 12, name: 'Boneca Valentina',    edition: 'Edição Princesa',         price: 189, image: '/hero-doll.png' },
  { id: 13, name: 'Boneca Amora',        edition: 'Edição Frutas',           price: 139, image: '/doll-1.png' },
  { id: 14, name: 'Boneca Catarina',     edition: 'Edição Inverno',          price: 169, image: '/doll-2.png' },
  { id: 15, name: 'Boneca Julieta',      edition: 'Edição Romance',          price: 149, image: '/doll-3.png' },
  { id: 16, name: 'Boneca Sol',          edition: 'Edição Radiante',         price: 179, image: '/doll-4.png' },
  { id: 17, name: 'Boneca Íris',         edition: 'Edição Arco-íris',        price: 159, image: '/doll-5.png' },
  { id: 18, name: 'Boneca Estela',       edition: 'Edição Galáxia',          price: 199, image: '/hero-doll.png' },
  { id: 19, name: 'Boneca Serena',       edition: 'Edição Sereia',           price: 215, image: '/doll-1.png' },
  { id: 20, name: 'Boneca Lara',         edition: 'Edição Pérola',           price: 175, image: '/doll-2.png' },
  { id: 21, name: 'Boneca Bianca',       edition: 'Edição Borboleta',        price: 189, image: '/doll-3.png' },
  { id: 22, name: 'Boneca Rebeca',       edition: 'Edição Rosas',            price: 155, image: '/doll-4.png' },
  { id: 23, name: 'Boneca Dara',         edition: 'Edição Cristal',          price: 229, image: '/doll-5.png' },
  { id: 24, name: 'Boneca Helena',       edition: 'Edição Vintage',          price: 179, image: '/hero-doll.png' },
  { id: 25, name: 'Boneca Livia',        edition: 'Edição Céu Estrelado',    price: 195, image: '/doll-1.png' },
  { id: 26, name: 'Boneca Mariana',      edition: 'Edição Diamante',         price: 245, image: '/doll-2.png' },
  { id: 27, name: 'Boneca Cecília',      edition: 'Edição Jardim',           price: 159, image: '/doll-3.png' },
  { id: 28, name: 'Boneca Yasmin',       edition: 'Edição Tropical',         price: 169, image: '/doll-4.png' },
  { id: 29, name: 'Boneca Nathalia',     edition: 'Edição Lua Cheia',        price: 209, image: '/doll-5.png' },
  { id: 30, name: 'Boneca Elisa',        edition: 'Edição Encantada',        price: 235, image: '/hero-doll.png' },
  { id: 31, name: 'Boneca Jennifer',     edition: 'Edição Especial Jennifer', price: 219, image: '/doll-1.png', tipo: 'boneca' },
  { id: 32, name: 'Boneca Maria Eduarda',edition: 'Edição Maria Eduarda',    price: 229, image: '/doll-2.png', tipo: 'boneca' },
  { id: 33, name: 'Boneco Dudu',         edition: 'Edição Aventura Dudu',    price: 199, image: '/dudu.svg',   tipo: 'boneco' },
  { id: 34, name: 'Boneca Julia',        edition: 'Edição Especial Julia',   price: 209, image: '/doll-4.png', tipo: 'boneca' },
  { id: 35, name: 'Boneco Bertunho',     edition: 'Edição Herói Bertunho',   price: 215, image: '/bertunho.svg', tipo: 'boneco' },
  { id: 36, name: 'Boneca Manu',         edition: 'Edição Carinho Manu',     price: 189, image: '/hero-doll.png', tipo: 'boneca' },
  { id: 37, name: 'Boneca Melissa',      edition: 'Edição Especial Melissa', price: 225, image: '/doll-3.png',    tipo: 'boneca' },
].map(d => ({
  ...d,
  stock: (d.id * 7) % 15 + 3,
  description: `A ${d.name} é uma peça exclusiva da nossa ${d.edition}. Feita à mão com materiais premium, tecidos hipoalergênicos e enchimento antialérgico. Com ${((d.id * 2) % 10) + 30}cm de altura, ela possui detalhes delicados costurados individualmente. Cada boneca acompanha uma linda caixa de presente e certificado de autenticidade.`
}));

/* ─── Product Detail Modal ─── */
const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [qty, setQty] = React.useState(1);
  const price = product.price;
  const pixPrice = (price * 0.9).toFixed(2).replace('.', ',');
  const installment = (price / 6).toFixed(2).replace('.', ',');
  const lowStock = product.stock <= 5;

  return (
    <div style={{ position:'fixed', inset:0, zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0.65)', padding:'1rem', backdropFilter:'blur(6px)' }}>
      <div style={{ backgroundColor:'white', borderRadius:'20px', overflow:'hidden', display:'flex', flexDirection:'column', maxWidth:'980px', width:'100%', position:'relative', maxHeight:'92vh', overflowY:'auto', boxShadow:'0 30px 80px rgba(0,0,0,0.3)' }}>
        <button onClick={onClose} style={{ position:'absolute', top:'1.2rem', right:'1.2rem', background:'#f3f4f6', border:'none', cursor:'pointer', zIndex:10, width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <X size={20} color="#6b7280"/>
        </button>

        <div style={{ display:'flex', flexWrap:'wrap' }}>
          {/* Imagem */}
          <div style={{ flex:'1', minWidth:'280px', backgroundColor:'#fdf2f8', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', minHeight:'340px' }}>
            <img src={product.image} alt={product.name} style={{ width:'100%', maxWidth:'320px', maxHeight:'360px', objectFit:'contain', borderRadius:'16px' }}/>
          </div>

          {/* Detalhes */}
          <div style={{ flex:'1.2', minWidth:'300px', padding:'2.5rem 2rem', display:'flex', flexDirection:'column', gap:'1rem' }}>
            <div style={{ fontSize:'0.78rem', color:'#9ca3af' }}>Início › Bonecas › {product.name}</div>
            <div>
              <div style={{ fontSize:'0.8rem', color:'var(--pink-400)', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'0.3rem' }}>Dreamy Dolls®</div>
              <h2 style={{ fontSize:'1.6rem', fontWeight:800, color:'#1f2937', lineHeight:1.2 }}>{product.name}</h2>
              <div style={{ fontSize:'0.85rem', color:'#9ca3af', marginTop:'0.2rem' }}>{product.edition} · Cód: DRM-{String(product.id).padStart(4,'0')}</div>
            </div>

            {/* Estrelas */}
            <div style={{ display:'flex', gap:'2px' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="var(--pink-400)" color="var(--pink-400)"/>)}
              <span style={{ fontSize:'0.8rem', color:'#9ca3af', marginLeft:'6px' }}>(128 avaliações)</span>
            </div>

            {/* Preços */}
            <div style={{ background:'#fdf2f8', borderRadius:'12px', padding:'1rem 1.2rem' }}>
              <div style={{ fontSize:'2rem', fontWeight:900, color:'var(--pink-600)' }}>R$ {price.toFixed(2).replace('.',',')}</div>
              <div style={{ color:'#6b7280', fontSize:'0.85rem', marginTop:'0.2rem' }}>ou até <strong>6x de R$ {installment}</strong> sem juros</div>
              <div style={{ color:'#16a34a', fontSize:'0.85rem', marginTop:'0.3rem', fontWeight:600 }}>💸 R$ {pixPrice} no Pix (10% off)</div>
            </div>

            {/* Estoque */}
            <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.85rem', fontWeight:600, color: lowStock ? '#dc2626' : '#16a34a' }}>
              <span style={{ width:'8px', height:'8px', borderRadius:'50%', backgroundColor: lowStock ? '#dc2626' : '#16a34a', display:'inline-block' }}/>
              {lowStock ? `⚠️ Restam apenas ${product.stock} unidades!` : `✅ Em estoque: ${product.stock} unidades`}
            </div>

            {/* Descrição curta */}
            <p style={{ fontSize:'0.9rem', color:'#6b7280', lineHeight:1.6 }}>{product.description}</p>

            {/* Qtd + Comprar */}
            <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap' }}>
              <div style={{ display:'flex', alignItems:'center', border:'2px solid #f9a8d4', borderRadius:'50px', overflow:'hidden' }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ padding:'0.6rem 1rem', color:'var(--pink-500)', fontWeight:700, fontSize:'1.1rem' }}><Minus size={16}/></button>
                <span style={{ padding:'0 0.8rem', fontWeight:700, fontSize:'1rem', color:'#1f2937' }}>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ padding:'0.6rem 1rem', color:'var(--pink-500)', fontWeight:700, fontSize:'1.1rem' }}><Plus size={16}/></button>
              </div>
              <button onClick={() => { for(let i=0;i<qty;i++) onAddToCart(product); onClose(); }}
                style={{ flex:1, minWidth:'140px', background:'linear-gradient(135deg, var(--pink-400), var(--pink-600))', color:'white', border:'none', borderRadius:'50px', padding:'0.75rem 1.5rem', fontWeight:700, fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', boxShadow:'0 4px 20px rgba(236,72,153,0.35)', transition:'transform 0.2s' }}
                onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'}
                onMouseOut={e=>e.currentTarget.style.transform='none'}>
                <ShoppingBag size={18}/> Adicionar ao Carrinho
              </button>
            </div>

            {/* Whatsapp */}
            <button style={{ width:'100%', padding:'0.75rem', border:'2px solid #22c55e', backgroundColor:'transparent', cursor:'pointer', color:'#16a34a', borderRadius:'50px', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', fontSize:'0.95rem', transition:'all 0.2s' }}
              onMouseOver={e=>{e.currentTarget.style.background='#f0fdf4';}}
              onMouseOut={e=>{e.currentTarget.style.background='transparent';}}>
              <WhatsApp size={18}/> Comprar pelo WhatsApp
            </button>

            {/* Frete */}
            <div style={{ borderTop:'1px solid #f3f4f6', paddingTop:'1rem' }}>
              <div style={{ fontSize:'0.85rem', color:'#6b7280', marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'0.4rem' }}><Truck size={14}/> Calcule o frete</div>
              <div style={{ display:'flex', border:'1px solid #e5e7eb', borderRadius:'50px', overflow:'hidden' }}>
                <input type="text" placeholder="Digite seu CEP" style={{ flex:1, padding:'0.6rem 1rem', border:'none', outline:'none', fontSize:'0.9rem' }}/>
                <button style={{ padding:'0.6rem 1.2rem', backgroundColor:'var(--pink-500)', color:'white', border:'none', cursor:'pointer', fontWeight:600, fontSize:'0.85rem' }}>Calcular</button>
              </div>
            </div>

            {/* Garantias */}
            <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', paddingTop:'0.5rem' }}>
              {[['🛡️','Produto Original'],['📦','Embalagem Premium'],['🔄','Troca Fácil']].map(([icon,label])=>(
                <div key={label} style={{ fontSize:'0.75rem', color:'#6b7280', display:'flex', alignItems:'center', gap:'4px' }}>{icon} {label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Cart Sidebar ─── */
const CartSidebar = ({ cart, onClose, onRemove, totalItems, totalPrice }) => (
  <>
    <div onClick={onClose} style={{ position:'fixed', inset:0, backgroundColor:'rgba(0,0,0,0.45)', backdropFilter:'blur(4px)', zIndex:998 }}/>
    <div style={{ position:'fixed', top:0, right:0, bottom:0, width:'100%', maxWidth:'420px', backgroundColor:'white', zIndex:999, boxShadow:'-10px 0 40px rgba(0,0,0,0.12)', display:'flex', flexDirection:'column', animation:'slideIn 0.3s ease-out' }}>
      <div style={{ padding:'1.5rem 1.5rem 1rem', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #fce7f3' }}>
        <h2 style={{ color:'var(--pink-600)', display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'1.3rem', fontWeight:800 }}>
          <ShoppingBag/> Meu Carrinho {totalItems > 0 && <span style={{ background:'var(--pink-500)', color:'white', borderRadius:'50%', width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem', fontWeight:700 }}>{totalItems}</span>}
        </h2>
        <button onClick={onClose} style={{ background:'#f3f4f6', border:'none', cursor:'pointer', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <X size={18} color="#6b7280"/>
        </button>
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'1.2rem' }}>
        {cart.length === 0 ? (
          <div style={{ textAlign:'center', color:'#9ca3af', marginTop:'4rem' }}>
            <div style={{ fontSize:'4rem', marginBottom:'1rem' }}>🧸</div>
            <p style={{ fontSize:'1.1rem', fontWeight:600 }}>Seu carrinho está vazio</p>
            <p style={{ fontSize:'0.9rem', marginTop:'0.4rem' }}>Adicione uma boneca para começar!</p>
          </div>
        ) : (
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display:'flex', gap:'0.8rem', alignItems:'center', padding:'0.8rem', backgroundColor:'#fdf2f8', borderRadius:'16px', border:'1px solid #fce7f3' }}>
                <img src={item.image} alt={item.name} style={{ width:'64px', height:'64px', borderRadius:'12px', objectFit:'cover', background:'white' }}/>
                <div style={{ flex:1 }}>
                  <h5 style={{ color:'#1f2937', fontSize:'0.95rem', fontWeight:700 }}>{item.name}</h5>
                  <p style={{ color:'#9ca3af', fontSize:'0.8rem' }}>{item.edition}</p>
                  <p style={{ color:'#6b7280', fontSize:'0.8rem' }}>Qtd: {item.quantity}</p>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontWeight:800, color:'var(--pink-500)', fontSize:'1rem' }}>R$ {(item.price * item.quantity).toFixed(2).replace('.',',')}</div>
                  <button onClick={() => onRemove(item.id)} style={{ color:'#f87171', fontSize:'0.75rem', marginTop:'0.3rem', fontWeight:600 }}>Remover</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div style={{ padding:'1.5rem', borderTop:'2px solid #fce7f3', background:'white' }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'1rem', fontSize:'1.2rem', fontWeight:800, color:'#1f2937' }}>
            <span>Total:</span><span style={{ color:'var(--pink-600)' }}>R$ {totalPrice.toFixed(2).replace('.',',')}</span>
          </div>
          <button style={{ width:'100%', padding:'1rem', background:'linear-gradient(135deg, var(--pink-400), var(--pink-600))', color:'white', border:'none', borderRadius:'50px', fontWeight:700, fontSize:'1.05rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', boxShadow:'0 4px 20px rgba(236,72,153,0.35)' }}>
            <ShoppingBag size={20}/> Finalizar Compra
          </button>
          <button style={{ width:'100%', padding:'0.75rem', background:'transparent', border:'2px solid #22c55e', color:'#16a34a', borderRadius:'50px', fontWeight:700, fontSize:'0.95rem', cursor:'pointer', marginTop:'0.6rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem' }}>
            <WhatsApp size={18}/> Pagar pelo WhatsApp
          </button>
        </div>
      )}
    </div>
    <style>{`@keyframes slideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }`}</style>
  </>
);

/* ─── Main App ─── */
export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('todos');
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (doll) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === doll.id);
      if (ex) return prev.map(i => i.id === doll.id ? {...i, quantity: i.quantity+1} : i);
      return [...prev, {...doll, quantity:1}];
    });
    setIsCartOpen(true);
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]);

  const totalItems = cart.reduce((a,i) => a+i.quantity, 0);
  const totalPrice = cart.reduce((a,i) => a+(i.price*i.quantity), 0);

  const filtered = dolls.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.edition.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'todos' || (filter === 'bonecas' && d.tipo !== 'boneco') || (filter === 'bonecos' && d.tipo === 'boneco') || (filter === 'personalizados' && d.tipo);
    return matchSearch && matchFilter;
  });

  return (
    <div className="app-container">

      {/* ── Faixa Topo Promoção ── */}
      <div style={{ background:'linear-gradient(135deg, var(--pink-500), var(--pink-600))', color:'white', textAlign:'center', padding:'0.5rem', fontSize:'0.85rem', fontWeight:600, letterSpacing:'0.02em' }}>
        🎀 Frete grátis acima de R$ 299 &nbsp;·&nbsp; 10% de desconto no Pix &nbsp;·&nbsp; Parcelamos em 6x sem juros 🎀
      </div>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="logo">
          <Heart fill="var(--pink-500)" color="var(--pink-500)" size={22}/>
          Dreamy Dolls
        </div>
        <div className="nav-links">
          <a href="#home">Início</a>
          <a href="#features">Diferenciais</a>
          <a href="#collection">Coleção</a>
          <a href="#social">Comunidade</a>
        </div>
        <div style={{ display:'flex', gap:'0.8rem', alignItems:'center' }}>
          <button className="btn-outline-icon" onClick={() => setIsCartOpen(true)} style={{ position:'relative' }}>
            <ShoppingBag size={20}/>
            {totalItems > 0 && (
              <span style={{ position:'absolute', top:'-6px', right:'-6px', background:'var(--pink-500)', color:'white', borderRadius:'50%', width:'20px', height:'20px', fontSize:'0.7rem', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>{totalItems}</span>
            )}
          </button>
          <button className="btn-primary" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={16}/>
            {totalItems > 0 ? `Carrinho (${totalItems})` : 'Carrinho'}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="badge">✨ Nova Coleção Primavera 2026</span>
          <h1>Encanto e Magia em Cada Detalhe</h1>
          <p>Bonecas artesanais de pano feitas com amor, materiais premium e um toque de magia. Presentes que criam memórias para sempre.</p>
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'0.5rem' }}>
            <a href="#collection" style={{ display:'inline-block' }}>
              <button className="btn-primary" style={{ padding:'1rem 2rem', fontSize:'1.05rem' }}>
                Ver Coleção <Sparkles size={18}/>
              </button>
            </a>
            <a href="#features" style={{ display:'inline-block' }}>
              <button className="btn-secondary" style={{ padding:'1rem 2rem', fontSize:'1.05rem' }}>
                Saiba Mais
              </button>
            </a>
          </div>
          {/* Trust badges */}
          <div style={{ display:'flex', gap:'1.5rem', marginTop:'2rem', flexWrap:'wrap' }}>
            {[['🏆','Qualidade Premium'],['💝','Feito à Mão'],['🚚','Frete Grátis >R$299']].map(([ic,lb])=>(
              <div key={lb} style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.8rem', color:'var(--text-muted)', fontWeight:600 }}>{ic} {lb}</div>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-blob"/>
          <img src="/hero-doll.png" alt="Boneca encantadora"/>
          {/* Floating cards */}
          <div className="hero-float-card left">
            <span style={{ fontSize:'1.5rem' }}>🎀</span>
            <div>
              <div style={{ fontWeight:700, fontSize:'0.85rem', color:'var(--pink-600)' }}>+500 famílias</div>
              <div style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>felizes conosco</div>
            </div>
          </div>
          <div className="hero-float-card right">
            <Star fill="var(--pink-400)" color="var(--pink-400)" size={16}/>
            <div>
              <div style={{ fontWeight:700, fontSize:'0.85rem', color:'var(--pink-600)' }}>4.9 / 5.0</div>
              <div style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>avaliação média</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="features">
        <h2 className="section-title">Por que escolher nossas bonecas?</h2>
        <p className="section-subtitle">Cada boneca é única e pensada para trazer alegria, segurança e muito encanto.</p>
        <div className="features-grid">
          {[
            [<Star size={28}/>, 'Design Exclusivo', 'Roupas e feições desenhadas por artistas especializados para garantir uma aparência única e cativante.'],
            [<ShieldCheck size={28}/>, 'Material Seguro', 'Tecidos hipoalergênicos e enchimentos atóxicos, garantindo 100% de segurança para crianças.'],
            [<Gift size={28}/>, 'Embalagem Mágica', 'Todas as bonecas vêm em caixa especial, pronta para presentear e surpreender quem você ama.'],
            [<Award size={28}/>, 'Certificado Incluso', 'Cada boneca acompanha certificado de autenticidade e garantia de qualidade Dreamy Dolls.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="feature-card">
              <div className="feature-icon-wrapper">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Collection ── */}
      <section id="collection" className="collection">
        <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
          <h2 className="section-title">Nossa Coleção</h2>
          <p className="section-subtitle">Clique em qualquer boneca para ver todos os detalhes, estoque e opções de compra.</p>
        </div>

        {/* Barra de busca e filtros */}
        <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'2rem', alignItems:'center', justifyContent:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', background:'white', border:'2px solid #fce7f3', borderRadius:'50px', padding:'0.5rem 1.2rem', flex:'1', maxWidth:'380px' }}>
            <Search size={18} color="#9ca3af"/>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar boneca..."
              style={{ border:'none', outline:'none', flex:1, fontFamily:'var(--font-main)', fontSize:'0.95rem', color:'var(--text-main)' }}
            />
          </div>
          <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', justifyContent:'center' }}>
            {[['todos','Todos'],['bonecas','Bonecas'],['bonecos','Bonecos'],['personalizados','Personalizados']].map(([val, label]) => (
              <button key={val} onClick={() => setFilter(val)}
                style={{ padding:'0.5rem 1.2rem', borderRadius:'50px', border:'2px solid', borderColor: filter===val ? 'var(--pink-500)' : '#fce7f3', background: filter===val ? 'var(--pink-500)' : 'white', color: filter===val ? 'white' : 'var(--pink-600)', fontWeight:600, fontSize:'0.875rem', cursor:'pointer', transition:'all 0.2s', fontFamily:'var(--font-main)' }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <p style={{ textAlign:'center', color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'2rem' }}>
          Mostrando <strong>{filtered.length}</strong> de <strong>{dolls.length}</strong> itens
        </p>

        <div className="collection-grid">
          {filtered.map(doll => (
            <div key={doll.id} className="collection-card" style={{ position:'relative' }}>
              {/* Wishlist */}
              <button onClick={() => toggleWishlist(doll.id)}
                style={{ position:'absolute', top:'12px', right:'12px', zIndex:5, background:'white', border:'none', cursor:'pointer', width:'34px', height:'34px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' }}>
                <Heart size={16} fill={wishlist.includes(doll.id) ? 'var(--pink-500)' : 'none'} color="var(--pink-500)"/>
              </button>
              {/* Badge tipo */}
              {doll.tipo && (
                <div style={{ position:'absolute', top:'12px', left:'12px', zIndex:5, backgroundColor: doll.tipo === 'boneco' ? '#6366f1' : 'var(--pink-500)', color:'white', padding:'0.2rem 0.65rem', borderRadius:'50px', fontSize:'0.72rem', fontWeight:700, boxShadow:'0 2px 8px rgba(0,0,0,0.15)' }}>
                  {doll.tipo === 'boneco' ? '🧒 Boneco' : '👧 Personalizada'}
                </div>
              )}
              {/* Estoque baixo */}
              {doll.stock <= 5 && (
                <div style={{ position:'absolute', top: doll.tipo ? '44px' : '12px', left:'12px', zIndex:5, backgroundColor:'#dc2626', color:'white', padding:'0.2rem 0.65rem', borderRadius:'50px', fontSize:'0.7rem', fontWeight:700 }}>
                  🔥 Últimas {doll.stock}!
                </div>
              )}

              <div className="collection-img-container" style={{ cursor:'pointer' }} onClick={() => setSelectedProduct(doll)}>
                <img src={doll.image} alt={doll.name}/>
                <div className="card-overlay">
                  <span style={{ color:'white', fontWeight:700, fontSize:'0.9rem' }}>🔍 Ver detalhes</span>
                </div>
              </div>

              <div className="collection-info" style={{ flexDirection:'column', alignItems:'flex-start', gap:'0.8rem' }}>
                <div style={{ width:'100%' }}>
                  <h4 style={{ marginBottom:'0.15rem' }}>{doll.name}</h4>
                  <p style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>{doll.edition}</p>
                  {/* Mini estrelas */}
                  <div style={{ display:'flex', gap:'2px', marginTop:'0.3rem' }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="var(--pink-300)" color="var(--pink-300)"/>)}
                  </div>
                </div>
                <div style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div>
                    <span className="price">R$ {doll.price}</span>
                    <div style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>6x de R$ {(doll.price/6).toFixed(2).replace('.',',')}</div>
                  </div>
                  <button onClick={() => addToCart(doll)}
                    style={{ padding:'0.6rem 1rem', backgroundColor: doll.tipo==='boneco' ? '#6366f1' : 'var(--pink-500)', color:'white', borderRadius:'50px', fontWeight:700, fontSize:'0.85rem', display:'flex', alignItems:'center', gap:'0.4rem', border:'none', cursor:'pointer', transition:'all 0.2s', boxShadow: doll.tipo==='boneco' ? '0 4px 12px rgba(99,102,241,0.3)' : '0 4px 12px rgba(236,72,153,0.3)' }}
                    onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'}
                    onMouseOut={e => e.currentTarget.style.transform='none'}>
                    <Plus size={15}/> Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign:'center', padding:'4rem', color:'var(--text-muted)' }}>
            <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔍</div>
            <p style={{ fontSize:'1.1rem', fontWeight:600 }}>Nenhuma boneca encontrada</p>
            <p>Tente outro termo de busca ou filtro.</p>
          </div>
        )}
      </section>

      {/* ── Depoimentos ── */}
      <section style={{ padding:'5rem 5%', background:'white', textAlign:'center' }}>
        <h2 className="section-title">O que as famílias dizem 💬</h2>
        <p className="section-subtitle">Mais de 500 famílias já escolheram as Dreamy Dolls</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.5rem', marginTop:'3rem' }}>
          {[
            { name:'Ana Paula', city:'São Paulo', text:'Minha filha ficou encantada! A qualidade é impressionante, parece que foi feita à mão com muito amor. Já comprei 3!', stars:5 },
            { name:'Marcia Lima', city:'Belo Horizonte', text:'Entrega rápida e embalagem linda. A boneca é exatamente como nas fotos, super detalhada e fofinha demais!', stars:5 },
            { name:'Carla Souza', city:'Rio de Janeiro', text:'Presentei minha sobrinha e ela não larga mais. O certificado de autenticidade que vem junto é um charme especial.', stars:5 },
          ].map(t => (
            <div key={t.name} style={{ background:'#fdf2f8', borderRadius:'20px', padding:'1.8rem', textAlign:'left', border:'1px solid #fce7f3', position:'relative' }}>
              <div style={{ fontSize:'2rem', position:'absolute', top:'1.2rem', right:'1.5rem', opacity:0.3 }}>"</div>
              <div style={{ display:'flex', gap:'2px', marginBottom:'0.8rem' }}>
                {[...Array(t.stars)].map((_,i) => <Star key={i} size={14} fill="var(--pink-400)" color="var(--pink-400)"/>)}
              </div>
              <p style={{ color:'#374151', lineHeight:1.6, fontSize:'0.9rem', marginBottom:'1rem' }}>{t.text}</p>
              <div style={{ fontWeight:700, color:'var(--pink-600)', fontSize:'0.9rem' }}>{t.name}</div>
              <div style={{ color:'var(--text-muted)', fontSize:'0.8rem' }}>{t.city}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Social ── */}
      <section id="social" style={{ padding:'5rem 5%', background:'var(--pink-50)' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'3rem', alignItems:'center', justifyContent:'center' }}>
          {/* Facebook */}
          <div style={{ flex:'1', minWidth:'280px', maxWidth:'460px' }}>
            <h2 className="section-title" style={{ fontSize:'2rem', display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1rem' }}>
              <Facebook size={32}/> Comunidade VIP
            </h2>
            <p style={{ color:'var(--text-muted)', fontSize:'1rem', marginBottom:'1.5rem', lineHeight:1.7 }}>
              Junte-se a mais de <strong>10.000 mamães</strong> no nosso grupo exclusivo! Novidades em primeira mão, sorteios e muito mais.
            </p>
            <button className="btn-primary" style={{ background:'linear-gradient(135deg, #1877F2, #1656b0)', boxShadow:'0 4px 15px rgba(24,119,242,0.3)' }}>
              <Facebook size={18}/> Participar do Grupo
            </button>
          </div>
          {/* Instagram */}
          <div style={{ flex:'1', minWidth:'280px', maxWidth:'460px' }}>
            <h2 className="section-title" style={{ fontSize:'2rem', display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.5rem' }}>
              <Instagram size={32}/> @dreamydolls
            </h2>
            <p style={{ color:'var(--text-muted)', fontSize:'1rem', marginBottom:'1.5rem', lineHeight:1.7 }}>Siga nosso Instagram e fique por dentro de lançamentos, bastidores e promoções exclusivas!</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem', marginBottom:'1.2rem' }}>
              {[1,2,3,4,5,'hero'].map((n,i) => (
                <div key={i} style={{ aspectRatio:'1/1', borderRadius:'12px', overflow:'hidden', cursor:'pointer' }}>
                  <img src={n === 'hero' ? '/hero-doll.png' : `/doll-${n}.png`} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.3s' }}
                    onMouseOver={e => e.currentTarget.style.transform='scale(1.08)'}
                    onMouseOut={e => e.currentTarget.style.transform='scale(1)'}/>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ background:'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', boxShadow:'0 4px 15px rgba(131,58,180,0.3)' }}>
              <Instagram size={18}/> Seguir no Instagram
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h2><Heart fill="white" size={22}/> Dreamy Dolls</h2>
            <p>Trazendo magia, encanto e sorrisos através de bonecas feitas com puro amor artesanal.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
              <a href="#" aria-label="Facebook"><Facebook size={18}/></a>
              <a href="#" aria-label="WhatsApp"><WhatsApp size={18}/></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Loja</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#collection">Coleção</a></li>
              <li><a href="#features">Diferenciais</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Políticas</h4>
            <ul>
              <li><a href="#">Frete e Entregas</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Privacidade</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contato</h4>
            <ul>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">E-mail</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Dreamy Dolls. Todos os direitos reservados. Feito com 💕</div>
      </footer>

      {/* ── Modals ── */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart}/>}
      {isCartOpen && <CartSidebar cart={cart} onClose={() => setIsCartOpen(false)} onRemove={removeFromCart} totalItems={totalItems} totalPrice={totalPrice}/>}
    </div>
  );
}
