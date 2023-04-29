import './App.css';
import Modal from './Modal';

// import Button from './Button';
// import AccordionSection from './AccordionSection';

// import { useState } from 'react';

function App() {

  // const [cot, setCot] = useState(0);

  return (
    <div className="app">

      <Modal />

      {/* -------------- Class Notes ------------------------------------------------------------------ */}

      {/* <Button
        onClick={() => setCot(cot + 1)}
        visual="link"
        type='button'
      >
        {cot}
      </Button>

      <Button
        onClick={() => setCot(cot + 1)}
        visual="button"
        type='button'
      >
        {cot}
      </Button> */}

      {/* ---------------------------------------------------------------------------------------------- */}

      {/* <AccordionSection title="Are Cats Nocturnal">
        Cats are "crepuscular" - most active at dawn and dusk,
        which is not the same as being nocturnal
      </AccordionSection>
      <AccordionSection title="When did Cats become domesticated">
        Cats domesticated humans about 10,000 years ago, trading
        their services as pest controllers for worship and care
      </AccordionSection> */}
    </div>
  );
}

export default App;
