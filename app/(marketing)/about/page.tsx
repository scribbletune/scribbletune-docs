import React from "react";

const AboutPage = () => (
  <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl my-6">About</h1>

    <p className="mb-4">
      Scribbletune is a Node.js module that helps you construct musical ideas
      with JavaScript String & Array functions and export them as MIDI files.
      You can also use Scribbletune in the browser with{" "}
      <a
        href="https://github.com/Tonejs/Tone.js"
        className="text-cyan-500 hover:underline"
      >
        Tone.js
      </a>
      !
    </p>

    <p className="mb-4">
      It is created with{" "}
      <a
        href="https://github.com/dingram/jsmidgen"
        className="text-cyan-500 hover:underline"
      >
        jsmidgen
      </a>{" "}
      for exporting MIDI files,{" "}
      <a
        href="https://github.com/Tonejs/Tone.js"
        className="text-cyan-500 hover:underline"
      >
        tone.js
      </a>{" "}
      for the Web Audio API, and{" "}
      <a
        href="https://github.com/tonaljs/tonal"
        className="text-cyan-500 hover:underline"
      >
        tonal
      </a>{" "}
      as a dev dependency for music theory (chords and scales). It also provides
      a homegrown pattern language and a browser API for building music
      production apps.
    </p>

    <p className="mb-4">
      Scribbletune is a free and open source project created & maintained by{" "}
      <a
        href="https://twitter.com/_walmik"
        className="text-cyan-500 hover:underline"
      >
        Walmik Deshpande
      </a>
      . It’s in active development thanks to its{" "}
      <a
        href="https://github.com/scribbletune/scribbletune/graphs/contributors"
        className="text-cyan-500 hover:underline"
      >
        awesome contributors
      </a>
      . The logo was graciously contributed by{" "}
      <a
        href="https://github.com/zuurw/Graphic-Design-"
        className="text-cyan-500 hover:underline"
      >
        Zuur Willem
      </a>
      .
    </p>

    <p className="mb-6">
      Scribbletune was demo’d at JavaScript meetups before the lockdown. Here
      are some videos for posterity:
    </p>

    <h5 className="text-xl font-semibold mt-8 mb-2">
      <a
        href="https://www.youtube.com/watch?v=G1bRi4El0iw"
        className="text-yellow-500 hover:underline"
      >
        SF Node 2019 Aug 1
      </a>
    </h5>
    <p className="mb-4 text-sm">GitHub HQ, San Francisco</p>

    <h5 className="text-xl font-semibold mt-4 mb-2">SF EMM 2019 July 10</h5>
    <p className="mb-4 text-sm">
      SAE Expression College, San Francisco — No video available
    </p>

    <h5 className="text-xl font-semibold mt-4 mb-2">
      <a
        href="https://www.youtube.com/watch?v=SySdchiCjsQ"
        className="text-yellow-500 hover:underline"
      >
        JS.LA 2018 Apr 26
      </a>
    </h5>
    <p className="mb-4 text-sm">Smarkets HQ, Los Angeles</p>

    <h5 className="text-xl font-semibold mt-4 mb-2">
      <a
        href="https://www.youtube.com/watch?v=iwuZzp_ZnLo"
        className="text-yellow-500 hover:underline"
      >
        SF Node 2017 Jan 5
      </a>
    </h5>
    <p className="mb-4 text-sm">GitHub HQ, San Francisco</p>

    <h5 className="text-xl font-semibold mt-4 mb-2">
      <a
        href="https://www.youtube.com/watch?v=52Z5cItzeB8"
        className="text-yellow-500 hover:underline"
      >
        ForwardJS 2017 July 27
      </a>
    </h5>
    <p className="mb-4 text-sm">ForwardJS, San Francisco</p>

    <h5 className="text-xl font-semibold mt-4 mb-2">
      <a
        href="https://www.youtube.com/watch?v=u811SNidz5U"
        className="text-yellow-500 hover:underline"
      >
        JS.CHI 2018 Sep 26
      </a>
    </h5>
    <p className="mb-4 text-sm">Trading Technologies HQ, Chicago</p>

    <h5 className="text-xl font-semibold mt-4 mb-2">
      <a
        href="https://www.youtube.com/watch?v=R7SzhvTQw7c"
        className="text-yellow-500 hover:underline"
      >
        JS@PayPal 2016 Sep 23
      </a>
    </h5>
    <p className="mb-4 text-sm">PayPal HQ, San Jose</p>
  </div>
);

export default AboutPage;
