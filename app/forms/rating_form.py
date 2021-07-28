from flask_wtf import FlaskForm
from wtforms import HiddenField, TextAreaField, RadioField
from wtforms.validators import DataRequired


class RatingForm(FlaskForm):
    user_id = HiddenField('user_id')
    menu_item_id = HiddenField('menu_item_id')
    review = TextAreaField('Body', validators=[DataRequired(
        message='Please write your review here!')])
    rating = RadioField('Rating', validators=[DataRequired(message='Please add a rating to your review!')],
                        choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')])
