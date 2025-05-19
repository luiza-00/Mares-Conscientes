import React from 'react';
import { Menubar } from 'primereact/menubar';
import { colors } from '@mui/material';

function Navbar() {
const items = [
{
label: 'Sobre nós', 
command: () => {
const section = document.getElementById('sobre-nos');
if (section) {
section.scrollIntoView({ behavior: 'smooth' });
}
},
},
{
label: 'Seja um patrocinador!',
command: () => {
const section = document.getElementById('patrocinador');
if (section) {
section.scrollIntoView({ behavior: 'smooth' });
}
},
},
];

const start = (
<div style={{ display: 'block', alignItems: 'center', gap: '0.5rem' }}>
<img
src="/images/logo.png"
alt="Logo Mares Conscientes"
style={{ height: '40px', objectFit: 'contain' }}
/>
<div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
{/* Nome opcional aqui */}
</div>
</div>
);

const end = (
<div style={{ fontSize: '0.9rem' }}>
pt-br
</div>
);

const menubarStyle = {
background: 'rgba(0, 0, 0, 0.6)',
padding: '1rem 1.5rem',
position: 'absolute',
top: 0,
left: 0,
width: '100%',
zIndex: 10,
color: 'white',
borderBottom: '1px solid rgba(255,255,255,0.2)',
};

return (
<Menubar model={items} start={start} end={end} style={menubarStyle} className="custom-menubar" />
);
}
export default Navbar;