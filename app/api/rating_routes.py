from flask import Blueprint, request, jsonify
from app.models import db, Rating, menu_item
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
@rating_routes.route('/<int:id>')
def rating(id):
    ratings = Rating.query.get(id)
    return ratings.to_dict()


# # READ ALL = Ratings (Might be too many to list)
@rating_routes.route('/')
def ratings(menu_item_id):
    ratings = Rating.query.filter_by(menu_item_id=menu_item_id).all()
    return {'ratings': [rating.to_dict() for rating in ratings]}


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

# /ratings
# Ratings Create / List Routes
# GET('/') - Obtain list of Ratings
# Query through ratings.menu_item_id or ratings.user_id
# GET('/:id') - Obtain detail of single rating review
# For edit/delete purposes on modal
# POST('/') - Create a new restaurant
# PUT('/:id') - Update restaurant information
# DELETE('/:id') - Delete the restaurant
