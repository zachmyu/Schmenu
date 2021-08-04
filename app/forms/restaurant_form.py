from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FloatField, HiddenField
from wtforms.validators import DataRequired


class RestaurantForm(FlaskForm):
    owner_id = HiddenField('owner_id')
    name = StringField('Name', validators=[DataRequired(
        message='Please add the name of the restaurant!')])
    address = TextAreaField('Address', validators=[DataRequired(
        message='Please add the address of the restaurant!')])
    restaurant_type = StringField('Type', validators=[DataRequired(
        message='Please select the type of restaurant you are adding!')])
    description = TextAreaField('Description', validators=[
                                DataRequired(message='Please include a description of the restaurant!')])
    restaurant_pix = StringField('Picture of the Restaurant')
    latitude = FloatField('Latitude')
    longitude = FloatField('Longitude')
