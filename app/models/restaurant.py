from flask_login import UserMixin
from .db import db


class Restaurant(db.Model, UserMixin):
    __tablename__ = 'restaurants'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(255), nullable=False, unique=False)
    address = db.Column(db.String(255), nullable=False)
    restaurant_type = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    restaurant_pix = db.Column(db.String(1000), nullable=True)
    latitude = db.Column(db.Float, nullable=True)
    longitude = db.Column(db.Float, nullable=True)

    menu_items = db.relationship('Menu_item', back_populates='restaurants')
    users = db.relationship('User', back_populates='restaurants')

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'address': self.address,
            'restaurant_type': self.restaurant_type,
            'description': self.description,
            'restaurant_pix': self.restaurant_pix,
            "latitude": self.latitude,
            "longitude": self.longitude,
        }
