import '../CommercialOffer.css';

import { Header } from '../components/CommercialOffer/Header.tsx';
import { Greetings } from '../components/CommercialOffer/Greetings.tsx';
import { Advantages } from '../components/CommercialOffer/Advantages.tsx';
import { Approach } from '../components/CommercialOffer/Approach.tsx';
import { Contacts } from '../components/CommercialOffer/Contacts.tsx';
import { PostScriptum } from '../components/CommercialOffer/PostScriptum.tsx';

export function CommercialOfferPage() {
  return (
    <section className='wrapper-commercial-offer montserrat'>
      <Header/>

      <Greetings/>
      <hr/>

      <Advantages/>
      <hr/>

      <Approach/>
      <hr/>

      <Contacts/>
      <hr/>

      <PostScriptum/>
    </section>
  );
}