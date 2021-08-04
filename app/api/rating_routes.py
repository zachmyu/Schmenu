from flask import Blueprint, request, jsonify
from app.models import db, Rating
from app.forms import RatingForm
from flask_login import login_required


rating_routes = Blueprint('ratings', __name__)


def validation_err_msgs(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# READ ONE = Rating
@rating_routes.route('/<int:id>/')
def rating(id):
    ratings = Rating.query.get(id)
    return ratings.to_dict()


# READ ALL - Query by menu_items = Rating
@rating_routes.route('/menuitems/<int:id>/')
def ratings_by_items(id):
    ratings = Rating.query.filter_by(menu_item_id=id).all()
    return {rating.id: rating.to_dict() for rating in ratings}


# READ ALL - Query by users = Rating
@rating_routes.route('/users/<int:user_id>/')
def ratings_by_users(user_id):
    ratings = Rating.query.filter_by(user_id=user_id).all()
    return {rating.id: rating.to_dict() for rating in ratings}


# CREATE = Rating
@rating_routes.route('/create/', methods=['POST'])
@login_required
def rating_add():
    form = RatingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        rating = Rating(
            user_id=form.data['user_id'],
            menu_item_id=form.data['menu_item_id'],
            review=form.data['review'],
            rating=form.data['rating']
        )
        db.session.add(rating)
        db.session.commit()
        return {'rating': rating.to_dict()}
    return {'errors': validation_err_msgs(form.errors)}, 401


#UPDATE = Rating
@rating_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def rating_edit(id):
    form = RatingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_rating = Rating.query.get(id)
        form.populate_obj(edit_rating)
        db.session.commit()
        return edit_rating.to_dict()
    return {'errors': validation_err_msgs(form.errors)}, 401


# DELETE = Rating
@rating_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def rating_delete(id):
    delete_rating = Rating.query.get(id)
    db.session.delete(delete_rating)
    db.session.commit()
    return jsonify('Rating has been deleted!')
