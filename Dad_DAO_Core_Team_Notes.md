# Dad DAO Core Team Notes

# Weekly Logs

## 11/15/2021
1. ~~Mint Weekly NFT inspired by someone in the community (they decide asset supply, title, and description)~~
    
    Wayne's NFT was minted (10 of 10 supply | awaiting distribution)
    [https://ab2.gallery/asset/420830621](https://ab2.gallery/asset/420830621)
    
2. ~~Make website listing Algorand ecosystem information (how to create a wallet, active apps, future apps, etc.)~~
    
    See 'Algorand Ecosystem Links' folder near top of the channel
    [https://oroalej.github.io/intothealgoverse/#/dapps](https://oroalej.github.io/intothealgoverse/#/dapps)
    
3. ~~Educate more about NFT tooling~~
where do you view NFTs?
    
    [https://www.nftexplorer.app/](https://www.nftexplorer.app/)
    NFT marketplaces
    
    [https://www.randgallery.com/algo-collection/](https://www.randgallery.com/algo-collection/)[https://ab2.gallery/](https://ab2.gallery/)[https://algogems.io/](https://algogems.io/)
    
    tooling for NFT creation
    [https://app.pinata.cloud/](https://app.pinata.cloud/)[https://app.algodesk.io/](https://app.algodesk.io/)
    
4. Create a NFT specifically for an early 'Algorand DAO' members that will be their access token for participation in the DAO.

5. Organize 'Working Group' Team Alpha to create and release it.

6. Get Minting Address 'Verified' on all NFT marketplaces

7. Brainstorm DAO structure and incentives diagram more and get community feedback

8. Airdrop Algorand DAO role-specific NFTs

9. DAO Creation - this requires op codes and technical expertise
    1. [https://forum.algorand.org/t/algorand-dao-dapp/4112](https://forum.algorand.org/t/algorand-dao-dapp/4112)
    2. [https://paper.dropbox.com/published/Algo-DAO-NHCUuja9nA59IvlFuT2HsRj](https://paper.dropbox.com/published/Algo-DAO-NHCUuja9nA59IvlFuT2HsRj)
    3. [https://medium.com/1kxnetwork/organization-legos-the-state-of-dao-tooling-866b6879e93e](https://medium.com/1kxnetwork/organization-legos-the-state-of-dao-tooling-866b6879e93e)
10. Algo DAO Tooling Landscape **([https://www.algorand.com/ecosystem](https://www.algorand.com/ecosystem))**
    1. Frameworks - 
    
    ![](https://i.imgur.com/3Zuzl0o.png)

    
    1. Treasury Management - 
    
    ![](https://i.imgur.com/ASgjkkQ.png)

    
    1. Knowledge Management - **[We will use Notion](https://www.notion.so/DAD-DAO-Roadmap-68e4d64cb092499da6862588b27d01a0)**
    2. Contribution & Reputation 
    3. Content/Product Governance & Voting -  
    4. Discussion
    5. Frontend & Analytics
    6. Compensation
    7. Access
    8. Identity
    
11. Get more 'Working Groups' involved in suggesting future projects

12. Figure out funding
    1. 18,000 USDCa from ALGO Contract - 400USDCa/mo (server costs)  = 15,600 USDCa potentially to use for funding
    2. Algorand Foundation Grants ([https://algorand.foundation/developers/developer-incentive-awards-program](https://algorand.foundation/developers/developer-incentive-awards-program))
        1. Infra (standing up DAO itself)
        2. Apps (working groups - Project: Longevity can get funded by Medical Recording Application under Developer Incentives)
        3. Community
    
    ![](https://i.imgur.com/FdBp76T.png)
    
13. Amount of TBP Coffers to kickstart DAO Treasury/DAO itself

14. Slack investors for 'Seed Investor' category (must be active member of a 'Working Group')

15. Decide as a community what Algorand DAO NFTs entitle you to do/reward from

## 11/22/2021 
- Created artwork assets based on Dad theme. Built out Discord Server over a few days with various different roles/permissions and played around with existing Discord Bots.
## 11/29/2021 
- Tried to look for options deploying whole collection on Solana and found Grape as well as Metaplex, Candy Machine, etc. Ran into fee issues of $4k to mint 10k assets plus cannot control role/permissions except through Grape protocol. Transaction fees will be an issue on Solana. Ran into issue with not knowing how Solana smart contracts work and using Rust language in order to deploy a friend's smart contract that doesn't deploy full program on-chain and basically listens to web app mint call then mints from minting/escrow account on the fly from back-end on a $15/mo VPS. Custom RPC service necessary $9/mo for Solana via Quicknode.
## 12/06/2021 
- Test minted a few different NFTs using Pinata and Algodesk. Played around with Sandbox to try to understand how smart contracts worked and were limited. Could not get Indexer to run. Started tidying up Discord server using embeds and redoing role control via emojis again in embeds as well as learning how to write a custom Discord Bot to facilitate reading from back-end based on application call to blockchain to verify existence of NFT id at wallet. Attention was diverted from this to work on understanding of how DAD DAO NFT would/if possible be able to control treasury value flow at L1 protocol level.
## 12/13/2021 
- Worked on Dad DAO business logic as well as NFT mint business logic. Learning and collecting information re: DAOs in crypto from a zoomed out perspective to see what has been done before and how it has been implemented. Collected information for core team meeting and community meeting. Looked at various Algorand products to see what it "feels" like to interact with various NFT trading platforms, early DeFi protocols, and AMM. Need to organize costs denoted in ALGO of everything as well as detail limitations of addresses storing NFTs, and running smart contracts from.


## 12/20/2021

- Summary of linked YC Videos Michael put in core team chat and my thoughts (Jessie) https://hackmd.io/@Broke/H1Ib5rp9K
- Go over HackMD doc to go over thoughts at the end
- Prototypical Startup Distribution of Equity
    - [https://alcor-bpo.com/legal-compliance-news/how-shares-should-be-allocated-among-startup-founders/#:~:text=As a rule%2C independent startup,have over 60% in total](https://alcor-bpo.com/legal-compliance-news/how-shares-should-be-allocated-among-startup-founders/#:~:text=As%20a%20rule%2C%20independent%20startup,have%20over%2060%25%20in%20total).
    - [https://www.svb.com/startup-insights/startup-equity/how-to-divide-equity-in-a-startup#:~:text=If a key hire is,2%%2C depending on experience](https://www.svb.com/startup-insights/startup-equity/how-to-divide-equity-in-a-startup#:~:text=If%20a%20key%20hire%20is,2%25%2C%20depending%20on%20experience).
    - “**Timing trumps seniority and experience”**
    - Advisors typically get between 0.1-0.3% equity
    - Founders typically get 80% split in pre-agreed ways
    - Employee Options Pool
        - [https://www.quora.com/What-are-the-typical-amounts-of-equity-offered-to-engineers-by-startups-of-different-sizes-Specifically-data-for-startups-with-10-20-30-40-50-100-200-500-and-1-000-employees](https://www.quora.com/What-are-the-typical-amounts-of-equity-offered-to-engineers-by-startups-of-different-sizes-Specifically-data-for-startups-with-10-20-30-40-50-100-200-500-and-1-000-employees)
    
    ![](https://i.imgur.com/psGrI9L.png)

    ![](https://i.imgur.com/xtjvXIV.png)

    ![](https://i.imgur.com/gej0Scp.png)

- Consider separating Phase 1 distribution (standing up DAO product) and Phase 2 distribution (new distribution for working groups to compete for value after founder/core team has been dissolved)
- If we take on VC money, consider dilution at different valuation rounds: [https://dri.es/founder-dilution](https://dri.es/founder-dilution)
- Get equity settled, LLC started and signed (figure out what mixture of stock, options, etc. if we go that route)
    - [clerky.com](http://clerky.com/)
    - [https://stripe.com/atlas?utm_campaign=US_en_Search_Brand_Atlas-Core_EXA-15382058583&utm_medium=cpc&utm_source=google&ad_content=564619879368&utm_term=kwd-333945019140&utm_matchtype=e&utm_adposition=&utm_device=c](https://stripe.com/atlas?utm_campaign=US_en_Search_Brand_Atlas-Core_EXA-15382058583&utm_medium=cpc&utm_source=google&ad_content=564619879368&utm_term=kwd-333945019140&utm_matchtype=e&utm_adposition=&utm_device=c)

- Take a look at typical DAO distributions
    - [https://docs.grapes.network/tokenomics/overview](https://docs.grapes.network/tokenomics/overview)
    - [https://foundation.app/blog/pleasrdao](https://foundation.app/blog/pleasrdao)
    - [https://partyround.com/](https://partyround.com/)
    - [https://client.aragon.org/#/brightid.aragonid.eth](https://client.aragon.org/#/brightid.aragonid.eth)
    - [https://krausehouse.club/](https://krausehouse.club/)
    - [https://www.kleoverse.com/](https://www.kleoverse.com/)
    - [https://genesysgo.com/](https://genesysgo.com/)
    - [https://monkedao.io/](https://monkedao.io/)
    - [https://www.shadowysupercoderdao.com/#/](https://www.shadowysupercoderdao.com/#/)
        - [https://decrypt.co/79422/shadowy-super-coder-pack-315m-perks-ethereum-nft-devs](https://decrypt.co/79422/shadowy-super-coder-pack-315m-perks-ethereum-nft-devs)
    - [https://forum.algorand.org/t/algorand-dao-dapp/4112](https://forum.algorand.org/t/algorand-dao-dapp/4112)
        - [https://algobuilder.dev/](https://algobuilder.dev/)
    - [https://algorand.foundation/news/fortior-grant-award](https://algorand.foundation/news/fortior-grant-award)
    - [https://www.algorand.com/ecosystem/use-cases/staker-dao](https://www.algorand.com/ecosystem/use-cases/staker-dao)
    - [https://www.reddit.com/r/AlgorandOfficial/comments/r10nxq/any_incoming_dao_projects_on_algorand/](https://www.reddit.com/r/AlgorandOfficial/comments/r10nxq/any_incoming_dao_projects_on_algorand/)
    - [https://www.reddit.com/r/ethereum/comments/r4d383/top_4_most_interesting_daos_on_the_ethereum/](https://www.reddit.com/r/ethereum/comments/r4d383/top_4_most_interesting_daos_on_the_ethereum/)
- Time box the lean MVP and further details
- Work with Michael on NFT minter on testnet
- Modify artwork
- Start communicating project so we have an audience ready for NFT MVP delivery]

## 12/27/2021
What is a Dad?

If you look up the definition of a "dad" or father, it is simply a biological male who has produced offspring. But when we think beyond that in terms of what it means to be a "dad", it goes beyond the biological definition of the word. A dad is someone who is there for his family. A dad watches and actively participates in their lives. A dad helps them grow up, raises them, nurtures them, attends dance recitals and baseball games and is present. And if we can all agree on that, well maybe we can just think of a "dad" as simply someone who was there for us when we needed to be cared for most. Someone who was a "dad" to us might have actually been our step dad, single mom, mentor/teacher, or even a good friend... In Dad DAO, a "Dad" is someone who deliberately chose and continues to choose to go beyond their abilities and comfort zone in order to shoulder more and more responsibilities associated with learning to care for their family.

What is the Dad DAO?

The Dad DAO is a paid community of people interested in working together on crypto things. Our home is made up of beginners, hobbyists, and professionals alike trying to create an environment that serves as a "safe spawn" for everyone to learn and build things away from the "noise" that runs rampant in the crypto space. We want to understand and be objective about the tools available to us in this space as we collectively discover and build projects using the blockchains that are most specific to the use-case of our applications. Our goal is to create an environment where people can be rewarded to learn and work on things that are important to them in everyday life and ultimately to us all. Dad DAO will serve as a creator and aggregator of the best free and accessible learning resources, a DApp incubator, and a community "pension plan".

Talk about Learning Hub

The Learning Hub is a category of linked resources and YT videos/playlists within text-channels in our Discord that will be continuously added to as a collection of curated resources and tools we used to get up and running as new artists, new developers, et al. on this NFT project, the DAO, and beyond.

Talk about DApp incubator

The DApp incubator aspect of the DAO can be best described as the return on community investment from DApps proposals approved by the majority of the community then created by the same community members. Greenlit project proposals by the community will receive early funding from the DAO treasury and the treasury will be compensated by receiving a percentage of equity in the tokens that underpin the newly created DApp project. In this way, the community as a whole can hope to see a return on the social and material capital we invest in the vision of teams assembled by our community members.
Accountability and support from the community can give people the necessary motivation and push within our autonomous framework to accelerate getting the community paid to team up and build cool things with other like-minded people.

Collective Pension Plan

The community members who participate actively will be further incentivized to do so by being allowed to stake their DAD DAO token earnings to receive either enhance their DApp by turning it into its own SAAS model and receive...

What does being in the DAD DAO look like?

You decide your own journey just like a RPG. You buy the DAD DAO NFT which gives you access to the Discord server. You select a class (role), pick your 3-5 teammates (team/group), submit your proposal outlining a novel DApp (quest), get a 2/3 majority community approval (guild), get your starter funds and resources (starting gold, sword and shield, etc.), then go onto completing your project (quest) with your team and turn it in for your rewards (upgraded guild status and loot drop of higher tier gear).

more than just a product or service in crypto. We want a living and breathing community of people from different backgrounds and walks of life who are just beginning to learn about crypto because their kids told them at Thanksgiving, hobbyists who have had their fill of doing more than perusing crypto subreddits for the latest news headlines to correlate with price movements, enthusiasts who speculate from deep in the weeds of the latest yield farming project and its +100,000% APR returns or the latest and greatest NFT projects that have it all wrapped into one with a monkey or animal-inspired NFT that mixes up all the different flavors of DeFi wrapped into one.

What does the DAD DAO NFT Token do?

The Token itself simply gives access to the Dad DAO Discord in its current state for now. The goal will be to give the Token holders the ability to participate in 'Working Groups' as soon as the DAO is finished being built.

Who is involved?
Guys from The Bitcoin Podcast

What is the background of it?
Jessie was working on a health and fitness DApp and realized there were many learning barriers and there wasn't a well-worn path for people to work together to solve real use-cases on the latest chains.

What are future plans of it?

How is this beneficial to me?

What does it cost for me to be involved or to buy it or how much the product costs?
It will cost $50 to mint the Dad DAO NFT plus transaction fees. Proceeds will go toward building the fully autonomous Dad DAO smart contract framework.

Is this a want or a need?

This is not a need and more of a want.

Benefits?
Discord Access
DAD DAO Voting Rights
DAD DAO Treasury Access
DAD DAO Incubator
DAD DAO Pension Plan

Potential negatives?

The secondary market of the NFT could tank and the value of the NFT in USD could decrease over time.

What company am I buying from?

# Ideas

## NFT Permissions

1. Setup permissioned NFT access for:
    - Discord server (auction off on a platform like algogems.io)
    - roles (you must purchase the NFT role that corresponds to your choice in Discord - you can change your role as long as you have the NFT to validate the role change)
    - working group
    - community bulletin board (shows projects and bounties associated w/ each project and their expected completion timelines(?) - subject to time extensions)
    - project proposed w/ token amount
    - DAD DAO KPI Structure (Key Performance Indicator)

12. Sales & Marketing
    - Revenue per NFT Sale
    - VCs/DAOs contacted per Time Period
    - VCs/DAOs closed per Time Period
    - Staked Asset Total per Token (% of rewards from staking network go to buying $DAD)

3. Operations
    - Empty

4. Finance
    - Seed Investor per Working Group
    - Product Sales per Working Group
    - Service Sales per Working Group


# Important Documents

## DAO Constitution
### https://hackmd.io/@Broke/B1vFkPb_F

## DAD DAO Miro
### https://miro.com/app/board/o9J_lil83C4=/

## Discord NFT-As-Access
### https://hackmd.io/@Broke/BkOKdj2nY

## Discord Early Mint Instructions
### https://hackmd.io/@Broke/SJibq2hhY

Tokenomics

20% - Distribution to Team (1-year cliff, 4-yr vesting period)
[Insert some arbitrary amount of early money access 3-month cliff per month or per quarter to live on]