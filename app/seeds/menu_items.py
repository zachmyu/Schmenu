from app.models import db, Menu_item
from faker import Faker

fake = Faker()


def seed_menu_items():
    num1 = Menu_item(creator_id=7, restaurant_id=1,
                     food_name="Oui Burger", price=13,
                     description="Portuguese Roll, Beef blend, caramelized Onion, Nuoc Cham, Pickle, Cheddar, Mint, Cilantro, Sriracha Mayo, Lettuce, Chili, and Pate",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/hm7GpzUxBWCfk5rF5F8x3g/o.jpg")
    num2 = Menu_item(creator_id=8, restaurant_id=1,
                     food_name="Pork Belly Banh Mi", price=12,
                     description="Crispy Tender Five-spiced Port Belly in French Roll, with picked carrot and daikon, cucumber, chili, scallion, mint, cilantro, Kewpie mayo, and chicken liver pate.",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/nRLUSkRj8dZITtf3gLciGg/o.jpg")
    num3 = Menu_item(creator_id=1, restaurant_id=1,
                     food_name="Chicken Katsu Sandwich", price=13,
                     description="Fried Japanese Panko breaded chicken breast in French Roll, with picked carrot and daikon, cucumber, chili, scallion, mint, cilantro, Kewpie mayo, and chicken liver pate.",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/RaLNv_1reuKFZpGG4QjyEg/o.jpg")
    num4 = Menu_item(creator_id=1, restaurant_id=1,
                     food_name="Shrimp Banh Mi", price=12,
                     description="Fried rock shrimp in French Roll, with picked carrot and daikon, cucumber, chili, scallion, mint, cilantro, Kewpie mayo, and chicken liver pate.",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/HMGaIj9M_kttMRRHRb8RFw/o.jpg")
    num5 = Menu_item(creator_id=1, restaurant_id=2,
                     food_name="Beef Bulgogi Cheese Fries", price=15,
                     description="Fried potatoes topped with cheese and chili.",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/C6GcmIQhGU2N08oaa8mLrg/o.jpg")
    num6 = Menu_item(creator_id=2, restaurant_id=2,
                     food_name="Garlic Parmesan Cheese Tots", price=8.5,
                     description="Fried grated potatoes smothered in garlic and melted parmesan",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/2mVCmDHp3xv8RjdeI1qR_g/o.jpg")
    num7 = Menu_item(creator_id=2, restaurant_id=2,
                     food_name="Kimchi Chicken Pasta", price=15.5,
                     description="Made with a base of tomato sauce stir-fried with kimchi and chicken, this pasta dish is sure to please ",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/VLsZRW24M_e5iwYqdvy-wQ/o.jpg")
    num8 = Menu_item(creator_id=3, restaurant_id=2,
                     food_name="Original Fried Chicken Wings", price=21.95,
                     description="Single battered fried chicken wings with spicy korean sauce.",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/5JCbHbidP48Fh1v5_d2BgQ/o.jpg")
    num9 = Menu_item(creator_id=3, restaurant_id=2,
                     food_name="Sweet and Mild Fried Chicken Wings", price=21.95,
                     description="Single battered fried chicken wings drowned in a sweet and sour sauce.",
                     food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/-0XMPkf-Ecq3GTNgxmPHQw/o.jpg")
    num10 = Menu_item(creator_id=4, restaurant_id=2,
                      food_name="Sweet Potato Gold Pizza", price=17.99,
                      description="Sweet potato chunks, white sauce, sausage, ham, pineapple, onion, bell pepper, corn, and cheese. Our pizza dough is made with the highest quality. Each dough is hand pressed and rolled for freshness.",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/X_0KG2vvkki0TUr5JqA9Og/o.jpg")
    num11 = Menu_item(creator_id=4, restaurant_id=3,
                      food_name="Chicken Tikka Masala Royal Feast", price=13.95,
                      description="Chicken tikka is marinated with various different spices before being cooked on a skewer in the tandoori oven.",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/j003XaNZNX_gC2FNGdyfgw/o.jpg")
    num12 = Menu_item(creator_id=5, restaurant_id=3,
                      food_name="Vegetable Cocounut Curry", price=11.95,
                      description="Assorted vegetables cooked in a coconut curry, a good option for vegans and vegetarians",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/aB8J-Qq-7PViN8cX-u4WoA/o.jpg")
    num13 = Menu_item(creator_id=5, restaurant_id=3,
                      food_name="Lamb Curry", price=13.95,
                      description="Lamb cooked in a Traditional Onion based curry",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/emCvo2oAI1UnzCn7LjECbg/o.jpg")
    num14 = Menu_item(creator_id=6, restaurant_id=4,
                      food_name="Beef Combo (Small)", price=79.99,
                      description="Thinly Sliced Brisket + Prime Marinated Beef + Prime Boneless Short Rib Or Prime Rib Eye + Soybean Paste Stew Or Pork Kimchi Stew - Serves 4-6",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/tKcBj5hmbCFAGoe90IC-EA/o.jpg")
    num15 = Menu_item(creator_id=6, restaurant_id=4,
                      food_name="Beef Combo (Large)", price=129.99,
                      description="Thinly Sliced Brisket + Prime Marinated Beef + Prime Boneless Short Rib Or Prime Rib Eye + Soybean Paste Stew Or Pork Kimchi Stew - Serves 7-10",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/hnxb1sxmTY_PXxysiEdkiw/o.jpg")
    num16 = Menu_item(creator_id=7, restaurant_id=4,
                      food_name="Pork Combo (Small)", price=69.99,
                      description="Premium Seared Pork Belly + Premium Pork Jowl + Marinated Pork Collar Or Thinly Sliced Spicy Pork Belly + Soybean Paste Stew Or Pork Kimchi Stew - Serves 4-6",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/w6Ge7NQQjISOsHffw6-ClQ/o.jpg")
    num17 = Menu_item(creator_id=8, restaurant_id=4,
                      food_name="Pork Combo (Large)", price=109.99,
                      description="Premium Seared Pork Belly + Premium Pork Jowl + Marinated Pork Collar Or Thinly Sliced Spicy Pork Belly + Soybean Paste Stew Or Pork Kimchi Stew - Serves 7-10",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/9ZwQq5vTbhROHdGJXHCFpw/o.jpg")
    num18 = Menu_item(creator_id=8, restaurant_id=5,
                      food_name="Seafood Combo Plate", price=18.99,
                      description="Sliced sea bass, scallops, shrimps, mussells, and squid",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/HJCH2v8dIJX-_ggVzE9lLQ/o.jpg")
    num19 = Menu_item(creator_id=9, restaurant_id=5,
                      food_name="Assorted Soup Base", price=5.99,
                      description="Combo soup base of choice - pictured as bone broth and spicy (Mala)",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/Uf1jDCvLg_e2_aRutSQ-MA/o.jpg")
    num20 = Menu_item(creator_id=9, restaurant_id=5,
                      food_name="Angus short rib combo", 	price=16.99,
                      description="Thinly sliced portions of beautifully marbled Angus Beef short ribs",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/9_QNsKz3skpEfoDiiXgRYw/o.jpg")
    num21 = Menu_item(creator_id=10, restaurant_id=5,
                      food_name="Cuttlefish Paste", price=8.99,
                      description="Cook it as a whole, or split into bite size scoops, this will rival the best fish balls you have ever tried.",
                      food_pix="https://s3-media0.fl.yelpcdn.com/bphoto/9_QNsKz3skpEfoDiiXgRYw/o.jpg")
    db.session.add(num1)
    db.session.add(num2)
    db.session.add(num3)
    db.session.add(num4)
    db.session.add(num5)
    db.session.add(num6)
    db.session.add(num7)
    db.session.add(num8)
    db.session.add(num9)
    db.session.add(num10)
    db.session.add(num11)
    db.session.add(num12)
    db.session.add(num13)
    db.session.add(num14)
    db.session.add(num15)
    db.session.add(num16)
    db.session.add(num17)
    db.session.add(num18)
    db.session.add(num19)
    db.session.add(num20)
    db.session.add(num21)

    for _ in range(100):
        fakerMenu = Menu_item(creator_id=fake.random_int(min=1, max=99),
                              restaurant_id=fake.random_int(min=1, max=99),
                              food_name=fake.bs(),
                              price=fake.numerify(text='##.99'),
                              description=fake.paragraph(nb_sentences=5),
                              food_pix='https://i.imgur.com/WSiGBku.jpg')
        db.session.add(fakerMenu)

    db.session.commit()


def undo_menu_items():
    db.session.execute('TRUNCATE menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()
