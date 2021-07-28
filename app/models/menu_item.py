from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Menu_item(db.Model, UserMixin):
    __tablename__ = 'menu_items'

    id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
    food_name = db.Column(db.String(40), nullable=False, unique=True)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text(), nullable=False, unique=True)
    food_pix = db.Column(db.String(1000), nullable=True)

    restaurants = db.relationship('Restaurant', back_populates='menu_items')
    ratings = db.relationship('Rating', back_populates='menu_items')
    saves = db.relationship('Save', back_populates='menu_items')

    def to_dict(self):
        return {
            'id': self.id,
            'restaurant_id': self.restaurant_id,
            'food_name': self.food_name,
            'price': self.price,
            'description': self.description,
            'food_pix': self.food_pix,
            'restaurants': self.restaurants,
            "ratings": {rating.id: rating.to_dict() for rating in self.ratings},
            "saves": {save.id: save.to_dict() for save in self.saves}
        }
