const textConfig = {
  landing: {
    title: "Hey Jigglypuff! 💕",
    subtitle: "I Wanted to do something special for you, so I made something special just for you...",
    lastLine: "Click below to see what it is! ✨",
    button: "Open My Heart 💖",
    footer: "Made with love, only for you 💕",
    },
    landing: {
      title: "Happy New Year 2026! 🎉",
      subtitle: "Wishing you joy, success, and endless happiness in the coming year!",
      lastLine: "Click below to start your New Year journey! ✨",
      button: "Begin Celebration 🎊",
      footer: "Cheers to a wonderful 2026! 🎉",
    },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "Ek Pyaar Bhara Letter 💌",
    headerSubtitle: "Mere dil se tumhare liye",
    letterHeaderTitle: "Meri pyaari Vaishnavi",
    letterMessage: `Meri pyaari Vaishnavi Madam,

  Har pal tumhare saath ek khubsurat sapna lagta hai jisse main kabhi jagna nahi chahta.
  Tum meri zindagi ki sabse keemti ho. Har din tumhare saath ek tohfa hai, aur main har lamha ke liye shukar guzar hoon. Tum mujhe behtar insaan banne ke liye prerit karti ho.
  Tumhari hasi, tumhari baatein, aur tumhara saath mere liye sab kuch hai.

  Hamesha tumhara,
  `,
    letterSignature: "Hamesha tumhara 💕",
    envelopeClickHint: "Envelope kholne ke liye click karo",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Aage Dekhne ke liye Continue ✨"
    },
    letter: {
      headerTitle: "A New Year Letter 💌",
      headerSubtitle: "Warm wishes for 2026",
      letterHeaderTitle: "my laddo",
      letterMessage: `Hey my everything,

    I just want you to know how important you are to me. Kabhi kabhi main zyada express nahi kar pata, but my feelings for you are always real and constant. Tum mere liye sirf ek person nahi ho, tum mera comfort ho, mera sukoon ho.

    If you’re ever tired, upset, or quiet, remember you don’t have to face it alone. Main hoon, hamesha. No explanations needed, no pressure — bas saath.

    Your smile matters to me more than you think. And I’ll always care for you, no matter what.

    Yours,
    Mohit 🤍`,
      letterSignature: "Yours, Mohit 🤍",
      envelopeClickHint: "Click to open your New Year wish",
      specialDeliveryText: "Special Delivery 🎉",
      continueButton: "Continue To Celebrate ✨"
    },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "If the world was ending", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
    },
    chillZone: {
      heading: "New Year Playlist",
      subheading: "Celebrate with these festive tracks!",
      chooseTrackHint: "Choose a song to start the party ✨",
      continueButton: "Continue to Next ✨",
      tracks: [
        { id: 1, title: "Happy New Year - ABBA", caption: "Classic vibes for a fresh start! 🎊" },
        { id: 2, title: "Auld Lang Syne", caption: "Remember the good times and friends! 🎉" },
        { id: 3, title: "Firework - Katy Perry", caption: "Shine bright in 2026! 🎉" }
      ]
    },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite kind of memory — the one that makes me smile without even realizing it. 💖",
      "I did like you and i still respect what you said about being good friends. ✨",
      "The little things you do — your expressions, your laughter, the way you talk — they've all become my favorite details. 🌸"
    ]
    },
    cards: {
      heading: "New Year Wishes",
      subheading: "Tap each card for a special New Year message!",
      tapLabel: "✨ Tap!",
      progress: {
        start: "Start by tapping any card above ✨",
        discovered: (n, total) => `${n} of ${total} wishes discovered! Keep celebrating! 🎉`,
        complete: "Awesome! You've revealed all the wishes! 🎊"
      },
      popup: {
        title: "All Wishes Unlocked!",
        message: "May every wish come true for you in 2026! ✨",
        openFinal: "Open the Final Letter 💌",
        stay: "Stay and celebrate more!"
      },
      cardMessages: [
        "May your year be filled with new hopes, new joy, and new beginnings! 🎉",
        "Wishing you health, wealth, and happiness in 2026! 🎊",
        "May every day sparkle with positivity and love! 🎉"
      ]
    },

  finalLetter: {
    title: "Aakhri Pyaar Bhara Letter",
    sealingText: "Tumhara letter seal kar rahe hain...",
    sealButton: "Is Letter ko Seal karo 💌",
    restartButton: "Phir Se Shuru Karo",
    sealedTitle: "Letter Pyaar Se Seal Ho Gaya",
    sealedSubtitle: "Main tumse hamesha pyaar karta hoon",
    typedDefault: "Hamesha tumhara 💕",
    experienceAgain: "Phir Se Anubhav Karo ✨",
    sendKissButton: "Ek Virtual Kiss Bhejo 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "Meri pyaari Vaishnavi Madam,",
    letterParagraphs: [
      "Tum woh sukoon ho jise main har roz dhundta hoon, aur tumhari hasi meri duniya roshan kar deti hai.",
      "Yeh chhoti si duniya tumhe muskuraahat de — aur bata de kitni keemti ho tum mere liye.",
      "Bas kuch hi mahine bache hain... aur main in lamhon ko tumhare bina soch bhi nahi sakta. Main tumse bahut pyaar karta hoon.",
      "Tum har maqam par kamaal ho... aur main chahta hoon ki main hamesha tumhare layak rahoon."
    ],
    sealingNote: "Seal karne se anubhav poora ho jayega."
    },
    finalLetter: {
      title: "Final New Year Wish",
      sealingText: "Sealing your wish...",
      sealButton: "Seal this Wish 🎉",
      restartButton: "Restart",
      sealedTitle: "Wish Sealed for 2026",
      sealedSubtitle: "Wishing You a Wonderful Year!",
      typedDefault: "Happy New Year! 🎊",
      experienceAgain: "Experience Again ✨",
      sendKissButton: "Send a Virtual Hug 🤗",
      dateLocale: "en-US",
      // Letter content
      letterGreeting: "Hey my everything,",
      letterParagraphs: [
        "Some days I don't say much, but please know this — you're always on my mind. Tumhari presence hi kaafi hai to calm my chaos. When life feels heavy, thinking of you makes it a little easier.",
        "If the world ever feels too loud or too hard, come sit with me in silence. No fixing, no questions — bas saath. I don't need you perfect, I just need you.",
        "You matter to me, deeply and honestly. And that's something that will never change.",
        "Always yours, Mohit 🤍"
      ],
      sealingNote: "Sealing will finish the celebration."
    },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
    }
};

export default textConfig;