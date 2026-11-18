import fs from 'node:fs';
const PUBLIC='https://eucagit.github.io/Cici-Wang-Site/';
const TOPICS=[
['卖房前，哪些投入值得优先做？','Which improvements deserve priority before selling?','预算与准备','Prioritizing preparation'],
['如何选择真正可比的近期成交？','How do you choose genuinely comparable sales?','本地可比成交','Local comparable sales'],
['为居家办公挑选合适的空间','Choosing a home that supports focused work','远程办公需求','Working from home'],
['看房时，采光与动线应该怎么观察？','Reading light and flow during a home tour','空间与日常生活','Space and daily life'],
['从通勤节奏开始，梳理下一套家的需求','Start your next-home search with your commute','家庭需求清单','Your household brief'],
['卖房时间表，如何留出合理准备空间？','Building a realistic home-selling timeline','销售准备时间表','A preparation timeline'],
['维护、修缮与 staging，如何安排优先级？','Maintenance, repairs, and staging: setting priorities','维护与呈现','Care and presentation'],
['线上估值之外，还需要了解什么？','What should you consider beyond an online estimate?','价格区间与假设','Value ranges and assumptions'],
['为成长中的家庭保留空间弹性','Planning flexible space for a growing household','长期使用需求','Long-term flexibility'],
['一次有效的卖房咨询，需要准备什么？','What to bring to a productive selling consultation','材料与沟通','Documents and conversation'],
['从房屋照片到实地参观，怎样看细节？','From listing photos to an in-person visit','房屋信息核对','Verifying property details'],
['买卖衔接时，先梳理哪些问题？','What to clarify when buying and selling overlap','时间与选择','Timing and options']
];
const AREAS=['Los Altos','Palo Alto','Mountain View','Peninsula'];
function draft(date){const day=Math.floor(Date.parse(date+'T12:00:00Z')/86400000);const t=TOPICS[(day%TOPICS.length+TOPICS.length)%TOPICS.length],area=AREAS[Math.floor(day/TOPICS.length)%AREAS.length];return {id:date,created:date,status:'draft',title_zh:area+'｜'+t[0],title_en:area+': '+t[1],summary_zh:'从'+t[2]+'出发，把房产决策放回你的目标、预算与日常生活。',summary_en:'A practical conversation about '+t[3].toLowerCase()+', grounded in your goals, budget, and everyday life.',body_zh:`在 ${area} 考虑买房或卖房时，可以先把目标写清楚：你希望解决什么问题，准备投入多少时间和预算，以及哪些条件对家庭最重要。\n\n先定义需求，再讨论选择\n${t[2]}需要结合具体房屋与家庭情况来讨论。列出必须满足的需求、可以协商的条件和暂时未知的问题，有助于把下一次咨询变得更有效率。\n\n让信息有来源，让假设更清楚\n核对房屋资料时，关注记录的时间、面积、房屋状况与具体位置。市场数据和挂牌状态会变化，涉及数字的判断，应通过最新来源与经纪人进一步确认。\n\n让每一分投入围绕你的目标\n设计、维护、修缮、布置与营销应当有明确的优先级。先确认范围和费用，再决定是否执行；不必因为别人做了某项投入，就认为它适合你的房屋。\n\n与 CiCi 聊聊你的下一步\n用心服务每一个家，让每一次交易、每一分投入，都创造更大的价值。CiCi 可以与你梳理具体情况、讨论本地可比房源和适合你的准备计划。本文为一般性信息，不代替法律、税务或正式估价意见。`,body_en:`When considering a purchase or sale in ${area}, start with your goals: the problem you want to solve, the time and budget you can commit, and the conditions that matter most to your household.\n\nDefine the brief before comparing options\n${t[3]} should be considered in the context of the specific home and household. Separate essential needs, flexible preferences, and unanswered questions to make your next consultation more productive.\n\nKeep sources and assumptions clear\nCheck the date, size, condition, and precise location behind property information. Market figures and listing status change. Numerical conclusions should be checked against current sources and discussed with your agent.\n\nGive every investment a purpose\nDesign, maintenance, repairs, staging, and marketing deserve a clear order of priorities. Confirm scope and cost before proceeding. An improvement that worked for another home may not suit yours.\n\nTalk through your next step with CiCi\nThoughtful care for every home, and a focus on creating greater value from every decision and investment. CiCi can help clarify your situation, discuss local comparable properties, and plan practical preparation. This article offers general information, not legal, tax, or formal appraisal advice.`,keywords:area+', real estate, CiCi Wang',sources:[PUBLIC+'portfolio/','https://www.mlslistings.com/FindAnAgent/Profile/02039658']}}

const date=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const idea=draft(date);fs.mkdirSync('data',{recursive:true});fs.writeFileSync('data/daily-idea.json',JSON.stringify(idea,null,2)+'\n');console.log(JSON.stringify({id:idea.id,title:idea.title_zh,status:idea.status}));
