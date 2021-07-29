from app.models import User
from faker import Faker
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

db = SQLAlchemy()
fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    pw = generate_password_hash("$chmenu1nfluencer!")

    DemoUser = User(first_name="Demo",
                    last_name="User", username="demouser",
                    email="demo-user@demodata.com",
                    about="I'm a demo user!",
                    profile_pix="https://i.imgur.com/AalEoSw.png",
                    account_type="Owner", password=pw)
    BobRoss = User(first_name="Bob",
                   last_name="Ross", username="bobross",
                   email="demo-user@demodata.com",
                   about="Life is just a series of happy little accidents.",
                   profile_pix="https://www.ccplonline.org/wp-content/uploads/2020/09/Art-History-Snapshot-Bob-Ross-Cover-Photo.png",
                   account_type="Owner", password=pw)
    DemoLovato = User(first_name="Demo",
                      last_name="Lovato", username="demolovato",
                      email="demo@mcdemoface.com",
                      about="I'm a demo user!",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    DemoMoore = User(first_name="Demo",
                     last_name="Moore", username="demomoore",
                     email="demomoore@mcdemoface.com",
                     about="I'm a demo user!",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Owner", password=pw)
    AdamSandler = User(first_name="Adam",
                       last_name="Sandler", username="HappyMadison",
                       email="adamsandler@hollywood.com",
                       about="I finished a big book the other day. 421 pages. That's a lot of coloring when you think about it.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Owner", password=pw)
    AmyAdams = User(first_name="Amy",
                    last_name="Adams", username="AmyAdams",
                    email="amyadams@hollywoodstar.com",
                    about="The illusion of perfection is an illusion anyway.",
                    profile_pix="https://i.imgur.com/AalEoSw.png",
                    account_type="Owner", password=pw)
    AngelinaJolie = User(first_name="Angelina",
                         last_name="Jolie", username="Angelina",
                         email="angelinajolie@hollywoodstar.com",
                         about="Every day we choose who we are by how we define ourselves.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Owner", password=pw)
    ArnoldSchwarzenegger = User(first_name="Arnold",
                                last_name="Schwarzenegger", username="GetToDaChoppa",
                                email="arnoldschwarzenegger@hollywoodstar.com",
                                about="Hasta la vista, baby",
                                profile_pix="https://i.imgur.com/AalEoSw.png",
                                account_type="Owner", password=pw)
    BenAffleck = User(first_name="Ben",
                      last_name="Affleck", username="ILoveMattDamon",
                      email="benaffleck@hollywoodstar.com",
                      about="Anybody tells you that money is the root of all evil doesn't have any.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Owner", password=pw)
    BenedictCumberbatch = User(first_name="Benedict",
                               last_name="Cumberbatch", username="NotJustSherlock",
                               email="benedictcumberbatch@hollywoodstar.com",
                               about="If you can't fail, you can never get better.",
                               profile_pix="https://i.imgur.com/AalEoSw.png",
                               account_type="Owner", password=pw)
    BruceWillis = User(first_name="Bruce",
                       last_name="Willis", username="YipeeKiYay",
                       email="brucewillis@hollywoodstar.com",
                       about="Balding is God's way of showing you are only human... He takes the hair off your head and puts it in your ears.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Owner", password=pw)
    BryanCranston = User(first_name="Bryan",
                         last_name="Cranston", username="WalterWhite",
                         email="bryancranston@hollywoodstar.com",
                         about="Love music of all sorts, I'm actually a composer!",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Owner", password=pw)
    ChanningTatum = User(first_name="Channing",
                         last_name="Tatum", username="ChanChan",
                         email="channingtatum@hollywoodstar.com",
                         about="Life is too short to miss out on the beautiful things like a double cheeseburger.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    CharlizeTheron = User(first_name="Charlize",
                          last_name="Theron", username="CharlizeTheron",
                          email="charlizetheron@hollywoodstar.com",
                          about="You choose the life you want for yourself, and then you just shut up and go about it. That's how I've lived my life.",
                          profile_pix="https://i.imgur.com/AalEoSw.png",
                          account_type="Reviewer", password=pw)
    ChrisHemsworth = User(first_name="Chris",
                          last_name="Hemsworth", username="Thooooor",
                          email="chrishemsworth@hollywoodstar.com",
                          about="I have sporadic OCD cleaning moments around the house. But then I get lazy and I'm cured. It's a very inconsistent personality trait.",
                          profile_pix="https://i.imgur.com/AalEoSw.png",
                          account_type="Reviewer", password=pw)
    ChrisPine = User(first_name="Chris",
                     last_name="Pine", username="ImTheCaptainNow",
                     email="chrispine@hollywoodstar.com",
                     about="My brain's not sharp enough to come up with a witty comment.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    ChrisPratt = User(first_name="Chris",
                      last_name="Pratt", username="MonkeyBoy",
                      email="chrispratt@hollywoodstar.com",
                      about="My favorite way to blow off steam is to sing obnoxiously loud in the shower.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    ChristopherWalken = User(first_name="Christopher",
                             last_name="Walken", username="LotsaCommas",
                             email="christopherwalken@hollywoodstar.com",
                             about="I like cats a lot. I've always liked cats. They're great company. When they eat, they always, leave, a little bit, at the bottom, of the bowl. A dog, will polish the bowl, but a cat, always leaves, a little bit. It's like an offering.",
                             profile_pix="https://i.imgur.com/AalEoSw.png",
                             account_type="Reviewer", password=pw)
    DenzelWashington = User(first_name="Denzel",
                            last_name="Washington", username="DenzelWash",
                            email="denzelwashington@hollywoodstar.com",
                            about="Nothing in life is worthwhile unless you take risks. Fall forward. Every failed experiment is one step closer to success.",
                            profile_pix="https://i.imgur.com/AalEoSw.png",
                            account_type="Reviewer", password=pw)
    DonCheadle = User(first_name="Don",
                      last_name="Cheadle", username="TheCheadle",
                      email="doncheadle@hollywoodstar.com",
                      about="One truth that I know for sure, for me anyway, is that the more you know, the more you realize that you don't know.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    DrewBarrymore = User(first_name="Drew",
                         last_name="Barrymore", username="NotBarryless",
                         email="drewbarrymore@hollywoodstar.com",
                         about="Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    DustinHoffman = User(first_name="Dustin",
                         last_name="Hoffman", username="Dustin",
                         email="dustinhoffman@hollywoodstar.com",
                         about="I wanted to be a jazz pianist, but I wasn't good enough. I got into city college because I didn't have the grades to get into university. I took acting because it was a way to get three credits. I just needed three credits and my friend told me to take acting because it was like gym - nobody fails you. I took it and that's literally how I got involved in acting.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    DwayneJohnson = User(first_name="Dwayne",
                         last_name="Johnson", username="SmellMyCooking",
                         email="dwaynejohnson@hollywoodstar.com",
                         about="Always asked, 'Whats the key to success?' The key is, there is no key. Be humble, hungry and always be the hardest worker in the room.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    ElliotPage = User(first_name="Elliot",
                      last_name="Page", username="LivingAsMyself",
                      email="elliotpage@hollywoodstar.com",
                      about="I can’t begin to express how remarkable it feels to finally love who I am enough to pursue my authentic self.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    EmilyBlunt = User(first_name="Emily",
                      last_name="Blunt", username="EmilyBlunt",
                      email="emilyblunt@hollywoodstar.com",
                      about="I was never a girl that dreamt of being a princess and I never dreamt about my wedding day. I hated pink and I hated fairies. I only liked hanging out with boys. I remember throwing a tantrum if my mum put me in pink. I wasn't a particularly girly girl.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    EmmaThompson = User(first_name="Emma",
                        last_name="Thompson", username="EmmaThompson",
                        email="emmathompson@hollywoodstar.com",
                        about="You can't imagine what satisfaction can be gotten from throwing a pie into someone's face.",
                        profile_pix="https://i.imgur.com/AalEoSw.png",
                        account_type="Reviewer", password=pw)
    EmmaWatson = User(first_name="Emma",
                      last_name="Watson", username="EmmaWatson",
                      email="emmawatson@hollywoodstar.com",
                      about="I don't want other people to decide who I am. I want to decide that for myself.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    GeorgeClooney = User(first_name="George",
                         last_name="Clooney", username="Georgie",
                         email="georgeclooney@hollywoodstar.com",
                         about="I don't believe in happy endings but I believe in happy journeys.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    IanMcKellen = User(first_name="Ian",
                       last_name="McKellen", username="ThatsSirToYou",
                       email="ianmckellen@hollywoodstar.com",
                       about="Try and understand what part you have to play in the world in which you live. There's more to life than you know and it's all happening out there. Discover what part you can play and then go for it.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    JackyChan = User(first_name="Jacky",
                     last_name="Chan", username="KingFuMaster",
                     email="jackychan@hollywoodstar.com",
                     about="We learn martial arts as helping weakness. You never fight for people to get hurt. You're always helping people.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    JamesMcAvoy = User(first_name="James",
                       last_name="McAvoy", username="OGTumnus",
                       email="jamesmcavoy@hollywoodstar.com",
                       about="A story about my life would be utterly dull.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    JenniferAniston = User(first_name="Jennifer",
                           last_name="Aniston", username="Rachem",
                           email="jenniferaniston@hollywoodstar.com",
                           about="There are no regrets in life, just lessons.",
                           profile_pix="https://i.imgur.com/AalEoSw.png",
                           account_type="Reviewer", password=pw)
    JenniferLawrence = User(first_name="Jennifer",
                            last_name="Lawrence", username="JLaw",
                            email="jenniferlawrence@hollywoodstar.com",
                            about="Everyone's brain works in a different way. I didn't feel smart in school; I just didn't get it. I thought I was an idiot. Until I got out.",
                            profile_pix="https://i.imgur.com/AalEoSw.png",
                            account_type="Reviewer", password=pw)
    JohnKrasinski = User(first_name="John",
                         last_name="Krasinski", username="Krazyski",
                         email="johnkrasinski@hollywoodstar.com",
                         about="Always trying new things is always more fun, and it can be scary, but it's always more fun in the end.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    JohnnyDepp = User(first_name="Johnny",
                      last_name="Depp", username="jdepp",
                      email="johnnydepp@hollywoodstar.com",
                      about="You can close your eyes to the things you don't want to see, but you can't close your heart to the things you don't want to feel.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    KateBeckinsale = User(first_name="Kate",
                          last_name="Beckinsale", username="PrankerSupreme",
                          email="katebeckinsale@hollywoodstar.com",
                          about="Books have always helped me make sense of things. With any life experience, you can find someone who has documented it in a poetic way.",
                          profile_pix="https://i.imgur.com/AalEoSw.png",
                          account_type="Reviewer", password=pw)
    KeanuReeves = User(first_name="Keanu",
                       last_name="Reeves", username="Neo",
                       email="keanureeves@hollywoodstar.com",
                       about="Art is about trying to find the good in people, and making the world a more compassionate place.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    KenJeong = User(first_name="Ken",
                    last_name="Jeong", username="NoReallyImADoctor",
                    email="kenjeong@hollywoodstar.com",
                    about="I'm definitely a people pleaser. I like people to be happy around me and be comfortable. I go out of my way, sometimes to a fault, to make sure everyone is okay.",
                    profile_pix="https://i.imgur.com/AalEoSw.png",
                    account_type="Reviewer", password=pw)
    LeornadoDiCaprio = User(first_name="Leornado",
                            last_name="DiCaprio", username="DeeeCaprio",
                            email="leaornadodicaprio@hollywoodstar.com",
                            about="There is no element of genius without some form of madness.",
                            profile_pix="https://i.imgur.com/AalEoSw.png",
                            account_type="Reviewer", password=pw)
    LiamNeeson = User(first_name="Liam",
                      last_name="Neeson", username="LiamNissan",
                      email="liamneeson@hollywoodstar.com",
                      about="I'm a big believer in acts of kindness, no matter how small.",
                      profile_pix="https://i.imgur.com/AalEoSw.png",
                      account_type="Reviewer", password=pw)
    MattDamon = User(first_name="Matt",
                     last_name="Damon", username="DemApples",
                     email="mattdamon@hollywoodstar.com",
                     about="Sometimes all you need is 20 seconds of insane courage.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    MerylStreep = User(first_name="Meryl",
                       last_name="Streep", username="MerylStreep",
                       email="merylstreep@hollywoodstar.com",
                       about="What makes you different or weird, that's your strength.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    MichelleYeoh = User(first_name="Michelle",
                        last_name="Yeoh", username="MichelleYeoh",
                        email="michelleyeoh@hollywoodstar.com",
                        about="Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.",
                        profile_pix="https://i.imgur.com/AalEoSw.png",
                        account_type="Reviewer", password=pw)
    MorganFreeman = User(first_name="Morgan",
                         last_name="Freeman", username="VoiceOfGod",
                         email="morganfreeman@hollywoodstar.com",
                         about="Challenge yourself; it’s the only path which leads to growth.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    NicoleKidman = User(first_name="Nicole",
                        last_name="Kidman", username="NicoleKidman",
                        email="nicolekidman@hollywoodstar.com",
                        about="Sometimes your mistakes are you biggest virtues. You learn so much from the mistake. Those things that you think are the worst thing that's happening to you can somehow turn around and be the greatest opportunity.",
                        profile_pix="https://i.imgur.com/AalEoSw.png",
                        account_type="Reviewer", password=pw)
    PaulRudd = User(first_name="Paul",
                    last_name="Rudd", username="Ruddy",
                    email="paulrudd@hollywoodstar.com",
                    about="Venti is twenty. Large is large. In fact, tall is large and grande is Spanish for large. Venti is the only one that doesn't mean large. It's also the only one that's Italian. Congratulations, you're stupid in three languages.",
                    profile_pix="https://i.imgur.com/AalEoSw.png",
                    account_type="Reviewer", password=pw)
    RandallPark = User(first_name="Randall",
                       last_name="Park", username="AsianJim",
                       email="randallpark@hollywoodstar.com",
                       about="I pretty much ate everything that I like and I've always wanted to eat and I just didn't hold myself back and it was the best.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    RobertDeNiro = User(first_name="Robert",
                        last_name="De Niro", username="utalking2me",
                        email="robertdeniro@hollywoodstar.com",
                        about="You learned the two greatest thing in life, never rat on your friends, and always keep your mouth shut.",
                        profile_pix="https://i.imgur.com/AalEoSw.png",
                        account_type="Reviewer", password=pw)
    RobertDowneyJr = User(first_name="Robert",
                          last_name="Downey Jr.", username="RealIronMan",
                          email="robertdowneyjr@hollywoodstar.com",
                          about="Remember that just because you hit bottom doesn't mean you have to stay there.",
                          profile_pix="https://i.imgur.com/AalEoSw.png",
                          account_type="Reviewer", password=pw)
    RyanGosling = User(first_name="Ryan",
                       last_name="Gosling", username="Goosling",
                       email="ryangosling@hollywoodstar.com",
                       about="I feel there is something nice about not talking. Like you can say more by actually saying less.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    SamuelLJackson = User(first_name="Samuel",
                          last_name="L. Jackson", username="OneBadMofo",
                          email="samuelljackson@hollywoodstar.com",
                          about="Everybody has to learn that the world works in very specific ways, and you're not in charge of it.",
                          profile_pix="https://i.imgur.com/AalEoSw.png",
                          account_type="Reviewer", password=pw)
    SandraBullock = User(first_name="Sandra",
                         last_name="Bullock", username="SandraBullock",
                         email="sandrabullock@hollywoodstar.com",
                         about="There's no race, no religion, no class system, no color - nothing - no sexual orientation, that makes us better than anyone else. We're all deserving of love.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    ScarlettJohansson = User(first_name="Scarlett",
                             last_name="Johansson", username="JustCallMeSpider",
                             email="scarlettjohansson@hollywoodstar.com",
                             about="When we live our lives everyday, we're met by opportunities, and most of us don't even recognize them.",
                             profile_pix="https://i.imgur.com/AalEoSw.png",
                             account_type="Reviewer", password=pw)
    SethRogen = User(first_name="Seth",
                     last_name="Rogen", username="OneFunnyGuy",
                     email="sethrogen@hollywoodstar.com",
                     about="Please don't wear skinny jeans if you don't have skinny genes.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    SteveCarell = User(first_name="Steve",
                       last_name="Carell", username="LoveMyMinions",
                       email="stevecarell@hollywoodstar.com",
                       about="Do I want to be feared or loved? That's a good question. I want both. I want people to be afraid of how much they love me.",
                       profile_pix="https://i.imgur.com/AalEoSw.png",
                       account_type="Reviewer", password=pw)
    TomCruise = User(first_name="Tom",
                     last_name="Cruise", username="Cruiser",
                     email="tomcruise@hollywoodstar.com",
                     about="Someday. That's a dangerous word. It's really just a code for 'never'.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    TomHanks = User(first_name="Tom",
                    last_name="Hanks", username="T.Hanks",
                    email="tomhanks@hollywoodstar.com",
                    about="If it wasn't hard, everyone would do it. It's the hard that makes it great.",
                    profile_pix="https://i.imgur.com/AalEoSw.png",
                    account_type="Reviewer", password=pw)
    TomHiddleston = User(first_name="Tom",
                         last_name="Hiddleston", username="BetterThanThor",
                         email="tomhiddleston@hollywoodstar.com",
                         about="Make love, not war. Unless you’re Loki, in which case: do what you want.",
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)
    VinDiesel = User(first_name="Vin",
                     last_name="Diesel", username="Groooooot",
                     email="vindiesel@hollywoodstar.com",
                     about="It's insecurity that is always chasing you and standing in the way of your dreams.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    WillSmith = User(first_name="Will",
                     last_name="Smith", username="FreshPrince",
                     email="willsmith@hollywoodstar.com",
                     about="Don't chase people. Be yourself, do your own thing and work hard. The right people - the ones who really belong in your life - will come to you. And Stay.",
                     profile_pix="https://i.imgur.com/AalEoSw.png",
                     account_type="Reviewer", password=pw)
    ZacEfron = User(first_name="Zac",
                    last_name="Efron", username="NoMoreDisney",
                    email="zacefron@hollywoodstar.com",
                    about="When you're young everything feels like the end of the world, but its not; its just the beginning.",
                    profile_pix="https://i.imgur.com/AalEoSw.png",
                    account_type="Reviewer", password=pw)

    for _ in range(1, 40):
        fakerUser = User(first_name=fake.first_name(),
                         last_name=fake.last_name(), username=fake.username(),
                         email=fake.email(),
                         about=fake.text(max_nb_chars=160),
                         profile_pix="https://i.imgur.com/AalEoSw.png",
                         account_type="Reviewer", password=pw)

    db.session.add(DemoUser)
    db.session.add(BobRoss)
    db.session.add(DemoLovato)
    db.session.add(DemoMoore)
    db.session.add(AdamSandler)
    db.session.add(AmyAdams)
    db.session.add(AngelinaJolie)
    db.session.add(ArnoldSchwarzenegger)
    db.session.add(BenAffleck)
    db.session.add(BenedictCumberbatch)
    db.session.add(BruceWillis)
    db.session.add(BryanCranston)
    db.session.add(ChanningTatum)
    db.session.add(CharlizeTheron)
    db.session.add(ChrisHemsworth)
    db.session.add(ChrisPine)
    db.session.add(ChrisPratt)
    db.session.add(ChristopherWalken)
    db.session.add(DenzelWashington)
    db.session.add(DonCheadle)
    db.session.add(DrewBarrymore)
    db.session.add(DustinHoffman)
    db.session.add(DwayneJohnson)
    db.session.add(ElliotPage)
    db.session.add(EmilyBlunt)
    db.session.add(EmmaThompson)
    db.session.add(EmmaWatson)
    db.session.add(GeorgeClooney)
    db.session.add(IanMcKellen)
    db.session.add(JackyChan)
    db.session.add(JamesMcAvoy)
    db.session.add(JenniferAniston)
    db.session.add(JenniferLawrence)
    db.session.add(JohnKrasinski)
    db.session.add(JohnnyDepp)
    db.session.add(KateBeckinsale)
    db.session.add(KeanuReeves)
    db.session.add(KenJeong)
    db.session.add(LeornadoDiCaprio)
    db.session.add(LiamNeeson)
    db.session.add(MattDamon)
    db.session.add(MerylStreep)
    db.session.add(MichelleYeoh)
    db.session.add(MorganFreeman)
    db.session.add(NicoleKidman)
    db.session.add(PaulRudd)
    db.session.add(RandallPark)
    db.session.add(RobertDeNiro)
    db.session.add(RobertDowneyJr)
    db.session.add(RyanGosling)
    db.session.add(SamuelLJackson)
    db.session.add(SandraBullock)
    db.session.add(ScarlettJohansson)
    db.session.add(SethRogen)
    db.session.add(SteveCarell)
    db.session.add(TomCruise)
    db.session.add(TomHanks)
    db.session.add(TomHiddleston)
    db.session.add(VinDiesel)
    db.session.add(WillSmith)
    db.session.add(ZacEfron)
    db.session.add(fakerUser)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
