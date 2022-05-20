var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Xavier",
    sex: "Man",
    age: "28",
    twitter: "@xavier_tjwjd",
    email: "realx.fantastic@gmail.com",
    address: "Netherlands",
    wechat: "FiliusBonacci",
    log: "Xavier",
    excpect_work: "Single",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "「為せば成る、為さねば成らぬ。何事も成らぬは人の為さぬなり」",
        "「やってみせ、言って聞かせて、させてみせ、褒めてやらねば人は動かじ」",
        "「是非に及ばず」",
        "「面白きこともなき世を面白く住みなすものは心なりけり」",
        "「夢なき者に成功なし」",
        "「精神的に向上心のない者は馬鹿だ」",
        "「未来が其の胸中に在る者　之を青年と云う　過去が其の胸中に在る者　之を老年と云う」",
        "「失敗の責任は主君に、成功の功績は家臣に」",
        "「おこないはおれのもの。批判は他人のもの、おれの知ったことじゃない」",
        "「丸くとも一かどあれや　人心　あまりまろきはころびやすきぞ」",
        "「私がしているのは決して大きなことではないが、必要なことなのだ」",
        "「世界全体が幸福にならないかぎりは、個人の幸福はありえない」",
        "「弱虫は、幸福をさえおそれるものです。綿で怪我するんです。幸福に傷つけられる事もあるんです」",
        "「この世に客に来たと思えば何の苦もなし」",
        "「背伸びして視野をひろげているうち、背が伸びてしまうこともあり得る。それが人生の面白さである」",
        "「千日の稽古をもって鍛となし、万日の稽古をもって錬となす」"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "If you read my bio, you might want know me, <br>" +
             "why don't we have a chat, <br>" +
             "we gonna know each other more.",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>I'm a web2 and web3 developer, </p>" +
        "<p>not an expert investor, </p>" +
        "<p>and I'm trying to learn Japanese.</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Web2 develop", 80, "green"],
        ["Web3 develop", 40, "blue"],
        ["Invest", 20, "#1abc9c"],
        ["Japanese", 30, "rgba(0,0,0)"],
        ["Discord operation", 50, "yellow"],
        ["Drink", 100, "red"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>One-stop construction of domain names, servers, and website frameworks.</li>" +
        "     <li>Discord community operation.</li>" +
        "     <li>There is no end to the continuous study of Japanese. . .</li>" +
        "     <li>Investing in continuous learning has no end. . .</li>" +
        "     <li>I could keep drinking all night long without end. . .</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "智能人机对战五子棋", "采用C++编写的智能五子棋人机对战<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2021-03-27", "Invest", "Invested in blockchain."],
        ["2021-05-30", "Invest", "Invested in ENS。"],
        ["2021-05-31", "Invest", "Invested in NFTs。"],
        ["2022-05-20", "web2", "https://서정.xyz/ Officially online."]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}