from flask_login import UserMixin
from .db import db


class Menu_item(db.Model, UserMixin):
    __tablename__ = 'menu_items'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
    food_name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text(), nullable=False, unique=True)
    food_pix = db.Column(db.String(1000), nullable=True)

    users = db.relationship('User', back_populates='menu_items')
    restaurants = db.relationship('Restaurant', back_populates='menu_items')
    ratings = db.relationship('Rating', back_populates='menu_items')
    saves = db.relationship('Save', back_populates='menu_items')

    def to_dict(self):
        return {
            'id': self.id,
            'creator_id': self.creator_id,
            'restaurant_id': self.restaurant_id,
            'food_name': self.food_name,
            'price': self.price,
            'description': self.description,
            'food_pix': self.food_pix,
            "ratings": {rating.id: rating.to_dict() for rating in self.ratings},
            "saves": {save.id: save.to_dict() for save in self.saves}
        }
