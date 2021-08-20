from app.models import db, Restaurant
from faker import Faker

fake = Faker()


def seed_restaurants():
    num1 = Restaurant(owner_id=1, name="Banh Oui",
                      address="1552 N Cahuenga Blvd Los Angeles, CA 90028",
                      restaurant_type="cd",
                      description="There is something magical about dining where you can tell there is passion and integrity to every dish, and every component of every dish. Bahn Oui is a relatable, comfortable, and fine dining experience nestled into the bustling busy streets of Hollywood. The flavors are intense and clean, not jumbled and overpowering. The space itself is bright and quaint, yet offers seating inside and outside. It's open, you can see the dishes being prepared right in front of you, smells and joy included.",
                      restaurant_pix="https://s3-media0.fl.yelpcdn.com/bphoto/aJgqzzJyUW829kV1KhaJLA/o.jpg",
                      latitude=33.620255838609026, longitude=-117.925500905021,)
    num2 = Restaurant(owner_id=2, name="Love Letter Pizza & Chicken",
                      address="15435 S Western Ave Ste 112 Gardena, CA 90249",
                      restaurant_type="cd",
                      description="The sweet and mild chicken is everyone's favorite. The tender Fired Chicken is lightly covered with Love Letter's special nutritional sweet and mild sauce, which uses 20 different vegetables as ingredients. Love Letter also specializes in pizza, but this is not your ordinary pizza. It is a fusion of the classic Italian dish with a Korean twist. Try our Sweet Potato Gold Pizza or our Bulgogi Supreme Pizza to get an idea!",
                      restaurant_pix="https://s3-media0.fl.yelpcdn.com/bphoto/gRFSIG_Q52QvaVcgPztbXA/o.jpg",
                      latitude=29.758558000158192, longitude=-95.3654791369215,)
    num3 = Restaurant(owner_id=4, name="Anarkali Indian Restaurant",
                      address="7013 Melrose Ave Los Angeles, CA 90038",
                      restaurant_type="ot",
                      description="Welcoming staff, cute atmosphere, authentic Indian cuisine",
                      restaurant_pix="https://s3-media0.fl.yelpcdn.com/bphoto/yEt68E49xXO-KJgqMt3ojQ/o.jpg",
                      latitude=33.60278047968448, longitude=-117.898856235707,)
    num4 = Restaurant(owner_id=5, name="Kang Ho-dong Baekjeong",
                      address="3465 W 6th St Ste 20 Los Angeles, CA 90020",
                      restaurant_type="cf",
                      description="Set meals of Korean BBQ with the freshest and most delicious meat, welcoming staff, and great atmosphere",
                      restaurant_pix="https://s3-media0.fl.yelpcdn.com/bphoto/QUUB0he4BDSWJzJYJmKmGw/o.jpg",
                      latitude=33.78782303716802, longitude=-117.820438597004,)
    num5 = Restaurant(owner_id=1, name="Haidilao Hot Pot",
                      address="10250 Santa Monica Blvd Ste 2610 Los Angeles, CA 90067",
                      restaurant_type="bf",
                      description="Delicious hot pot with many different soup base choices and an excellent selection of meats, vegetables, noodles, and all kinds of other delicacies.",
                      restaurant_pix="https://s3-media0.fl.yelpcdn.com/bphoto/bPWn0oAn4GWP4UKr8MpoQw/o.jpg",
                      latitude=33.72704356832726, longitude=-117.793392289645,)
    num6 = Restaurant(owner_id=2, name="Gulliver’s Prime Ribs of Beef",
                      address="18482 MacArthur Boulevard Irvine CA 92612",
                      restaurant_type="ot",
                      description="Diners can enjoy prime rib as well as classic steaks and other American dishes made from hand-selected ingredients",
                      restaurant_pix="https://img.grouponcdn.com/deal/4EUdzNhpStSgHbyjn7PWqSFkCz4S/4E-700x420/v1/c870x524.webp",
                      latitude=33.67970281550026, longitude=-117.85861872034125,)
    db.session.add(num1)
    db.session.add(num2)
    db.session.add(num3)
    db.session.add(num4)
    db.session.add(num5)
    db.session.add(num6)

    for _ in range(100):
        fakerRestaurant = Restaurant(owner_id=fake.random_int(min=4, max=12),
                                     name=fake.company(),
                                     address=fake.address(),
                                     restaurant_type=fake.word(
            ext_word_list=['Fine-Dining', 'Casual-Dining', 'Fast-Food', 'Cafe', 'Buffet', 'Other']),
            description=fake.paragraph(nb_sentences=5),
            restaurant_pix='https://i.imgur.com/EaFCzkW.jpg',
            latitude=fake.latitude(), longitude=fake.longitude())
        db.session.add(fakerRestaurant)

    db.session.commit()


def undo_restaurants():
    db.session.execute('TRUNCATE restaurants RESTART IDENTITY CASCADE;')
    db.session.commit()
