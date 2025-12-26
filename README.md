# Matese Experience

Benvenuto in **Matese Experience**, l'applicazione web dedicata alla scoperta e alla pianificazione di viaggi indimenticabili sui monti del Matese. Questa piattaforma offre agli utenti un modo semplice e intuitivo per esplorare itinerari, scoprire la cucina locale e organizzare la propria avventura in montagna.

## Descrizione

Il progetto mira a valorizzare il territorio del Matese offrendo un pacchetto completo di informazioni turistiche. L'applicazione guida l'utente attraverso un'esperienza curata, con tappe ottimizzate, suggerimenti culinari e strumenti utili come il meteo in tempo reale.

## Funzionalità Principali

*   **Itinerari Ottimizzati**: Visualizza mappe interattive e indicazioni dettagliate per le tappe principali del viaggio.
*   **I Sapori del Matese**: Una guida ai piatti tipici e alle eccellenze gastronomiche locali.
*   **Meteo in Tempo Reale**: Consulta le previsioni meteo per pianificare al meglio le tue escursioni.
*   **Pacchetti Esperienza**: Scegli tra diverse opzioni di pacchetto (es. Base, Premium) per personalizzare la tua visita.
*   **Contatti Diretti**: Modulo di contatto e informazioni rapide per comunicare con gli organizzatori.

## Tech Stack

Il progetto è costruito utilizzando moderne tecnologie web per garantire performance e una user experience fluida:

*   **Frontend**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [React Router v7](https://reactrouter.com/)
*   **Icone**: [Lucide React](https://lucide.dev/)

## Installazione e Avvio

Segui questi passaggi per configurare ed eseguire il progetto localmente.

### Prerequisiti

Assicurati di avere installato:
*   [Node.js](https://nodejs.org/) (versione raccomandata: LTS)
*   npm (incluso con Node.js)

### Passaggi

1.  **Clona la repository**:
    ```bash
    git clone https://github.com/tuo-username/matese-experience.git
    cd matese-experience
    ```

2.  **Installa le dipendenze**:
    ```bash
    npm install
    ```

3.  **Avvia il server di sviluppo**:
    ```bash
    npm run dev
    ```

4.  **Apri il browser**:
    L'applicazione sarà disponibile all'indirizzo `http://localhost:5173` (o un'altra porta indicata dal terminale).

## Struttura del Progetto

Ecco una panoramica delle cartelle principali:

```text
matese-experience/
├── App/                # Componenti della logica applicativa e Pagine
│   ├── components/     # Componenti specifici dell'app (es. ScrollToTop)
│   └── pages/          # Pagine principali (Home, Itinerary, Purchase, Meteo)
├── components/         # Componenti UI riutilizzabili (Navigation, Footer, ecc.)
├── public/             # Asset statici
├── constants.ts        # Costanti globali
└── ...config files     # Configurazioni (Vite, Tailwind, TypeScript)
```

## Script Disponibili

*   `npm run dev`: Avvia l'ambiente di sviluppo locale.
*   `npm run build`: Compila l'app per la produzione.
*   `npm run preview`: Anteprima locale della build di produzione.

---
*Progetto sviluppato con passione per il Matese.*
