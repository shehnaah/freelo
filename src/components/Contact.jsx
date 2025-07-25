import React from 'react'

function Contact() {
  return (
    <div>
              <div class="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="p-5 bg-light rounded contact-form">
                    <div class="row g-4">
                        <div class="col-12">
                            <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Get in touch</small>
                            <h1 class="display-5 mb-0">Contact Us For Any Queries!</h1>
                        </div>
                        <div class="col-md-6 col-lg-7">
                            <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <input type="text" class="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name"/>
                                <input type="email" class="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Enter Your Email"/>
                                <textarea class="w-100 form-control mb-4 p-3 border-primary bg-light" rows="4" cols="10" placeholder="Your Message"></textarea>
                                <button class="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Submit Now</button>
                            </form>
                        </div>
<div class="row justify-content-center px-3">
  <div class="col-12 col-md-10 col-lg-5">
    
    <div class="d-flex w-100 border border-primary p-4 rounded mb-4 align-items-start">
      <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
      <div>
        <h5 class="mb-1">Address</h5>
        <p class="mb-0">123 Street, New York, USA</p>
      </div>
    </div>

    <div class="d-flex w-100 border border-primary p-4 rounded mb-4 align-items-start">
      <i class="fas fa-envelope fa-2x text-primary me-4"></i>
      <div>
        <h5 class="mb-1">Mail Us</h5>
        <p class="mb-1">info@example.com</p>
        <p class="mb-0">support@example.com</p>
      </div>
    </div>

    <div class="d-flex w-100 border border-primary p-4 rounded align-items-start">
      <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
      <div>
        <h5 class="mb-1">Telephone</h5>
        <p class="mb-1">(+012) 3456 7890 123</p>
        <p class="mb-0">(+704) 5555 0127 296</p>
      </div>
    </div>

  </div>
</div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Contact
