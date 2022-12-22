
# Projet Stage - TAFFAH Achraf

Clone the project

```bash
  git https://github.com/TAFFAHACHRAF/Guide-Derb-Omar-App/
```

## MERN Stack

**Client:** React js , HTML , CSS , Bootstrap

**Server:** NodeJS, ExpressJS, Mongodb, JWT
## The project structure

``` bash
├── Client
│   ├── assets
│   │   ├── css
│   │   │   ├── demo.css
│   │   │   └── lazy.css
│   │   ├── fonts
│   │   │   ├── linea
│   │   │   │   ├── linea-basic-10.eot
│   │   │   │   ├── linea-basic-10.svg
│   │   │   │   ├── linea-basic-10.ttf
│   │   │   │   └── linea-basic-10.woff
│   │   │   └── outline
│   │   │       ├── untitled-font-5.eot
│   │   │       ├── untitled-font-5.svg
│   │   │       ├── untitled-font-5.ttf
│   │   │       └── untitled-font-5.woff
│   │   ├── img
│   │   │   ├── 43160.jpg
│   │   │   ├── add-svgrepo-com.svg
│   │   │   ├── arrow.png
│   │   │   ├── bb_logo_white.png
│   │   │   ├── Businessmans hand holding question mark.jpg
│   │   │   ├── commerce-r.png
│   │   │   ├── dog-1.jpg
│   │   │   ├── dog-2.jpg
│   │   │   ├── dog-3.jpg
│   │   │   ├── dog-4.jpg
│   │   │   ├── dog-5.jpg
│   │   │   ├── dog-6.jpg
│   │   │   ├── dog-7.jpg
│   │   │   ├── dog-8.jpg
│   │   │   ├── dog-9.jpg
│   │   │   ├── favicon.ico
│   │   │   ├── fearture.svg
│   │   │   ├── feature2.svg
│   │   │   ├── feature3.svg
│   │   │   ├── gifs
│   │   │   │   ├── hearteyes.gif
│   │   │   │   └── thinking.gif
│   │   │   ├── grossiste.jpg
│   │   │   ├── guide.jpg
│   │   │   ├── guide.png
│   │   │   ├── importer.jpg
│   │   │   ├── landing_devices.png
│   │   │   ├── landing.png
│   │   │   ├── logo_black.svg
│   │   │   ├── logo-removebg-preview.png
│   │   │   ├── logo-removebg-preview.svg
│   │   │   ├── logo.svg
│   │   │   ├── logo_white.svg
│   │   │   ├── log.svg
│   │   │   ├── lorde.png
│   │   │   ├── password.svg
│   │   │   ├── pp.svg
│   │   │   ├── presentation.jpg
│   │   │   ├── problem-solving.png
│   │   │   ├── production.jpg
│   │   │   ├── profile.png
│   │   │   ├── purple.jpg
│   │   │   ├── register.png
│   │   │   ├── share.png
│   │   │   ├── signup.svg
│   │   │   ├── Team goals-cuate.svg
│   │   │   ├── Team goals-cuat.svg
│   │   │   ├── Team goals-pana.svg
│   │   │   └── transporter.jpg
│   │   ├── js
│   │   │   ├── demo.js
│   │   │   └── lazy.js
│   │   ├── scss
│   │   │   ├── custom
│   │   │   │   ├── _alerts.scss
│   │   │   │   ├── _background.scss
│   │   │   │   ├── _badges.scss
│   │   │   │   ├── _buttons.scss
│   │   │   │   ├── _cards.scss
│   │   │   │   ├── _checkbox-radio-toggle.scss
│   │   │   │   ├── _dropdown.scss
│   │   │   │   ├── _footers.scss
│   │   │   │   ├── _inputs.scss
│   │   │   │   ├── _misc.scss
│   │   │   │   ├── mixins
│   │   │   │   │   ├── _animations.scss
│   │   │   │   │   ├── _base.scss
│   │   │   │   │   ├── _forms.scss
│   │   │   │   │   ├── _misc.scss
│   │   │   │   │   ├── _navigation.scss
│   │   │   │   │   └── _typography.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _modals.scss
│   │   │   │   ├── _navbars.scss
│   │   │   │   ├── _navs.scss
│   │   │   │   ├── _pagination.scss
│   │   │   │   ├── _popovers.scss
│   │   │   │   ├── _progress-bars.scss
│   │   │   │   ├── _sliders.scss
│   │   │   │   ├── _tables.scss
│   │   │   │   ├── _tooltips.scss
│   │   │   │   ├── _typography.scss
│   │   │   │   └── _variables.scss
│   │   │   ├── demo.scss
│   │   │   └── lazy.scss
│   │   └── vendor
│   │       ├── bootstrap
│   │       │   ├── bootstrap.min.css
│   │       │   └── bootstrap.min.js
│   │       └── nouislider
│   │           ├── css
│   │           │   ├── nouislider.css
│   │           │   └── nouislider.min.css
│   │           └── js
│   │               ├── nouislider.js
│   │               └── nouislider.min.js
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── assets
│   │   │   ├── css
│   │   │   │   ├── demo.css
│   │   │   │   └── lazy.css
│   │   │   ├── img
│   │   │   │   ├── 43160.jpg
│   │   │   │   ├── add-svgrepo-com.svg
│   │   │   │   ├── arrow.png
│   │   │   │   ├── bb_logo_white.png
│   │   │   │   ├── Businessmans hand holding question mark.jpg
│   │   │   │   ├── commerce-r.png
│   │   │   │   ├── dog-1.jpg
│   │   │   │   ├── dog-2.jpg
│   │   │   │   ├── dog-3.jpg
│   │   │   │   ├── dog-4.jpg
│   │   │   │   ├── dog-5.jpg
│   │   │   │   ├── dog-6.jpg
│   │   │   │   ├── dog-7.jpg
│   │   │   │   ├── dog-8.jpg
│   │   │   │   ├── dog-9.jpg
│   │   │   │   ├── favicon.ico
│   │   │   │   ├── fearture.svg
│   │   │   │   ├── feature2.svg
│   │   │   │   ├── feature3.svg
│   │   │   │   ├── gifs
│   │   │   │   │   ├── hearteyes.gif
│   │   │   │   │   └── thinking.gif
│   │   │   │   ├── grossiste.jpg
│   │   │   │   ├── guide.jpg
│   │   │   │   ├── guide.png
│   │   │   │   ├── importer.jpg
│   │   │   │   ├── landing_devices.png
│   │   │   │   ├── landing.png
│   │   │   │   ├── logo_black.svg
│   │   │   │   ├── logo-removebg-preview.png
│   │   │   │   ├── logo-removebg-preview.svg
│   │   │   │   ├── logo.svg
│   │   │   │   ├── logo_white.svg
│   │   │   │   ├── log.svg
│   │   │   │   ├── lorde.png
│   │   │   │   ├── password.svg
│   │   │   │   ├── pp.svg
│   │   │   │   ├── presentation.jpg
│   │   │   │   ├── problem-solving.png
│   │   │   │   ├── production.jpg
│   │   │   │   ├── profile.png
│   │   │   │   ├── purple.jpg
│   │   │   │   ├── register.png
│   │   │   │   ├── share.png
│   │   │   │   ├── Team goals-cuate.svg
│   │   │   │   ├── Team goals-cuat.svg
│   │   │   │   ├── Team goals-pana.svg
│   │   │   │   └── transporter.jpg
│   │   │   └── vendor
│   │   │       ├── bootstrap
│   │   │       │   ├── bootstrap.min.css
│   │   │       │   └── bootstrap.min.js
│   │   │       └── nouislider
│   │   │           ├── css
│   │   │           │   ├── nouislider.css
│   │   │           │   └── nouislider.min.css
│   │   │           └── js
│   │   │               ├── nouislider.js
│   │   │               └── nouislider.min.js
│   │   ├── delete.svg
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.js
│       ├── assets
│       │   ├── images
│       │   │   ├── bg
│       │   │   │   ├── bg1.jpg
│       │   │   │   ├── bg2.jpg
│       │   │   │   ├── bg3.jpg
│       │   │   │   └── bg4.jpg
│       │   │   ├── logos
│       │   │   │   ├── an7ys-nlmg7.svg
│       │   │   │   ├── logo.png
│       │   │   │   ├── logo.svg
│       │   │   │   ├── xtremelogo.svg
│       │   │   │   └── xtremelogowhite.svg
│       │   │   └── users
│       │   │       ├── user1.jpg
│       │   │       ├── user2.jpg
│       │   │       ├── user3.jpg
│       │   │       ├── user4.jpg
│       │   │       └── user5.jpg
│       │   └── scss
│       │       ├── layout
│       │       │   ├── _container.scss
│       │       │   └── _sidebar.scss
│       │       ├── style.scss
│       │       └── _variables.scss
│       ├── components
│       │   └── dashboard
│       │       ├── Blog.js
│       │       ├── Coachs.js
│       │       ├── Feeds.js
│       │       ├── GuideConsultations.js
│       │       ├── Guides.js
│       │       ├── Importers.js
│       │       ├── Price_packages.js
│       │       ├── SalesChart.js
│       │       ├── Sellers.js
│       │       ├── Source_product.js
│       │       ├── TopCards.js
│       │       ├── Training.js
│       │       ├── Transporters.js
│       │       └── Visitors.js
│       ├── image.js
│       ├── index.js
│       ├── landi.html
│       ├── layouts
│       │   ├── FullLayout.js
│       │   ├── Header.js
│       │   ├── loader
│       │   │   ├── Loader.js
│       │   │   └── loader.scss
│       │   ├── Logo.js
│       │   └── Sidebar.js
│       ├── reportWebVitals.js
│       ├── routes
│       │   └── Router.js
│       ├── setupTests.js
│       └── views
│           ├── About.js
│           ├── landing
│           │   ├── assetsLanding
│           │   │   ├── css
│           │   │   │   ├── demo.css
│           │   │   │   └── lazy.css
│           │   │   ├── fonts
│           │   │   │   ├── linea
│           │   │   │   │   ├── linea-basic-10.eot
│           │   │   │   │   ├── linea-basic-10.svg
│           │   │   │   │   ├── linea-basic-10.ttf
│           │   │   │   │   └── linea-basic-10.woff
│           │   │   │   └── outline
│           │   │   │       ├── untitled-font-5.eot
│           │   │   │       ├── untitled-font-5.svg
│           │   │   │       ├── untitled-font-5.ttf
│           │   │   │       └── untitled-font-5.woff
│           │   │   └── img
│           │   │       ├── 43160.jpg
│           │   │       ├── add-svgrepo-com.svg
│           │   │       ├── arrow.png
│           │   │       ├── bb_logo_white.png
│           │   │       ├── Businessmans hand holding question mark.jpg
│           │   │       ├── commerce-r.png
│           │   │       ├── dog-1.jpg
│           │   │       ├── dog-2.jpg
│           │   │       ├── dog-3.jpg
│           │   │       ├── dog-4.jpg
│           │   │       ├── dog-5.jpg
│           │   │       ├── dog-6.jpg
│           │   │       ├── dog-7.jpg
│           │   │       ├── dog-8.jpg
│           │   │       ├── dog-9.jpg
│           │   │       ├── favicon.ico
│           │   │       ├── fearture.svg
│           │   │       ├── feature2.svg
│           │   │       ├── feature3.svg
│           │   │       ├── gifs
│           │   │       │   ├── hearteyes.gif
│           │   │       │   └── thinking.gif
│           │   │       ├── Good team-bro.svg
│           │   │       ├── grossiste.jpg
│           │   │       ├── guide.jpg
│           │   │       ├── guide.png
│           │   │       ├── importer.jpg
│           │   │       ├── landing_devices.png
│           │   │       ├── landing.png
│           │   │       ├── logo_black.svg
│           │   │       ├── logo-removebg-preview.png
│           │   │       ├── logo-removebg-preview.svg
│           │   │       ├── logo.svg
│           │   │       ├── logo_white.svg
│           │   │       ├── log.svg
│           │   │       ├── lorde.png
│           │   │       ├── password.svg
│           │   │       ├── pp.svg
│           │   │       ├── presentation.jpg
│           │   │       ├── problem-solving.png
│           │   │       ├── production.jpg
│           │   │       ├── profile.png
│           │   │       ├── purple.jpg
│           │   │       ├── register.png
│           │   │       ├── share.png
│           │   │       ├── signup.svg
│           │   │       ├── Team goals-cuate.svg
│           │   │       ├── Team goals-cuat.svg
│           │   │       ├── Team goals-pana.svg
│           │   │       └── transporter.jpg
│           │   ├── LContact.js
│           │   ├── LFeature.js
│           │   └── LFooter.js
│           ├── Starter.js
│           └── ui
│               ├── AddCoach.js
│               ├── AddGuideConsultation.js
│               ├── AddGuide.js
│               ├── AddImporter.js
│               ├── AddPlan.js
│               ├── AddSeller.js
│               ├── AddSource_product.js
│               ├── AddTraining.js
│               ├── AddTransporter.js
│               ├── AddVisitor.js
│               ├── Alerts.js
│               ├── Badges.js
│               ├── Breadcrumbs.js
│               ├── Buttons.js
│               ├── Cards.js
│               ├── Coachs.js
│               ├── Grid.js
│               ├── GuideConsultations.js
│               ├── Guides.js
│               ├── Importers.js
│               ├── Price_packages.js
│               ├── Sellers.js
│               ├── Source_products.js
│               ├── Trainings.js
│               ├── Transporters.js
│               ├── UpdateCoach.js
│               ├── UpdateguideConsultation.js
│               ├── UpdateGuide.js
│               ├── UpdateImporter.js
│               ├── UpdatePrice_packages.js
│               ├── UpdateSeller.js
│               ├── UpdateSource_product.js
│               ├── UpdateTraining.js
│               ├── UpdateTransporter.js
│               ├── UpdateVisitor.js
│               └── Visitors.js
├── Etude Conceptuelle de projet GUIDE DERB OMAR.pdf
├── readme.md
└── Server
    ├── config.js
    ├── controlllers
    │   ├── Administrator.js
    │   ├── Coach.js
    │   ├── GuideConsultation.js
    │   ├── Guide.js
    │   ├── Image.js
    │   ├── ImporterConsultation.js
    │   ├── Importer.js
    │   ├── Person.js
    │   ├── Plan.js
    │   ├── Seller.js
    │   ├── Source_product.js
    │   ├── Training.js
    │   ├── TransporterConsultation.js
    │   ├── Transporter.js
    │   ├── UserPerson.js
    │   ├── Video.js
    │   └── Visitor.js
    ├── database
    │   └── connexion.js
    ├── images
    │   ├── 1662209049179-Capture.JPG
    │   ├── 1662216819254-7460728.jpg
    │   └── 1662995420936-adresse.png
    ├── index.js
    ├── Middleware
    │   └── not-found.js
    ├── models
    │   ├── Administrator.js
    │   ├── Coach.js
    │   ├── GuideConsultation.js
    │   ├── Guide.js
    │   ├── Image.js
    │   ├── ImporterConsultation.js
    │   ├── Importer.js
    │   ├── Person.js
    │   ├── Plan.js
    │   ├── Seller.js
    │   ├── Source_product.js
    │   ├── Training.js
    │   ├── TransporterConsultation.js
    │   ├── Transporter.js
    │   ├── UserPerson.js
    │   ├── Video.js
    │   └── Visitor.js
    ├── package.json
    ├── package-lock.json
    ├── posts.rest
    ├── routes
    │   ├── Administrator.js
    │   ├── Coach.js
    │   ├── GuideConsultation.js
    │   ├── Guide.js
    │   ├── Image.js
    │   ├── ImporterConsultation.js
    │   ├── Importer.js
    │   ├── Person.js
    │   ├── Plan.js
    │   ├── Seller.js
    │   ├── Source_product.js
    │   ├── Training.js
    │   ├── TransporterConsultation.js
    │   ├── Transporter.js
    │   ├── UserPerson.js
    │   ├── Video.js
    │   └── Visitor.js
    ├── sendMailer.js
    └── Videos
        ├── 1661974391611-Venice_5.mp4
        └── 1661974461304-Venice_5.mp4
```

