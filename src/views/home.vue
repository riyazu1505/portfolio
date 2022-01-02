<template>
  <div>
    <section id="self-introduction">
      <v-layout row wrap align-center justify-center class="pa-3 ma-1">
        <v-flex xs12 lg6 class="pr-lg-3 py-1">
          <img src="../../public/img/img1.png" height="300vh" width="100%">
        </v-flex>
        <v-flex xs12 lg6 class="pa-1 pa-lg-3">
          <h2 class="font-weight-black text-h5"> Need a Creative Product? </h2>
          <h3> I can help you! </h3>
          <p class="pt-3 pb-1 text-justify font-weight-regular" style="letter-spacing: 0.85px; text-indent: 35px; font-size: 1.1em;">
            I’m a developer who has passion for building clean web applications with intuitive functionality. 
            I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills,
            tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which
            involves daily stand-ups and communications, source control, and project management.
          </p>
          <v-btn text outlined large color="success" class="mr-3" style="border: 1px solid green"> Hire me </v-btn>
          <v-btn text outlined large color="primary" style="border: 1px solid blue"> Download Resume </v-btn>
        </v-flex>
      </v-layout>
    </section>
    <section id="resume" class="py-7">
      <v-container>
        <v-row>
          <v-col cols="12" lg="12">
            <div class="section-title text-center text-h5">
              <h2 style="position: relative;"> Resume </h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="3" class="d-none d-lg-block py-10">
            <nav id="resume-nav">
              <ul>
                <li>
                  <a @click="$_scrollIntoView('#page-1')"> Experience </a>
                </li>
                <li>
                  <a @click="$_scrollIntoView('#page-2')"> Education </a>
                </li>
                <li>
                  <a @click="$_scrollIntoView('#page-3')"> Skills </a>
                </li>
              </ul>
            </nav>
          </v-col>
          <v-col cols="12" lg="9" class="py-9">
            <div id="page-1" class="page one">
              <h3 class="heading mb-3"> Experience </h3>
              <div class="resume-wrap transition d-flex">
                <div class="icon d-flex align-center justify-center">
                  <v-icon dark> mdi-briefcase </v-icon>
                </div>
                <div class="text pl-4">
                  <span class="date"> 2020 - Present </span>
                  <h4> Web Developer </h4>
                  <span class="position"> ProcessDrive India </span>
                  <p hidden>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                    used in laying out print, graphic or web designs. The passage
                    is attributed to an unknown typesetter in the 15th century who
                    is thought to have.
                  </p>
                </div>
              </div>
            </div>
            <div id="page-2" class="page two">
              <h3 class="heading mb-3"> Education </h3>
              <div class="resume-wrap transition d-flex">
                <div class="icon d-flex align-center justify-center">
                  <v-icon dark> mdi-briefcase </v-icon>
                </div>
                <div class="text pl-4">
                  <span class="date"> 2020-2022 </span>
                  <h4> MCA </h4>
                  <span class="position"> Tamilnadu Open University, Chennai </span>
                  <p hidden>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                    used in laying out print, graphic or web designs. The passage
                    is attributed to an unknown typesetter in the 15th century who
                    is thought to have.
                  </p>
                </div>
              </div>
              <div class="resume-wrap transition d-flex">
                <div class="icon d-flex align-center justify-center">
                  <v-icon dark> mdi-briefcase </v-icon>
                </div>
                <div class="text pl-4">
                  <span class="date"> 2017-2020 </span>
                  <h4> Bachelor in Computer Science </h4>
                  <span class="position"> Don Bosco College, Yelagiri </span>
                  <p hidden>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                    used in laying out print, graphic or web designs. The passage
                    is attributed to an unknown typesetter in the 15th century who
                    is thought to have.
                  </p>
                </div>
              </div>
            </div>
            <div id="page-3" class="page three">
              <h3 class="heading mb-3"> Skills </h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="progress-wrap">
                    <h5> HTML </h5>
                    <v-progress-linear :value="95" height="20">
                      <span style="font-size: 11px;" class="font-weight-bold"> 95% </span>
                    </v-progress-linear>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="progress-wrap">
                    <h5> JavaScript </h5>
                    <v-progress-linear :value="80" height="20">
                      <span style="font-size: 11px;" class="font-weight-bold"> 80% </span>
                    </v-progress-linear>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="progress-wrap">
                    <h5> JavaScript </h5>
                    <v-progress-linear :value="80" height="20">
                      <span style="font-size: 11px;" class="font-weight-bold"> 80% </span>
                    </v-progress-linear>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="progress-wrap">
                    <h5> JavaScript </h5>
                    <v-progress-linear :value="80" height="20">
                      <span style="font-size: 11px;" class="font-weight-bold"> 80% </span>
                    </v-progress-linear>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="progress-wrap">
                    <h5> JavaScript </h5>
                    <v-progress-linear :value="80" height="20">
                      <span style="font-size: 11px;" class="font-weight-bold"> 80% </span>
                    </v-progress-linear>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="progress-wrap">
                    <h5> JavaScript </h5>
                    <v-progress-linear :value="80" height="20">
                      <span style="font-size: 11px;" class="font-weight-bold"> 80% </span>
                    </v-progress-linear>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="under-development">
      <v-layout row wrap align-center justify-center class="ma-1">
        <v-flex xs12 lg12>
          <v-parallax src="../../public/img/bg1.png">
            <v-container>
              <v-row>
                <v-col cols="12" lg="12" class="text-center black--text">
                  under development!
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-flex>
      </v-layout>
    </section>
    <section id="footer">
      <v-layout row wrap align-center justify-center class="ma-1 pt-7 pb-2 my-4">
        <v-flex xs8 lg3 class="text-center px-lg-7">
          <v-layout>
            <v-flex xs6 lg6 class="text-right px-2 py-3">
              <img src="@/assets/me1.jpg" alt="Riyaz" width="100" height="100%">
            </v-flex>
            <v-flex xs6 lg6 class="text-left pa-2 d-flex align-center">
              <v-layout row wrap align-center justify-center class="ma-2">
                <v-flex xs6 lg6 class="text-center pa-1">
                  <v-icon class="cursor-pointer" size="30" color="indigo"
                  @click="$_open('https://www.linkedin.com/in/riyazbasha-m/')"> mdi-linkedin </v-icon>
                </v-flex>
                <v-flex xs6 lg6 class="text-center pa-1">
                  <v-icon class="cursor-pointer" size="30" color="grey darken-2"
                  @click="$_open('https://github.com/riyazu1505')"> mdi-github </v-icon>
                </v-flex>
                <v-flex xs6 lg6 class="text-center pa-1">
                  <v-icon class="cursor-pointer" size="30" color="blue darken-1"
                  @click="$_open('https://twitter.com/callme_riyazu')"> mdi-twitter </v-icon>
                </v-flex>
                <v-flex xs6 lg6 class="text-center pa-1">
                  <v-icon class="cursor-pointer" size="30" color="primary"
                  @click="$_open('https://join.skype.com/invite/mulMuPGnYCo1')"> mdi-skype </v-icon>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg12 class="d-flex align-center justify-center">
          <div class="px-3">
            <p class="text-center py-2 ma-0 body-2 font-weight-medium"> Copyright &copy; 2022 | Designed & Developed by <span
            class="font-weight-black indigo--text cursor-pointer"
            @click="$_open('https://www.linkedin.com/in/riyazbasha-m/')"> Riyaz </span></p>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<style>
  .section-title h2:before {
    bottom: -17px;
    width: 100px;
    height: 2px;
  }
  .section-title h2:before, .section-title h2:after {
    content: "";
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #e45447;
  }
  .section-title h2:after {
    bottom: -21px;
    width: 10px;
    height: 10px;
    border-radius: 8px;
  }
  #resume-nav {
    top: 250px;
    position: -webkit-sticky;
    position: sticky;
    margin: 0;
  }
  .page .resume-wrap {
    /* width: 100%; */
    margin-bottom: 30px;
    background-color: #f9f9ff;
    padding: 40px 30px;
    border-radius: 10px;
  }
  .page .resume-wrap .icon {
    width: 50px;
    height: 50px;
    background: #90acd1;
    border-radius: 50%;
  }
  ul, ol {
    list-style: none;
  }
  #resume-nav li {
    font-weight: 700;
    margin-bottom: 10px;
  }
  #resume-nav li a.current {
    color: #90acd1;
    margin-left: 20px;
    position: relative;
  }
</style>
