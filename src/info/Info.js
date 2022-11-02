import self from "../img/self.png"
import mock1 from "../img/decarbonizer.jpeg"
import mock2 from "../img/onchain_storage.jpeg"
import mock3 from "../img/P2P-Rent.jpeg"
import mock4 from "../img/goerlifaucet.jpeg"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgba(0,43,54,1)", "#eee8d5"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Metehan",
    lastName: "Caliskan",
    initials: "MC", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Junior Blockchain and Web3 Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'Full Stack Web3 Developer'
        },
        {
            emoji: '🌎',
            text: 'based in Turkey'
        },
        {
            emoji: "📖",
            text: "studying Electrical and Electronic Engineering in Bilkent University"
        },
        {
            emoji: "📧",
            text: "metehancaliskan.38@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://medium.com/@metehancaliskan.38",
            icon: "fa fa-medium"
        },
        {
            link: "https://ipfs.filebase.io/ipfs/QmYaZ361ecZ4WNttWnCFs2nxogMmrf4zCuxWh5tEpLfKUm",
            icon: "fa fa-file"
        },
        {
            link: "https://github.com/metehancaliskan",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/metehan-%C3%A7al%C4%B1%C5%9Fkan-7a088917a/",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/kmetehanclskn",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Metehan. I'm a junior blockchain developer, full-stack web3 developer, and blockchain strategist. I'm an undergraduate student at Bilkent University, Electrical and Electronic Engineering department. I'm a co-founder of the Bilkent Blockchain Community and head of the Bilkent developer team. I have 2 years of experience in web3.",
    skills:
        {
            proficientWith: ['javascript', 'nodejs', 'react', 'solidity', 'git', 'html5', 'css3', 'python', 'flask', 'web3.js', 'sql-nosql-dbs', 'ether.js'],
            exposedTo: ['embedded c', 'assembly', 'VHDL']
        },
    researches: ['zero knowledge proof','complex algorithm','APIs','developer tools'],
    hobbies: [
        {
            label: 'winter sports',
            emoji: '🏂'
        },
        {
            label: 'researching',
            emoji: '📖'
        },
        {
            label: 'water sports',
            emoji: '🤿'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "DeCarbonizer",
            source: "https://github.com/metehancaliskan/DeCarbonizer", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "OnchainStorage",
            source: "https://github.com/metehancaliskan/Onchain_Storage",
            image: mock2
        },
        {
            title: "P2P-Bike-Rent",
            source: "https://github.com/BilkentCrypto/p2p-bike-rental",
            image: mock3
        },
        {
            title: "Goerli Faucet",
            source: "https://github.com/metehancaliskan/eth-goerli-faucet",
            image: mock4
        }
    ]
}