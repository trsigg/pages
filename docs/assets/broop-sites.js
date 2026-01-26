window.BroopProviders = (function () {
  function genericEmbed(url) {
    return {
      src: url,
      attrs: {},
    };
  }

  function youtubeEmbed(url) {
    var parsed = new URL(url);
    var videoId = "";
    var playlistId = parsed.searchParams.get("list") || "";
    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else {
      videoId = parsed.searchParams.get("v") || "";
    }

    var src = "https://www.youtube.com/embed/";
    if (videoId) {
      src += videoId;
      if (playlistId) {
        src += "?list=" + playlistId;
      }
    } else if (playlistId) {
      src += "videoseries?list=" + playlistId;
    } else {
      src = url;
    }

    return {
      src: src,
      attrs: {
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: "true",
      },
    };
  }

  return {
    generic: genericEmbed,
    youtube: youtubeEmbed,
  };
})();

window.BROOP_SITES = {
  embed: window.BroopProviders.generic,
  children: [
    // youtube
    {
      weight: 3,
      embed: window.BroopProviders.youtube,
      children: [
        // big iron
        {
          weight: 1,
          children: [
            { weight: 1, url: "https://www.youtube.com/watch?v=-NuX79Ud8zI" }, // base
            { weight: 1, url: "https://www.youtube.com/watch?v=j_Dyg2Dw5xI" }, // alphabet
            { weight: 1, url: "https://www.youtube.com/watch?v=3156gSmTFo0" }, // reconstructed
            { weight: 1, url: "https://www.youtube.com/watch?v=GpwcKpb9GwM&list=PLUhkS0bFq1UFkZInDclQlDEcmAQlNje6g" }, // playlist
          ],
        },
        // steamed hams
        {
          weight: 1,
          children: [
            { weight: 2, url: "https://www.youtube.com/watch?v=4jXEuIHY9ic" }, // base
            { weight: 1, url: "https://www.youtube.com/watch?v=uxW0-nq6UU8" }, // big iron
            { weight: 1, url: "https://www.youtube.com/watch?v=8MLDT5-ZgN0" }, // les mis
            { weight: 1, url: "https://www.youtube.com/watch?v=yVmw3ZhdzEs" }, // ussr
            { weight: 1, url: "https://www.youtube.com/watch?v=vqCHdVOzetc" }, // basket case
            { weight: 1, url: "https://www.youtube.com/watch?v=YHPY4Vi-32c&list=PLuDncZLO517fN_vEeoq-xFpzLdgpOVMPb" }, // playlist
          ],
        },
        // mickey
        {
          weight: 1,
          children: [
            { weight: 5, url: "https://www.youtube.com/watch?v=Gz04mwXeBGQ" }, // orig
            { weight: 1, url: "https://www.youtube.com/watch?v=qhQDX21YCZ0" }, // came back
            { weight: 2, url: "https://www.youtube.com/watch?v=NiP3ZDApOsA" }, // madness
            { weight: 1, url: "https://www.youtube.com/watch?v=QV4ro4dGc54" }, // was here
          ],
        },
        // toad
        {
          weight: 1,
          children: [
            { weight: 1, url: "https://www.youtube.com/watch?v=ow5XgHDkPOQ" }, // my way
            { weight: 1, url: "https://www.youtube.com/watch?v=o4JqU8-410s&list=PLeZ7q-s7J4p7AxCzjd-H8yRVz9VIIr828" }, // playlist
            { weight: 1, url: "https://www.youtube.com/watch?v=foS1bG8p2K0" }, // rhapsody
            { weight: 1, url: "https://www.youtube.com/watch?v=PPgLTgWa99w" }, // waafrica
            { weight: 1, url: "" }, // 
          ],
        },
        // dracula flow
        {
          weight: 1,
          children: [
            { weight: 1, url: "https://www.youtube.com/watch?v=ERbJj2NOZHU" }, // 1
            { weight: 1, url: "https://www.youtube.com/watch?v=BLqqWorGGz0" }, // 2
            { weight: 1, url: "https://www.youtube.com/watch?v=N-7gbWKbXbQ" }, // 3
            { weight: 1, url: "https://www.youtube.com/watch?v=143GFLwm9Hk" }, // 4
            { weight: 1, url: "https://www.youtube.com/watch?v=BmtDZPyaVpc" }, // 5
          ],
        },
        // spaghet
        {
          weight: 1,
          children: [
            { weight: 1, url: "https://www.youtube.com/watch?v=LC8iPoZCEok" }, // short
            { weight: 1, url: "https://www.youtube.com/watch?v=TYRico8eNtg" }, // thomas
            { weight: 1, url: "https://www.youtube.com/watch?v=reLjhAAPsPc" }, // all star
            { weight: 1, url: "https://www.youtube.com/watch?v=c1DDBtYqA4U" }, // full
          ],
        },
        // other
        {
          weight: 1,
          children: [
            { weight: 1, url: "https://www.youtube.com/watch?v=UulEsFPhIjY" }, // curious george
            { weight: 1, url: "https://www.youtube.com/watch?v=RrDt9a0q3P0" }, // snurch
            { weight: 1, url: "https://www.youtube.com/watch?v=T-eRJNY-4jI" }, // grundy
            { weight: 1, url: "https://www.youtube.com/watch?v=PIOQWIvdUoM" }, // wigs
            { weight: 1, url: "https://www.youtube.com/watch?v=FPEf7Z-M5vc" }, // wha happen
            { weight: 1, url: "https://www.youtube.com/watch?v=Kf4kqybpkdI" }, // redneck harry
            { weight: 1, url: "https://www.youtube.com/watch?v=CORANvT8l9A" }, // bro country
            { weight: 0.2, url: "https://www.youtube.com/watch?v=VE5JMEu5hZA" }, // rhcp
            { weight: 0.2, url: "https://www.youtube.com/watch?v=dMapmlUwerw" }, // wow its made
          ],
        },
      ],
    },
    // games
    {
      weight: 1,
      children: [
        { weight: 2, url: "https://www.sporcle.com/games/random.php" },
        { weight: 1, url: "https://timeguessr.com/", blocked: true },
        { weight: 1, url: "https://netgames.io/games/onu-werewolf/" },
        { weight: 0.5, url: "https://www.theatlantic.com/games/bracket-city/" },
        { weight: 0.5, url: "https://dles.aukspot.com/" },
        // nyt
        {
          weight: 2,
          children: [
            { weight: 3, url: "https://www.nytimes.com/crosswords/game/daily" },
            { weight: 1, url: "https://www.nytimes.com/crosswords/game/daily/2001/09/11" },
            { weight: 2, url: "https://www.nytimes.com/puzzles/spelling-bee" },
            { weight: 1, url: "https://www.nytimes.com/games/wordle/index.html" },
          ],
        },
      ],
    },
    // other
    {
      weight: 1,
      children: [
        { weight: 1, url: "https://www.nytimes.com/2025/11/04/us/politics/dick-cheney-dead.html" },
        { weight: 1, url: "https://buybears.org/" },
        { weight: 1, url: "https://catgpt.wvd.io/" },
        { weight: 0.2, url: "https://chatgpt.com/share/6975e5f9-823c-8006-8946-462d96363106", blocked: true }, // elon child
        { weight: 1, url: "https://grok.com/share/c2hhcmQtNA_fc92734d-89f3-4019-ae7f-83efd7308dc0", blocked: true }, // altman child
        { weight: 0.2, url: "https://docs.google.com/spreadsheets/d/1A2AAzbg2b2dDJuH3YkFBsYzQy3eNTvXAimUEbTc2cWc/edit?gid=1028301268#gid=1028301268" }, // movie votes
        { weight: 1, url: "https://partiful.com/e/XG5H1zQy2PGelmLwtYr5", blocked: true }, // sock wrestling event
        { weight: 1, url: "https://en.wikipedia.org/wiki/Sock_wrestling" }, // sock wrestling reddit
      ],
    },
    { weight: 1, url: "https://trsigg.github.io/pages/squouch", squouch: true },
    // // template
    // {
    //   weight: 1,
    //   children: [
    //     { weight: 1, url: "" }, // 
    //   ],
    // },
  ],
};
