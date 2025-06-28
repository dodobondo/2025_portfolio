// /src/data/works.ts

import type { Work } from '../types/work';

// Apps作品
export const works: Work[] = [
    {
      id: 1,
      title: '企画アシスタントBot',
      category: '#Discord Bot',
      thumbnailUrl: 'apps_img/dis_bot.jpg',
      detailImageUrls: ['apps_img/dis_bot.jpg'], 
      summary: '私が考案した「謎解き×既存のゲーム」のエンタメ企画を自動で進行してくれるDiscordのbotです。',
      description: '私が考案した「謎解き×既存のゲーム」のエンタメ企画を自動で進行してくれるDiscordのbotです。\n既存のゲームとは「大乱闘スマッシュブラザーズ」という任天堂Switchの対戦ゲームを指します。プレイヤーはDiscord上で正解のキーワードを入力して新たな画像やチャンネル権限などを取得し、それを見てゲーム内のキャラクターを操作しながら謎を解き進めます。\n\nこのゲームのプロチーム所属の方やYoutube活動者の方に企画を遊んでいただき、そのうちの1つが10万再生を突破しました。',
      tools: ['Python', 'Discord API'],
      youtubeUrl: 'https://www.youtube.com/watch?v=9RTGRhhiy2c', 
    },
    {
      id: 2,
      title: 'プチ約束',
      category: '#LINE Application',
      thumbnailUrl: 'apps_img/puchi.jpg',
      detailImageUrls: ['apps_img/puchi.jpg', 'apps_img/puchi_make.jpg', 'apps_img/puchi_act.jpg'], 
      summary: 'ハッカソンで作成した、日常にある口約束を気軽に結び管理するアプリです。デザイン・アプリ設計を行いました。',
      description: 'ハッカソンで作成した、日常にある口約束を気軽に結び管理するアプリです。デザイン・アプリ設計を行いました。\n気軽に約束を結べるように「かわいく親しみやすいUI設計」「約束管理のフロー単純化」「LINE上で動作するアプリ開発」を採用しました。WebアプリをNext.jsで開発し、LIFFと呼ばれるフレームワークを使用してLINEとの連携を実現しています。\n\n2025年3月に外資就活ハッカソンが開催したEngineer Guild Hackathon（全45チーム・188名参加）にて3位入賞しました。',
      tools: ['Figma', 'Adobe Illustrator', 'Yamada UI'],
      youtubeUrl: 'https://www.youtube.com/watch?v=9RTGRhhiy2c',
  },
  {
    id: 3,
    title: 'ポートフォリオ',
    category: '#Web Application',
    thumbnailUrl: 'apps_img/portfolio.jpg',
    detailImageUrls: ['apps_img/portfolio.jpg'],
    summary: '今ご覧になっているWebサイトです。内容をすっきりとまとめながらも、柔らかい雰囲気を演出しています。',
    description: '今ご覧になっているWebサイトです。内容をすっきりとまとめながらも、楽しげな雰囲気を演出しています。\nページトップ画面では海と島のアニメーションを配置し、海に潜っていくような感覚で下にスクロールして先へ進むようなデザインにしました。アニメーションはAffter Effectsで作成しています。\n\nNext.js + Chakra UIで開発してVercelでデプロイしており、レスポンシブデザインやダークテーマ対応も実装しています。',
    tools: ['Next.js', 'Chakra UI', 'Adobe Illustrator', 'After Effects'],
    websiteUrl: 'https://mezaray.jp/index.html', 
  },
  {
    id: 4,
    title: 'フォントカスタマイズ実験システム',
    category: '#Web Application',
    thumbnailUrl: 'apps_img/custom_sys.jpg',
    detailImageUrls: ['apps_img/custom_sys.jpg', 'apps_img/custom_sys_2.jpg', 'apps_img/custom_sys_3.jpg'], 
    summary: '読み書き障害を持つ人々の支援を目標に東京科学大学と共同研究をしており、その一環で開発しました。',
    description: '読み書き障害を持つ人々の支援を目標に東京科学大学と共同研究をしており、その一環で開発しました。\nユーザが既存のフォントをカスタマイズし、そのフォントの有用性を検証する実験までの流れを1つのWebアプリケーションで行いました。\nフロントエンドはVue.js+Tailwind CSSで開発しました。バックエンドではPythonで書けるFast APIを使用し、PostgreSQLのデータベースに接続しています。',
    tools: ['Vue.js', 'Tailwind CSS','FastAPI', 'PostgreSQL', 'Docker'], 
  },

];

// Graphics作品
export const graphicsClub = [
  { id: 1, src: 'graphics_img/club/realize.jpg', alt: '作品1', },
  { id: 2, src: 'graphics_img/club/bomb.jpg', alt: '作品2', },
  { id: 3, src: 'graphics_img/club/dissolve.jpeg', alt: '作品3', },
  { id: 4, src: 'graphics_img/club/exam.jpg', alt: '作品4', },
  { id: 5, src: 'graphics_img/club/cinema.jpg', alt: '作品5', },
  { id: 6, src: 'graphics_img/club/realize.jpg', alt: '作品1', },
  { id: 7, src: 'graphics_img/club/bomb.jpg', alt: '作品2', },
  { id: 8, src: 'graphics_img/club/dissolve.jpeg', alt: '作品3', },
  { id: 9, src: 'graphics_img/club/exam.jpg', alt: '作品4',},
];

export const graphicsHobby = [
  {
    id: 1,
    src: 'graphics_img/hobby/sniper.jpg',
    alt: '作品1',
    link: 'https://x.com/Konsattu_Ganon/status/1893254418981876150'
  },
  {
    id: 2,
    src: 'graphics_img/hobby/parasor.jpg',
    alt: '作品2',
    link: 'https://x.com/Konsattu_Ganon/status/1908486022364606757'
  },
  {
    id: 3,
    src: 'graphics_img/hobby/poison.jpg',
    alt: '作品3',
    link: 'https://x.com/Konsattu_Ganon/status/1779103665758093436'
  },
  {
    id: 4,
    src: 'graphics_img/hobby/wolf.jpg',
    alt: '作品4',
    link: 'https://youtu.be/QlBqV1EQr-w?si=auWiSPm-otWjnZsh&t=21',
  },
  {
    id: 5,
    src: 'graphics_img/hobby/souryoku.jpg',
    alt: '作品5',
    link: 'https://youtu.be/9RTGRhhiy2c?si=ENM7U3jBYgkKdx3T&t=15',
  },
  {
    id: 6,
    src: 'graphics_img/hobby/sniper.jpg',
    alt: '作品1',
    link: 'https://x.com/Konsattu_Ganon/status/1893254418981876150'
  },
  {
    id: 7,
    src: 'graphics_img/hobby/parasor.jpg',
    alt: '作品2',
    link: 'https://x.com/Konsattu_Ganon/status/1908486022364606757'
  },
  {
    id: 8,
    src: 'graphics_img/hobby/poison.jpg',
    alt: '作品3',
    link: 'https://x.com/Konsattu_Ganon/status/1779103665758093436'
  },
  {
    id: 9,
    src: 'graphics_img/hobby/wolf.jpg',
    alt: '作品4',
    link: 'https://youtu.be/QlBqV1EQr-w?si=auWiSPm-otWjnZsh&t=21',
  },
  {
    id: 10,
    src: 'graphics_img/hobby/souryoku.jpg',
    alt: '作品5',
    link: 'https://youtu.be/9RTGRhhiy2c?si=ENM7U3jBYgkKdx3T&t=15',
  },
];