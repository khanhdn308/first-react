import './App.css'
import Page from './Page'
import Header from './components/Header'
import Entry from './components/Entry'
import data from '../data';


function App() {
  return (
    <>
      <Header />
      <Entry
        country={data[0].country}
        title={data[0].title}
        googleMapsUrl={data[0].googleMapsLink}
        dateRange={data[0].dates}
        description={data[0].text}
        imgSrc={data[0].img.src}
        imgAlt={data[0].img.alt}
      />
      <Entry
        country={data[1].country}
        title={data[1].title}
        googleMapsUrl={data[1].googleMapsLink}
        dateRange={data[1].dates}
        description={data[1].text}
        imgSrc={data[1].img.src}
        imgAlt={data[1].img.alt}
      />
      <Entry
        country={data[2].country}
        title={data[2].title}
        googleMapsUrl={data[2].googleMapsLink}
        dateRange={data[2].dates}
        description={data[2].text}
        imgSrc={data[2].img.src}
        imgAlt={data[2].img.alt}
      />
      <Page />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
