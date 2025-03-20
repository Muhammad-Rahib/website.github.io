let right = document.getElementById('right');
right.innerHTML = `

<nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="index.html">Home</a>
        </li>
             <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="about us.html">About </a>
        </li>
        <li class="nav-item  dropdown">
          <a class="nav-link   dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">

            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="#">Premier</a>
             <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="menspremium.html">Mens</a></li>
                <li><a class="dropdown-item" href="femalepremium.html">Womens</a></li>
                <li><a class="dropdown-item" href="kidspremium.html">Kids</a></li>
              </ul>
            </li>
              <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="#">Sportz</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="men.html">Mens</a></li>
                <li><a class="dropdown-item" href="womens.html">Womens</a></li>
                <li><a class="dropdown-item" href="kids.html">Kids</a></li>
              </ul>
            </li>
          <li class="dropdown-submenu">
              <a class="dropdown-item " href="clock.html">clocks</a>
             
            </li>
          </ul>
          
        </li>

        <li class="nav-item">
          <a class="nav-link active ;" aria-current="page" href="contact.html">Contact </a>
        </li>
         <li class="nav-item">
          <a class="nav-link active pricelist" aria-current="page" href="">Price List </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


`


let footer = document.getElementById('foot');
footer.innerHTML = 
`
<!-- Footer -->

<footer class="text-center text-lg-start text-light  mt-3 container-fluid" id="footer">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>AURA WATCHES
          </h6>
          <p>
           Aura Watches is a modern watch brand known for its high quality and stylish designs.
These watches feature stainless steel hardware, butterfly clasps, and premium movements.
Aura has introduced interchangeable FKM rubber straps, allowing users to customize their watch styles.
In Pakistan, Aura Watches are available on various online stores like Auraverse.pk.







          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="index.html" class="text-reset">home</a>
          </p>
          <p>
            <a href="about us.html" class="text-reset">about</a>
          </p>
          <p>
            <a href="contact.html" class="text-reset">contact</a>
          </p>
          
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
           <h6 class="text-uppercase fw-bold mb-4">
           Categories
          </h6>
          <p>
            <a href="men.html" class="text-reset">Mens</a>
          </p>
          <p>
            <a href="womens.html" class="text-reset">Women</a>
          </p>
          <p>
            <a href="kids.html" class="text-reset">Kids</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> pakistan,karachi,sindh</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            rahibmamdani.110
          </p>
          <p><i class="fas fa-phone me-3"></i> + 311 2835 999</p>
          <p><i class="fas fa-print me-3"></i> + 311 2835 999</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>

<!-- Footer -->
`