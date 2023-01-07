import React from 'react';
import Support from "../Component/Support";
import '../Screen/Landing.css';

export default function LandingPage() {
  return (
    <div className="home-container">
      <div className="home-container01">
        <span className="home-text">
          Strathclyde doors are part of Strathclyde windows Ltd.
          This is our new innovative site to help our clients choose a new door design.
          All you need to do is take a picture of your property and upload it and you can change the front door of your property to see how it would look like if you changed the design and colour.The new door will help keep your home insulated to help reduce energy bills.
        </span>
        <a href="/door"><button className="home-button button">Design Your Door</button></a>
        <span className="home-text01">
          <span>Trendy Doors </span>
          <br></br>
          <span>for a Trendy Home</span>
        </span>
      </div>
      <div className="home-container02">
        <div className="home-feature-card1">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
          </svg>
          <h2 className="home-text05">Design With Purpose</h2>
          <span className="home-text06">
            <span>
              For each project we establish relationships with partners who we
              know will help us create added value for your project.
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-feature-card1">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
          </svg>
          <h2 className="home-text09">High Quality Materials</h2>
          <span className="home-text10">
            <span>
              We don’t install uPVC doors, because we don’t think they’re good enough for our customers. We only fit composite doors with security hinges and quality handles. AND we upgrade every single one with a premium anti-snap cylinder lock, resistant to drilling, picking and snapping. Which means maximum protection for your home and everything and everybody in it.
            </span>
            <br className="home-text12"></br>
            <br></br>
          </span>
        </div>
        <div className="home-feature-card2">
          <svg viewBox="0 0 1024 1024" className="home-icon04">
            <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
          </svg>
          <h2 className="home-text14">25 Years of Experience</h2>
          <span className="home-text15">
            <span>
              Our quality composite doors offer unrivalled strength and security. Made from a combination of modern materials, they provide the ultimate in thermal efficiency, meaning your home stays as toasty as possible. AND because they carry the Police approved ‘Secure By Design’ mark if someone did manage to break in we pay £1000.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-container03">
        <span className="home-text18">
          <span>
            {' '}
            We do things a bit differently from the big guys. We don’t do dodgy
            salesmen or inflated prices, no fake discounts or cheap materials.
            We do great doors at even better prices, with 5-star Google reviewed
            customer service. It’s not about us and what we want to sell you,
            it’s about you and what you want for your home.
          </span>
          <span>
            And if you’re anything like most of our customers you’ll want
            quality which will last, at a price you can afford. If you want to
            improve your home, with the security of a guarantee from the largest
            trade supplier in the UK and to deal with a company who will put
            your needs front and centre get in touch.
          </span>
        </span>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1666087563188-e5243c4dd319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80"
          className="home-image"
        />
        <h1 className="home-text21">About Us</h1>
      </div>
      <h1 className="home-text22">Featured Works</h1>
      <div className="home-container04">
        <div className="home-hero">
          <div className="home-container05">
            <h2 className="home-text23">Composite doors. Better than UPVC in every way.</h2>
            <h3 className="home-text24">More stylish.✅</h3>
            <h3 className="home-text24">More secure.✅</h3>
            <h3 className="home-text24">More energy efficient.✅</h3>
            <h3 className="home-text24">More long lasting.✅</h3>
            <h4 className="home-text24">Want a high security, modern or traditional style composite door which will last for years? Call us! 0141 280 8585</h4>

            <span className="home-text25">
              <br></br>
              <br></br>

              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1666085945125-97ee6cf7153b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-container06">
        <div className="home-hero1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1666086041999-84244b102e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80"
            className="home-image2"
          />
          <div className="home-container07">
            <h2 className="home-text31">Reasons to choose Strathclyde Doors...</h2>
            <h3 className="home-text32">5 star rated on Facebook & Google ✔️</h3>
            <h3 className="home-text32">Quality products from Veka and Rehau ✔️</h3>
            <h3 className="home-text32">Glazing options to suit your budget ✔️</h3>
            <h3 className="home-text32">10 years FREE maintenance on everything (not just frames) ✔️</h3>
            <h3 className="home-text32">Disclosure Scotland vetted installers ✔️</h3>
            <h3 className="home-text32">Payment options available ✔️</h3>


          </div>
        </div>
      </div>
      {/* <div className="home-container06">
        <div className="home-hero1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1666086041999-84244b102e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80"
            className="home-image2"
          />
          <div className="home-container07">
            <h1 className="home-text31">Let’s keep things organised</h1>
            <h2 className="home-text32">Magnificent things are very simple.</h2>
            <div className="home-btn-group1">
              <a href="/door"><button className="home-button3 button">Get Started</button></a>
              <a href="/door"><button className="home-button4 button">Learn More</button></a>
            </div>
            <span className="home-text33">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor. Lorem
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </div>
        </div>
      </div> */}

      <div className="container47">
        <div className="home-container04">
          <div className="home-hero">
            <div className="home-container05">
              <h1 className="home-text23">The difference between a cheap door and a good door?</h1>
              <h5 className="home-text24">Cheap door = filled with low grade FOAM<br></br>
                Good door = filled with 16 layers of engineered TIMBER<br></br>
                Still want to save a few quid and get the cheaper one? <br></br>Don't call us! Sensible customers get in touch 😉</h5>
              {/* <div className="home-btn-group">
              <a href="/door"><button className="home-button1 button">Get Started</button></a>
              <a href="/door"><button className="home-button2 button">Learn More</button></a>
            </div> */}
              <span className="home-text25">
                <br></br>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1666096033571-4bd6cf0ecd86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              className="home-image1"
            />
          </div>
        </div>
      </div>

      <div className="home-container08">
        <div className="home-container09">
          <div className="home-container10">
            <h1 className="home-text47">
              <span>TESTIMONIALS</span>
              <br></br>
            </h1>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-testimonial-card">
                <div className="home-testimonial">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="home-text50">
                    Absolutely delighted with the job just completed by Strathclyde Windows. They installed two huge upstairs bedroom windows for us. The whole process from enquiry to fitting was totally seamless and utterly professional. There was no fuss or any delays. 
                  </span>
                  <span className="home-text51">James</span>
                </div>

              </div>
            </div>
            <div className="home-container13">
              <div className="home-testimonial-card1">
                <div className="home-testimonial1">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="home-text52">
                    Alan and Peter went above and beyond to get me beautiful new windows in record time! So accommodating, efficient and flawless work! On top of that, they are just really nice guys that I would recommend to anyone. Thanks lads!
                  </span>
                  <span className="home-text53">Fiona</span>
                </div>

              </div>
            </div>
            <div className="home-container14">
              <div className="home-testimonial-card2">
                <div className="home-testimonial2">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="home-text54">
                    Fab company! Both office staff and install team, honest open and upfront! Cheapest across the board on all windows for our house from 4 other quotes. Lovely product! Quick, clean and friendly install! Really chuffed! Thank you!
                  </span>
                  <span className="home-text55">Jean</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container15"></div>
          <div className="home-container16"></div>
          <div className="home-container17"></div>
        </div>
      </div>
      <div className="home-container18"></div>
      <div className="home-container19">
        <div className="home-container20"></div>
      </div>


      <Support />
    </div>




  )
}



