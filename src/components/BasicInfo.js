import React from 'react'

const BasicInfo = () => {
  return (
    <div className='container mt-5 mb-5'>
        <div className='row align-items-center ps-10 pe-10 bg-light'>
            <div className='col p-3' >
                <h3 className='p-3'>Giant Panda</h3>
                <p className='p-3'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className='p-3'>
                    <button type="button" className="btn btn-primary me-2">Reference Link 1</button>
                    <button type="button" className="btn btn-outline-primary me-2">Reference Link 1</button>
                </div>
                
            </div>
            <div className='col text-center'>
            <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                frameborder="0"
                width="500"
                height="270"
                allow="fullscreen" 
                allowfullscreen
                title="video"
            />{" "}
            </div>
        </div>
        <div className='row mt-5'>
            <h2>Conclusion</h2>
            <p>
            In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.
            </p>
        </div>
    </div>
  )
}

export default BasicInfo