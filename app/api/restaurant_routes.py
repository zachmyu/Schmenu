from flask import Blueprint, request, jsonify
from app.models import db, Restaurant
from app.forms import RestaurantForm
from flask_login import login_required
# from app.s3_helpers import (
#     upload_file_to_s3, allowed_file, get_unique_filename)

restaurant_routes = Blueprint('restaurants', __name__)


def validation_err_msgs(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# READ ONE = restaurant
@restaurant_routes.route('/<int:id>/')
def restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()


# READ ALL = Restaurants (can we limit this?)
@restaurant_routes.route('/')
def restaurants():
    restaurants = Restaurant.query.all()
    return {restaurant.id: restaurant.to_dict() for restaurant in restaurants}


# READ ALL BY OWNER = Restaurants (can we limit this?)
@restaurant_routes.route('/owners/<int:id>/')
def restaurants_by_owners(id):
    restaurants = Restaurant.query.filter_by(user_id=id).all()
    return {restaurant.id: restaurant.to_dict() for restaurant in restaurants}


# CREATE = Restaurant
@restaurant_routes.route('/create/', methods=['POST'])
@login_required
def restaurants_add():
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        restaurant = Restaurant(
            owner_id=form.data['owner_id'],
            name=form.data['name'],
            address=form.data['address'],
            restaurant_type=form.data['restaurant_type'],
            description=form.data['description'],
            restaurant_pix=form.data['restaurant_pix'],
            latitude=form.data['latitude'],
            longitude=form.data['longitude']
        )
        db.session.add(restaurant)
        db.session.commit()
        return {'restaurant': restaurant.to_dict()}
    return {'errors': validation_err_msgs(form.errors)}, 401


#UPDATE = Restaurant
@restaurant_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def restaurants_edit(id):
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_restaurant = Restaurant.query.get(id)
        form.populate_obj(edit_restaurant)
        db.session.commit()
        return edit_restaurant.to_dict()
    return {'errors': validation_err_msgs(form.errors)}, 401


# DELETE = Restaurant
@restaurant_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def restaurants_delete(id):
    delete_restaurant = Restaurant.query.get(id)
    db.session.delete(delete_restaurant)
    db.session.commit()
    return jsonify('Restaurant has been deleted!')
