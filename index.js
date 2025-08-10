import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Palestra – Prenotazioni</title>
        <meta name="description" content="Prenotazioni palestra Palestra" />
      </Head>
      <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',margin:0,fontFamily:'ui-sans-serif,system-ui'}}>
        <header style={{position:'sticky',top:0,backdropFilter:'blur(8px)',background:'rgba(0,0,0,0.7)',borderBottom:'1px solid #1f1f1f'}}>
          <div className="container" style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="badge">PAL</div>
            <div>
              <div style={{fontWeight:700}}>Palestra – Prenotazioni</div>
              <div className="subtitle">Nero & Argento · Veloce · Intuitiva</div>
            </div>
          </div>
        </header>

        <section className="container">
          <div className="card">
            <h1 style={{margin:0,fontSize:20}}>Prenota. Allena. Migliora.</h1>
            <p className="subtitle">Demo pronta (senza login/DB) per confermare che il deploy funziona al primo colpo.</p>
          </div>
        </section>
      </main>
    </>
  );
}
