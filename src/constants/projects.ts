interface ProjItem {
  title: string
  description: string
  screenshot: string
  repo: string
  live: string
  notion:string
}

export const projects: Array<ProjItem> = [
  {
    title: "Artconnect",
    description:
      "A Ruby on Rails API and ReactJS application for art commissions",
    screenshot: "/artconnect-1.png",
    repo: "https://github.com/michelle-santiago/artconnect",
    live: "https://artconnect.vercel.app/",
    notion: "https://michellesantiago.notion.site/michellesantiago/Artconnect-e9866ffef8c6464daf6240cb6afb8e55"
  },
  {
    title: "Xchange",
    description:
      "A Ruby on Rails where registered users can buy and sell stocks",
    screenshot: "/xchange-4.png",
    repo: "https://github.com/mishel-bit/xchange-stock",
    live: "https://xchange-lqn1.onrender.com/",
    notion: "https://michellesantiago.notion.site/michellesantiago/Xchange-ec823bbf7f594839a916a79efcb17d32"
  },
  {
    title: "Sloth",
    description:
      "A Slack App Clone made with ReactJS",
    screenshot: "/sloth-1.png",
    repo: "https://github.com/michelle-santiago/sloth",
    live: "https://sloth-three.vercel.app/",
    notion: "https://michellesantiago.notion.site/michellesantiago/Sloth-1fdaec2985194b36aa5f1b2cef8a1d8e"
  },
  {
    title: "Magrow",
    description:
      "An application where users can plan their daily tasks per crop and manage their harvest expenses and yield.",
    screenshot: "/magrow-4.png",
    repo: "https://github.com/michelle-santiago/magrow",
    live: "https://magrowproject.000webhostapp.com/",
    notion: "https://michellesantiago.notion.site/michellesantiago/Magrow-68da71e7ac5741fcb314e90872aa53f4"
  },
  {
    title: "Taho Klasiko",
    description:
      "A product landing page for taho klasiko",
    screenshot: "/taho-1.png",
    repo: "https://github.com/michelle-santiago/product-landing-page",
    live: "https://michelle-santiago.github.io/product-landing-page/",
    notion: ""
  },
  {
    title: "Survey Music",
    description:
      "A survey form made with HTML and CSS",
    screenshot: "/surveymusic-1.png",
    repo: "https://github.com/michelle-santiago/survey-form",
    live: "https://michelle-santiago.github.io/survey-form/",
    notion: ""
  },
]