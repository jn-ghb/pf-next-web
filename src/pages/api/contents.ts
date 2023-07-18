import type { NextApiRequest, NextApiResponse } from "next";
import type { contents } from "../../types/contents";

type Data = {
  contents: contents;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    contents: [
      {
        id: "profile",
        name: "profile",
        thumbnail: "/images/icon/profileIcon.png",
        description:
          "電子書籍のDTPオペレータ、webデザインの仕事などに従事していたが、ゲーム制作の仕事をしたくなり、ブラウザゲームの会社にデザイナー兼コーダーとして就職。フロントのコーディングにハマっていき、デザイナーからフロントエンジニアとなる。直近では広告クリエイティブのコーディング、LP、Vue.jsを使用した動画サービスの開発などに携わりました。",
      },
      {
        id: "works",
        name: "works",
        cards: [
          {
            title: "広告クリエイティブ",
            thumbnail: "/images/works/topThumbnails/0.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/creativeList/0.png",
              "/images/works/modalThumbnails/creativeList/1.png",
              "/images/works/modalThumbnails/creativeList/2.png",
              "/images/works/modalThumbnails/creativeList/3.png",
              "/images/works/modalThumbnails/creativeList/4.png",
            ],
            description:
              "Banner Revolutionプロジェクトにて広告の動的クリエイティブバナーを作成しました。広告を表示する制約上、Jquery以外のライブラリを入れることが出来なかったため、ほぼピュアなjavascriptで実装しました。複雑な構成はejsを使用し、コンポーネント分けをしてコーディングしました。CSSTransition,javascriptに対する理解が深まりました。3年間で約200本のクリエイティブを作成しました。",
            links: [
              {
                title: "Creative List(自分が作ったものの一部まとめ)",
                icon: "link",
                url: "https://jn-ghb.github.io/creative-list/build/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/creative-list",
              },
            ],
            developmentEnvironment: "HTML,CSS,Javascript,ejs(ビルド前)",
          },
          {
            title: "webinar-room",
            thumbnail: "/images/works/topThumbnails/1.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/webinar/0.png",
              "/images/works/modalThumbnails/webinar/1.png",
              "/images/works/modalThumbnails/webinar/2.png",
            ],
            description:
              "ウェビナーの動画サービス、webinar-roomの動画コンポーネント、ランキンページ、LPをメインに実装を行いました。動画部分はhls.jsでストリーミングに対応しました。",
            links: [
              {
                title: "webinar-room",
                icon: "link",
                url: "https://webinar-room.net/",
              },
              {
                title: "webinar-room/lp",
                icon: "link",
                url: "https://webinar-room.net/lp",
              },
              {
                title: "webinar-room/ranking",
                icon: "link",
                url: "https://webinar-room.net/ranking",
              },
            ],
            developmentEnvironment:
              "HTML(Pug),CSS(SASS),Javascript,Vue.js,Nuxt.js,hls.js,Docker",
          },
          {
            title: "僕らの放課後戦争",
            thumbnail: "/images/works/topThumbnails/2.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/sgame/0.png",
              "/images/works/modalThumbnails/sgame/1.png",
              "/images/works/modalThumbnails/sgame/2.png",
            ],
            description:
              "LP,UIのコーディング、Flashアニメーションの繋ぎ込み、バナー制作、イベントページのUIデザインを行いました。",
            links: [
              {
                title: "僕らの放課後戦争",
                icon: "link",
                url: "https://games.dmm.com/detail/houkago/",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,Create.js,Adobe Animate,Flash,Photoshop,Adobe XD,clip studio",
          },
          {
            title: "WEBGL研究開発",
            thumbnail: "/images/works/topThumbnails/6.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/three/0.png",
              "/images/works/modalThumbnails/three/1.png",
            ],
            description:
              "BXDプラットフォームへの提案用にthree.js,WEBGLを使用し、3Dゲームの研究開発を行いました。コーディング、3Dの加工、素材収集などを一人で担当しました。マウスをドラッグすると追従してモデルが動きます。",
            links: [
              {
                title: "WebGLAnimation(PC用)",
                icon: "link",
                url: "https://jn-ghb.github.io/webGLAnimation/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/webGLAnimation",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,three.js,Blender,Photoshop",
          },
          {
            title: "開発中2Dサンドボックスゲーム",
            thumbnail: "/images/works/topThumbnails/7.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/sandbox/0.png",
              "/images/works/modalThumbnails/sandbox/1.png",
              "/images/works/modalThumbnails/sandbox/2.png",
              "/images/works/modalThumbnails/sandbox/3.png",
            ],
            description:
              "マインクラフトの2D風のゲームを開発しています。イラスト、背景、プログラム、音楽を全て一人で作っています。詳しい仕様はgithubに記載しています。",
            links: [
              {
                title: "開発中2Dサンドボックスゲーム(PC用)",
                icon: "link",
                url: "https://jn-ghb.github.io/2dSandboxGame/web/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/2dSandboxGame",
              },
            ],
            developmentEnvironment:
              "Unity,C#,UniRx,inputSystem,photoshop,clips tudio",
          },
          {
            title: "技術研究_ランダムマップ",
            thumbnail: "/images/works/topThumbnails/8.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/randomSheedMap/0.png",
              "/images/works/modalThumbnails/randomSheedMap/1.png",
            ],
            description:
              "React,Redux,Pixi.jsを組み合わせて、ゲームの開発環境を作るために始めたプロジェクトです。リロードするとマップがランダムに変更されます。詳細はgiuhubに記載しています。",
            links: [
              {
                title: "randomSeedMap(PC用)",
                icon: "link",
                url: "https://jn-ghb.github.io/randomSeedMap/build/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/randomSeedMap",
              },
            ],
            developmentEnvironment:
              "HTML,CSS,Javascript,React.js,Redux,Pixi.js",
          },
          {
            title: "ポートフォリオサイト",
            thumbnail: "/images/works/topThumbnails/9.jpg",
            thumbnails: [
              "/images/works/modalThumbnails/pf/0.png",
              "/images/works/modalThumbnails/pf/1.png",
            ],
            description:
              "今まで作った作品をまとめるために作成しました。Next.jsを使用し、デプロイはVercelで行っています。",
            links: [
              {
                title: "ポートフォリオ",
                icon: "link",
                url: "https://n-j-pf.com/",
              },
              {
                title: "gitHub",
                icon: "gitHub",
                url: "https://github.com/iyha-1999/portfolio-next",
              },
            ],
            developmentEnvironment: "HTML,CSS,Javascript,React.js,Next.js",
          },
        ],
      },
    ],
  });
}
