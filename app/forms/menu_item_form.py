from flask_wtf import FlaskForm
from wtforms import StringField, HiddenField, DecimalField, TextAreaField
from wtforms.validators import DataRequired


class MenuItemForm(FlaskForm):
    creator_id = HiddenField('creator_id')
    restaurant_id = HiddenField('restaurant_id')
    food_name = StringField('Food Name', validators=[
        DataRequired(message='Please input the name of the item!')])
    price = DecimalField('Price', validators=[
        DataRequired(message='Please input the price of the item!')])
    description = TextAreaField('Description', validators=[
        DataRequired(message='Please include a description of the item!')])
    food_pix = StringField('Picture')
