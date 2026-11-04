import '../../App.css';
import locations from '../../../data.ts';
import Entry from './Entry.tsx';


export default function TravelJournalPage() {
  return (
    <main>
      {locations.map((location, index) => (
        <Entry key={index} 
          country={location.country} 
          title={location.title} 
          googleMapsLink={location.googleMapsLink} 
          dates={location.dates} 
          text={location.text} 
          img={location.img} />
      ))}
    </main>
  )
}
