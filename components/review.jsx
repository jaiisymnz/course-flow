import DecorativeImages from "./decorative-images";
export default function Review() {
  return (
    <>
      <h1 className="text-center font-semibold text-2xl mt-16 mb-8">
        Our Graduates
      </h1>
      <div
        id="testimonialCarousel"
        className="carousel slide relative min-h-[400px]"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="flex justify-center">
              <div className="bg-blue-100 text-left p-6 rounded-lg w-72 md:flex md:flex-row md:items-center md:w-2/4 md:gap-6">
                <img
                  src="/assets/image/reviewer01.png"
                  alt="Saiful Islam"
                  className="w-32 h-32 mx-auto mb-4 md:mx-0 md:mb-0 md:w-40 md:h-40"
                />
                <div>
                  <h5 className="text-lg font-bold">Saiful Islam</h5>
                  <p className="text-sm text-gray-600">
                    Start with something simple and small, then expand over
                    time. If people call it a 'toy' you're definitely onto
                    something. If you're waiting for encouragement from others,
                    you're doing it wrong. By the time people think an idea is
                    good, it's probably too late.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="flex justify-center">
              <div className="bg-blue-100 text-left p-6 rounded-lg w-72 md:flex md:flex-row md:items-center md:w-2/4 md:gap-6">
                <img
                  src="/assets/image/chillguy.jpeg"
                  alt="Another User"
                  className="w-32 h-32 mx-auto mb-4 md:mx-0 md:mb-0 md:w-40 md:h-40"
                />
                <div>
                  <h5 className="text-lg font-bold">Chill Guy</h5>
                  <p className="text-sm text-gray-600">
                    Start with something simple and small, then expand over
                    time. If people call it a 'toy' you're definitely onto
                    something. If you're waiting for encouragement from others,
                    you're doing it wrong. By the time people think an idea is
                    good, it's probably too late.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="flex justify-center">
              <div className="bg-blue-100 text-left p-6 rounded-lg w-72 md:flex md:flex-row md:items-center md:w-2/4 md:gap-6">
                <img
                  src="/assets/image/reviewer01.png"
                  alt="Another User"
                  className="w-32 h-32 mx-auto mb-4 md:mx-0 md:mb-0 md:w-40 md:h-40"
                />
                <div>
                  <h5 className="text-lg font-bold">Saiful Islam 3</h5>
                  <p className="text-sm text-gray-600">
                    Start with something simple and small, then expand over
                    time. If people call it a 'toy' you're definitely onto
                    something. If you're waiting for encouragement from others,
                    you're doing it wrong. By the time people think an idea is
                    good, it's probably too late.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <DecorativeImages />
      </div>
    </>
  );
}
