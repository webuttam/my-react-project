import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/cards/Cards'
function App() {

  return (
    <>
      <Navbar />
      <div className='card-list'>
        <div className="container">
          <div className='row'>
            <div className='col-xl-3 col-lg-3 col-sm-6 card-box'>
              <Cards image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg" alt="Card 1" title="Card 1" desc="Card 1 Desc" />
            </div>
            <div className='col-xl-3 col-lg-3 col-sm-6 card-box'>
                <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhOz3706uOINeIzHGqR-xCyCPsHuZ1vSKidxRpM9JMz5G7pt9qMogTZGlnOGWRya3xY0&usqp=CAU" alt="Card 2" title="Card 2" desc="Card 2 Desc" />
            </div>
            <div className='col-xl-3 col-lg-3 col-sm-6 card-box'>
                <Cards image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg" alt="Card 3" title="Card 3" desc="Card 3 Desc" />
            </div>
            <div className='col-xl-3 col-lg-3 col-sm-6 card-box'>
                <Cards image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg" alt="Card 4" title="Card 4" desc="Card 4 Desc" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
