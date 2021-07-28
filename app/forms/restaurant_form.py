from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField
from wtforms.validators import DataRequired


class RestaurantForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(
        message='Please add the name of the restaurant!')])
    address = TextAreaField('Address', validators=[DataRequired(
        message='Please add the address of the restaurant!')])
    types = SelectField('Type', validators=[DataRequired(
        message='Please select the type of restaurant you are adding!')], choices=[('fd', 'Fine Dining'), ('cd', 'Casual Dining'), ('ff', 'Fast Food'), ('cf', 'Cafe'), ('bf', 'Buffett'), ('ot', 'Other')])
    description = TextAreaField('Description', validators=[
                                DataRequired(message='Please include a description of the restaurant!')])
    restaurant_pix = StringField('Picture of the Restaurant')
