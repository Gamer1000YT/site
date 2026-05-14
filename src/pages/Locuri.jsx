export default function Locuri() {
    return (
        <main className='page-fade-in'>
            <header className='page-header'>
                <h1 className='outline-text'>Locuri din Bucuresti</h1>
                <p className="subtitle">Locuri importante din Bucuresti:</p>
            </header>

            <section className="timeline-container">
                <div className="timeline-item">
                    <span className="year">Ateneul Roman</span>
                    <div className="timeline-content">
                        <h3>Ateneul Român a fost ridicat în Grădina Episcopiei, pe terenul ce aparținuse familiei Văcăreștilor și pe care fusese ridicată Biserica Sfinților 40 de Mucenici.</h3>
                    </div>
                </div>

                <div className="timeline-item">
                    <span className="year">Cartierul Cotroceni</span>
                    <h3>Cotroceni este un cartier situat în sectoarele 5 și 6 ale Bucureștiului. Cotroceni este un cartier select al Bucureștiului, casele având o arhitectură deosebită. Aici este situat și Palatul Cotroceni.</h3>
                </div>

                <div className="timeline-item">
                    <span className="year">Palatul Primaverii</span>
                    <h3>Palatul Primăverii, cunoscut și sub numele de Casa Ceaușescu,[1] este o clădire din București, situat în cartierul Primăverii. Din 2016 găzduiește un muzeu.</h3>
                </div>
            </section>
        </main>
    );
}
